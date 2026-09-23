// Supabase Edge Function: emails you a contact-form enquiry.
//
// Called directly from the website (src/pages/Contact.jsx) right after the row
// is inserted into public.contacts. No Database Webhook needed — that route
// fights the anon role's permissions on Supabase's internal hooks table.
//
// Deploy via the dashboard: Edge Functions > Create a function >
// name it "contact-notify" > paste this file > Deploy.
//
// Required secret (Edge Functions > Manage secrets):
//   BREVO_API_KEY = your Brevo v3 API key (xkeysib-...)

const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY')

const TO_EMAIL = 'ritexotech@gmail.com'
const FROM = { name: 'Ritexo Website', email: 'ritexotech@gmail.com' }

// Allow the browser to call this function.
const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, 'Content-Type': 'application/json' },
  })

const esc = (s: unknown) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })

  if (!BREVO_API_KEY) return json({ error: 'BREVO_API_KEY not set' }, 500)

  let record: Record<string, string> = {}
  try {
    const payload = await req.json()
    // Accept either { record: {...} } or the fields directly.
    record = payload?.record ?? payload ?? {}
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  const { name, email, phone, company, service, message } = record

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
    headers: { 'api-key': BREVO_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sender: FROM,
      to: [{ email: TO_EMAIL }],
      replyTo: email ? { email, name: name || undefined } : undefined,
      subject: `New enquiry: ${name || 'Website contact'}`,
      htmlContent: html,
    }),
  })

  if (!res.ok) return json({ error: 'Brevo send failed', detail: await res.text() }, 502)
  return json({ ok: true })
})
