import crypto from "node:crypto";
import { NextResponse } from "next/server";

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

    // Mailchimp basic member data
    const memberData = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName || "",
        LNAME: lastName || "",
        // NOTE: To use MESSAGE and SUBJECT, you must first create these
        // Merge Tags in your Mailchimp Audience Settings.
        // MESSAGE: message || "",
        // SUBJECT: subject || "",
      },
      tags: ["ContactForm"],
    };

    // Log for debugging (remove in production if desired)
    console.log(`Subscribing ${email} to Mailchimp with subject: ${subject}`);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `api_key ${API_KEY}`,
      },
      body: JSON.stringify(memberData),
    });

    const result = await response.json();

    if (!response.ok) {
      if (result.title === "Member Exists") {
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
            tags: ["ContactForm"],
          }),
        });

        return NextResponse.json(
          { message: "Updated existing subscription" },
          { status: 200 },
        );
      }
      return NextResponse.json(
        { error: result.detail || "Mailchimp error" },
        { status: response.status },
      );
    }

    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 },
    );
  }
}
