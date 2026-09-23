// Supabase Edge Function: emails you whenever a new row is inserted into
// public.contacts. Triggered by a Database Webhook (see supabase/README.md).
//
// Deploy via the Supabase dashboard: Edge Functions > Create a function >
// name it "contact-notify" > paste this file > Deploy.
//
// Required secret (Edge Functions > Manage secrets):
//   BREVO_API_KEY = your Brevo v3 API key (xkeysib-...)
//
// Optional secret to block abuse of the public function URL:
//   WEBHOOK_SECRET = any long random string; set the same value as an
//   "Authorization: Bearer <secret>" header on the Database Webhook.

const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY')
const WEBHOOK_SECRET = Deno.env.get('WEBHOOK_SECRET') // optional

// Where enquiry notifications land.
const TO_EMAIL = 'ritexotech@gmail.com'
// Must be a verified sender in Brevo (Senders & IPs). ritexotech@gmail.com is
// already verified on this account.
const FROM = { name: 'Ritexo Website', email: 'ritexotech@gmail.com' }

const esc = (s: unknown) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

Deno.serve(async (req) => {
  // Optional shared-secret gate.
  if (WEBHOOK_SECRET) {
    const auth = req.headers.get('authorization') ?? ''
    if (auth !== `Bearer ${WEBHOOK_SECRET}`) {
      return new Response('Unauthorized', { status: 401 })
    }
  }

  if (!BREVO_API_KEY) {
    return new Response(JSON.stringify({ error: 'BREVO_API_KEY not set' }), { status: 500 })
  }

  let record: Record<string, unknown> = {}
  try {
    const payload = await req.json()
    record = payload?.record ?? {}
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { status: 400 })
  }

  const { name, email, phone, company, service, message } = record as Record<string, string>

  const html = `
    <h2>New contact form submission</h2>
    <table cellpadding="6" style="font-family:system-ui,sans-serif;font-size:14px">
      <tr><td><b>Name</b></td><td>${esc(name)}</td></tr>
      <tr><td><b>Email</b></td><td>${esc(email)}</td></tr>
      <tr><td><b>Phone</b></td><td>${esc(phone) || '-'}</td></tr>
      <tr><td><b>Company</b></td><td>${esc(company) || '-'}</td></tr>
      <tr><td><b>Service</b></td><td>${esc(service) || '-'}</td></tr>
      <tr><td valign="top"><b>Message</b></td><td>${esc(message)}</td></tr>
    </table>
  `

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': BREVO_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sender: FROM,
      to: [{ email: TO_EMAIL }],
      // Reply goes straight to the enquirer.
      replyTo: email ? { email, name: name || undefined } : undefined,
      subject: `New enquiry: ${name || 'Website contact'}`,
      htmlContent: html,
    }),
  })

  if (!res.ok) {
    const detail = await res.text()
    return new Response(JSON.stringify({ error: 'Brevo send failed', detail }), { status: 502 })
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
})
