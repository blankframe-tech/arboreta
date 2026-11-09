-- Orders placed at /checkout. Written and read only by the Next.js server with the service key
-- (SUPABASE_SERVICE_ROLE_KEY), which bypasses RLS. RLS is on with no policies, so the public
-- anon key and logged-in users can neither read nor write orders.
create table if not exists public.orders (
  order_number   text primary key,
  created_at     timestamptz not null default now(),
  status         text not null check (status in ('new', 'awaiting_confirmation', 'confirmed', 'sent_to_nursery', 'shipped', 'delivered', 'cancelled')),
  payment_method text not null check (payment_method in ('bkash', 'nagad', 'cod')),
  transaction_id text,
  payer_number   text,
  customer       jsonb not null, -- {name, phone, email?, address, city, note?}
  items          jsonb not null, -- [{productId, name, quantity, unitPrice, luckyDiscount, nurseryId?}]
  subtotal       integer not null check (subtotal >= 0), -- whole taka
  shipping       integer not null check (shipping >= 0),
  total          integer not null check (total >= 0),
  admin_note     text
);

create index if not exists orders_created_at_idx on public.orders (created_at desc);

alter table public.orders enable row level security;
revoke all on public.orders from anon, authenticated;
