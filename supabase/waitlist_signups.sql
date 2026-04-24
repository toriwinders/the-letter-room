create table if not exists public.waitlist_signups (
  id bigint generated always as identity primary key,
  email text not null unique,
  first_name text,
  last_name text,
  address_line_1 text,
  address_line_2 text,
  city text,
  state_region text,
  postal_code text,
  country text,
  waitlist_joined_at timestamptz,
  mailing_details_submitted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.waitlist_signups
  add column if not exists stripe_checkout_session_id text,
  add column if not exists stripe_customer_id text,
  add column if not exists stripe_subscription_id text,
  add column if not exists stripe_payment_link_id text,
  add column if not exists shipping_name text,
  add column if not exists confirmation_email_sent_at timestamptz,
  add column if not exists confirmation_email_attempted_at timestamptz,
  add column if not exists confirmation_email_error text;

create unique index if not exists waitlist_signups_stripe_checkout_session_id_key
  on public.waitlist_signups (stripe_checkout_session_id)
  where stripe_checkout_session_id is not null;
