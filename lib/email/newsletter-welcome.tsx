interface NewsletterWelcomeEmailProps {
  firstName?: string;
  lastName?: string;
  discountCode: string;
}

export function NewsletterWelcomeEmail({
  firstName,
  lastName,
  discountCode,
}: NewsletterWelcomeEmailProps): string {
  const displayName = firstName
    ? `${firstName}${lastName ? ` ${lastName}` : ""}`
    : "Collezionista";

  return `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Benvenuto in LuxCoin – Il tuo codice sconto</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Georgia',serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;padding:40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#111111;border:1px solid #2a2a2a;border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#111111 0%,#1a1400 50%,#111111 100%);padding:48px 40px 32px;text-align:center;border-bottom:1px solid #2a2a2a;">
              <p style="margin:0 0 24px;font-family:'Georgia',serif;font-size:11px;letter-spacing:4px;color:#c8a84b;text-transform:uppercase;">Est. 2024</p>
              <h1 style="margin:0;font-family:'Georgia',serif;font-size:36px;color:#f5e6c4;letter-spacing:2px;font-weight:400;">LUXCOIN</h1>
              <p style="margin:8px 0 0;font-family:'Georgia',serif;font-size:12px;letter-spacing:6px;color:#7a6a3a;text-transform:uppercase;">Numismatica · Antichità</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:48px 40px 32px;">
              <p style="margin:0 0 16px;font-family:'Georgia',serif;font-size:15px;color:#8a8a8a;letter-spacing:1px;text-transform:uppercase;">
                Benvenuto/a,
              </p>
              <h2 style="margin:0 0 24px;font-family:'Georgia',serif;font-size:28px;color:#f5e6c4;font-weight:400;line-height:1.3;">
                ${displayName}
              </h2>
              <p style="margin:0 0 20px;font-size:15px;color:#9a9a9a;line-height:1.8;">
                Grazie per esserti iscritto alla newsletter di <strong style="color:#c8a84b;">LuxCoin</strong>.
                Sei entrato a far parte di una comunità esclusiva di appassionati di numismatica e antichità.
              </p>
              <p style="margin:0 0 36px;font-size:15px;color:#9a9a9a;line-height:1.8;">
                Come promesso, ecco il tuo <strong style="color:#f5e6c4;">codice sconto del 15%</strong> da utilizzare
                sul tuo primo acquisto:
              </p>

              <!-- Discount Code Box -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
                <tr>
                  <td align="center">
                    <div style="display:inline-block;background:linear-gradient(135deg,#1a1400,#2a2000);border:2px solid #c8a84b;border-radius:12px;padding:28px 48px;text-align:center;">
                      <p style="margin:0 0 8px;font-size:11px;letter-spacing:4px;color:#7a6a3a;text-transform:uppercase;">Il tuo codice sconto</p>
                      <p style="margin:0;font-family:'Courier New',monospace;font-size:36px;color:#c8a84b;letter-spacing:8px;font-weight:700;">${discountCode}</p>
                      <p style="margin:8px 0 0;font-size:12px;color:#6a6a6a;letter-spacing:1px;">Valido sul primo acquisto · Nessuna scadenza</p>
                    </div>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 20px;font-size:14px;color:#7a7a7a;line-height:1.8;">
                Inserisci il codice al momento del checkout per ottenere il tuo sconto. Non esitare
                a contattarci se hai domande sulla nostra collezione.
              </p>

              <!-- CTA Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:32px 0;">
                <tr>
                  <td align="center">
                    <a href="https://luxcoin.it/collezione/monete"
                       style="display:inline-block;background:linear-gradient(135deg,#c8a84b,#a8882b);color:#0a0a0a;font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;text-decoration:none;padding:16px 40px;border-radius:8px;">
                      Esplora la Collezione
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #2a2a2a;margin:40px 0;" />

              <!-- Features -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="33%" style="padding:0 8px;text-align:center;vertical-align:top;">
                    <p style="margin:0 0 8px;font-size:22px;">🏛️</p>
                    <p style="margin:0 0 4px;font-size:12px;color:#c8a84b;letter-spacing:2px;text-transform:uppercase;">Autenticità</p>
                    <p style="margin:0;font-size:12px;color:#6a6a6a;line-height:1.6;">Ogni pezzo certificato da esperti numismatici</p>
                  </td>
                  <td width="33%" style="padding:0 8px;text-align:center;vertical-align:top;">
                    <p style="margin:0 0 8px;font-size:22px;">🚚</p>
                    <p style="margin:0 0 4px;font-size:12px;color:#c8a84b;letter-spacing:2px;text-transform:uppercase;">Spedizione</p>
                    <p style="margin:0;font-size:12px;color:#6a6a6a;line-height:1.6;">Imballaggio professionale e assicurato</p>
                  </td>
                  <td width="33%" style="padding:0 8px;text-align:center;vertical-align:top;">
                    <p style="margin:0 0 8px;font-size:22px;">🔒</p>
                    <p style="margin:0 0 4px;font-size:12px;color:#c8a84b;letter-spacing:2px;text-transform:uppercase;">Garanzia</p>
                    <p style="margin:0;font-size:12px;color:#6a6a6a;line-height:1.6;">Soddisfatti o rimborsati entro 30 giorni</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0d0d0d;padding:32px 40px;border-top:1px solid #2a2a2a;text-align:center;">
              <p style="margin:0 0 12px;font-size:11px;letter-spacing:3px;color:#3a3a3a;text-transform:uppercase;">LuxCoin · Numismatica &amp; Antichità</p>
              <p style="margin:0 0 16px;font-size:12px;color:#3a3a3a;line-height:1.6;">
                Hai ricevuto questa email perché ti sei iscritto alla newsletter di LuxCoin.<br />
                Puoi gestire le tue preferenze in qualsiasi momento.
              </p>
              <p style="margin:0;font-size:11px;color:#2a2a2a;">
                P.IVA 04849590403 · <a href="https://luxcoin.it/privacy" style="color:#5a4a2a;text-decoration:none;">Privacy Policy</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
