CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;


DROP POLICY IF EXISTS "Allow public insert to contacts" ON public.contacts;
CREATE POLICY "Allow public insert to contacts"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated read contacts" ON public.contacts;
CREATE POLICY "Allow authenticated read contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (true);


DROP POLICY IF EXISTS "Allow authenticated update contacts" ON public.contacts;
CREATE POLICY "Allow authenticated update contacts"
ON public.contacts
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);


COMMENT ON TABLE public.contacts IS 'Stores contact form inquiries submitted from Ric Andrei Valenzuela portfolio';
COMMENT ON COLUMN public.contacts.id IS 'Unique identifier for each contact entry';
COMMENT ON COLUMN public.contacts.name IS 'Name of the sender/friend';
COMMENT ON COLUMN public.contacts.email IS 'Email address of the sender';
COMMENT ON COLUMN public.contacts.message IS 'Message content sent to Ric';
COMMENT ON COLUMN public.contacts.is_read IS 'Status whether Ric has reviewed this message';
COMMENT ON COLUMN public.contacts.created_at IS 'Timestamp when the message was submitted';
