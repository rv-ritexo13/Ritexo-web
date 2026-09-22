// Supabase Edge Function: emails you whenever a new row is inserted into
// public.contacts. Triggered by a Database Webhook (see supabase/README.md).
//
// Deploy via the Supabase dashboard: Edge Functions > Create a function >
// name it "contact-notify" > paste this file > Deploy.
//
// Required secret (Edge Functions > Manage secrets):
//   RESEND_API_KEY = your Resend API key (re_...)
//
// Optional secret to block abuse of the public function URL:
//   WEBHOOK_SECRET = any long random string; set the same value as an
//   "Authorization: Bearer <secret>" header on the Database Webhook.

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const WEBHOOK_SECRET = Deno.env.get('WEBHOOK_SECRET') // optional

const TO_EMAIL = 'ritexotech@gmail.com'
// Resend's shared test sender works without domain verification, but only
// delivers to the email your Resend account was created with. Once you verify
// ritexo.com in Resend, change this to e.g. 'Ritexo Website <noreply@ritexo.com>'.
const FROM_EMAIL = 'Ritexo Website <onboarding@resend.dev>'

const esc = (s: string) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

Deno.serve(async (req) => {
  // Optional shared-secret gate.
  if (WEBHOOK_SECRET) {
    const auth = req.headers.get('authorization') ?? ''
    if (auth !== `Bearer ${WEBHOOK_SECRET}`) {
      return new Response('Unauthorized', { status: 401 })
    }
  }

  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'RESEND_API_KEY not set' }), { status: 500 })
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

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email || undefined,
      subject: `New contact: ${name || 'Website enquiry'}`,
      html,
    }),
  })

  if (!res.ok) {
    const detail = await res.text()
    return new Response(JSON.stringify({ error: 'Resend failed', detail }), { status: 502 })
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
})
