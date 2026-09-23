# Supabase setup

## 1. Contacts table

Run `schema.sql` in the dashboard SQL Editor. Creates `public.contacts` with
RLS allowing anon INSERT only (public can submit, nobody can read via the
browser). Read submissions in Table Editor.

## 2. Email notifications on new submissions

Flow: form insert -> website calls `contact-notify` Edge Function directly ->
Brevo -> your inbox. (No Database Webhook — that route fights the anon role's
permissions on Supabase's internal hooks table.)

### a. Brevo
1. Account already created with **ritexotech@gmail.com**; sender verified.
2. Key: https://app.brevo.com/settings/keys/api > Generate (v3 `xkeysib-...`).

### b. Deploy the Edge Function (dashboard, no CLI)
1. Supabase > Edge Functions > Create a function > name `contact-notify`.
2. Paste `functions/contact-notify/index.ts`, Deploy.
3. Edge Functions > Manage secrets > add:
   - `BREVO_API_KEY` = the `xkeysib-...` key
   - `WEBHOOK_SECRET` = any long random string (optional but recommended)

### c. No webhook needed
The website invokes the function directly after a successful insert
(see `src/pages/Contact.jsx`). If you previously created a Database Webhook on
`contacts`, delete it — it breaks inserts for the anon role.

### d. Test
Submit the contact form on the live site. Check your inbox, and the function
logs under Edge Functions > contact-notify > Logs if nothing arrives.
