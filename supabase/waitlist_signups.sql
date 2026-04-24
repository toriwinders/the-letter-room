create table public.waitlist_signups (
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
