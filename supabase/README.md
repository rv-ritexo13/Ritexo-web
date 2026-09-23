# Supabase setup

## 1. Contacts table

Run `schema.sql` in the dashboard SQL Editor. Creates `public.contacts` with
RLS allowing anon INSERT only (public can submit, nobody can read via the
browser). Read submissions in Table Editor.

## 2. Email notifications on new submissions

Flow: form insert -> Database Webhook -> `contact-notify` Edge Function ->
Brevo -> your inbox.

### a. Brevo
1. Account already created with **ritexotech@gmail.com**; sender verified.
2. Key: https://app.brevo.com/settings/keys/api > Generate (v3 `xkeysib-...`).

### b. Deploy the Edge Function (dashboard, no CLI)
1. Supabase > Edge Functions > Create a function > name `contact-notify`.
2. Paste `functions/contact-notify/index.ts`, Deploy.
3. Edge Functions > Manage secrets > add:
   - `BREVO_API_KEY` = the `xkeysib-...` key
   - `WEBHOOK_SECRET` = any long random string (optional but recommended)

### c. Database Webhook
1. Supabase > Database > Webhooks > Create a new hook.
2. Table `contacts`, events **Insert**.
3. Type: Supabase Edge Function, select `contact-notify`.
4. If you set `WEBHOOK_SECRET`, add HTTP header
   `Authorization: Bearer <that secret>`.
5. Save.

### d. Test
Submit the contact form on the live site. Check your inbox, and the function
logs under Edge Functions > contact-notify > Logs if nothing arrives.
