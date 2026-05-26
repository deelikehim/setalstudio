CREATE TABLE public.scheduled_calls (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  country_code text,
  country_name text,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  timezone text,
  notes text,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE public.scheduled_calls ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can book a call"
ON public.scheduled_calls FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can view bookings"
ON public.scheduled_calls FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update bookings"
ON public.scheduled_calls FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete bookings"
ON public.scheduled_calls FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));