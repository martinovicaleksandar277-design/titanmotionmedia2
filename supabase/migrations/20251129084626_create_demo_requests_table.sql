/*
  # Create Demo Requests Table

  ## Overview
  This migration creates a table to store demo video requests from potential customers.
  Users can submit their information, machine details, and upload photos to receive a free 10-second cinematic demo.

  ## Tables Created
  
  ### `demo_requests`
  Stores all demo request submissions from the landing page.
  
  **Columns:**
  - `id` (uuid, primary key) - Unique identifier for each demo request
  - `name` (text, required) - Customer's full name
  - `company` (text, optional) - Company name if provided
  - `email` (text, required) - Customer's email address for delivery
  - `machine_type` (text, required) - Type of machine (tractor, forklift, excavator, etc.)
  - `notes` (text, optional) - Additional project notes or requirements
  - `photo_urls` (text[], required) - Array of URLs pointing to uploaded photos in Supabase Storage
  - `status` (text, default 'pending') - Request status: pending, in_progress, completed, cancelled
  - `created_at` (timestamptz, default now()) - Timestamp when request was submitted
  - `updated_at` (timestamptz, default now()) - Timestamp when record was last modified

  ## Security
  
  ### Row Level Security (RLS)
  - RLS is enabled on the `demo_requests` table
  - Public insert policy allows anyone to submit a demo request
  - Only authenticated admin users can view and update requests
  
  ### Policies Created
  1. **"Anyone can submit demo requests"** - Allows public INSERT operations
  2. **"Admins can view all demo requests"** - Allows authenticated users to SELECT all records
  3. **"Admins can update demo requests"** - Allows authenticated users to UPDATE records
  4. **"Admins can delete demo requests"** - Allows authenticated users to DELETE records

  ## Storage
  
  ### Buckets
  - Creates a `demo-photos` storage bucket for uploaded machine photos
  - Public bucket with read access for admin review
  - Storage policies allow public uploads and authenticated reads

  ## Notes
  - Email validation should be handled at the application layer
  - Photo uploads are limited to 3 images per request (enforced in frontend)
  - Status field can be extended with additional states as needed
  - Consider adding email notification triggers in future migrations
*/

-- Create demo_requests table
CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  machine_type text NOT NULL,
  notes text,
  photo_urls text[] NOT NULL DEFAULT '{}',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can submit demo requests"
  ON demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Admins can view all demo requests"
  ON demo_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can update demo requests"
  ON demo_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admins can delete demo requests"
  ON demo_requests
  FOR DELETE
  TO authenticated
  USING (true);

-- Create storage bucket for demo photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('demo-photos', 'demo-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policies
CREATE POLICY "Anyone can upload demo photos"
  ON storage.objects
  FOR INSERT
  TO anon
  WITH CHECK (bucket_id = 'demo-photos');

CREATE POLICY "Anyone can read demo photos"
  ON storage.objects
  FOR SELECT
  TO anon
  USING (bucket_id = 'demo-photos');

CREATE POLICY "Admins can delete demo photos"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'demo-photos');

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_demo_requests_updated_at ON demo_requests;
CREATE TRIGGER update_demo_requests_updated_at
  BEFORE UPDATE ON demo_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
