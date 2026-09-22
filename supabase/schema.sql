-- Contact form submissions.
-- Run this in the Supabase dashboard: SQL Editor > New query > paste > Run.

create table if not exists public.contacts (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  phone      text,
  company    text,
  service    text,
  message    text not null,
  created_at timestamptz not null default now()
);

-- Lock the table down: RLS on, no policies = no access by default.
alter table public.contacts enable row level security;

-- Allow the public (anon) key to INSERT only. No select/update/delete for anon,
-- so submissions cannot be read from the browser. You read them in the dashboard.
create policy "anon can submit contact form"
  on public.contacts
  for insert
  to anon
  with check (true);
