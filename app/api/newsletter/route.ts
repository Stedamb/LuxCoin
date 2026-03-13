import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { NewsletterWelcomeEmail } from "@/lib/email/newsletter-welcome";

const DISCOUNT_CODE = "LUX15";

export async function POST(req: Request) {
  try {
    const { email, firstName, lastName, message, subject } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const DATACENTER = API_KEY?.split("-")[1];

    if (!API_KEY || !AUDIENCE_ID || !DATACENTER) {
      console.error("Missing Mailchimp configuration");
      return NextResponse.json(
        { error: "Mailchimp configuration is missing" },
        { status: 500 },
      );
    }

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const memberData = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName || "",
        LNAME: lastName || "",
      },
      tags: ["Newsletter"],
    };

    console.log(`Subscribing ${email} to Mailchimp`);

    const mailchimpResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `api_key ${API_KEY}`,
      },
      body: JSON.stringify(memberData),
    });

    const result = await mailchimpResponse.json();
    let isNewSubscriber = true;

    if (!mailchimpResponse.ok) {
      if (result.title === "Member Exists") {
        // Update existing member data
        const memberHash = crypto
          .createHash("md5")
          .update(email.toLowerCase())
          .digest("hex");
        const updateUrl = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${memberHash}`;

        await fetch(updateUrl, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `api_key ${API_KEY}`,
          },
          body: JSON.stringify({
            merge_fields: memberData.merge_fields,
          }),
        });

        isNewSubscriber = false;
      } else {
        return NextResponse.json(
          { error: result.detail || "Mailchimp error" },
          { status: mailchimpResponse.status },
        );
      }
    }

    // Send transactional welcome email via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "newsletter@luxcoin.it";

    if (RESEND_API_KEY) {
      try {
        const resend = new Resend(RESEND_API_KEY);

        const displayName = firstName
          ? `${firstName}${lastName ? ` ${lastName}` : ""}`
          : undefined;

        const emailSubject = isNewSubscriber
          ? `Benvenuto in LuxCoin! 🏛️ Il tuo codice sconto ${DISCOUNT_CODE}`
          : `Il tuo codice sconto LuxCoin – ${DISCOUNT_CODE}`;

        await resend.emails.send({
          from: `LuxCoin <${FROM_EMAIL}>`,
          to: [email],
          subject: emailSubject,
          html: NewsletterWelcomeEmail({
            firstName,
            lastName,
            discountCode: DISCOUNT_CODE,
          }),
          tags: [
            { name: "category", value: "newsletter_welcome" },
          ],
        });

        console.log(`Welcome email sent to ${email}`);
      } catch (emailErr) {
        // Log but don't fail the request if email sending fails
        console.error("Resend email error:", emailErr);
      }
    } else {
      console.warn("RESEND_API_KEY not set – skipping welcome email");
    }

    return NextResponse.json(
      {
        message: isNewSubscriber
          ? "Iscrizione completata con successo"
          : "Dati aggiornati con successo",
      },
      { status: isNewSubscriber ? 201 : 200 },
    );
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 },
    );
  }
}
