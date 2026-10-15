-- Draft SQL schema for Supabase / PostgreSQL
-- This is an initial schema. Adjust indexes, constraints, and RLS policies as needed.

-- Enable uuid-ossp if needed
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users: Supabase Auth will manage auth; we store profile and role info here
CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_uid uuid UNIQUE,
  full_name text,
  phone text,
  email text,
  role text NOT NULL DEFAULT 'customer', -- customer | provider_admin | provider_staff | admin
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Providers / collection companies
CREATE TABLE providers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  contact_name text,
  contact_phone text,
  contact_email text,
  address text,
  active boolean DEFAULT false,
  verification_document text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE provider_staff (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id uuid REFERENCES providers(id) ON DELETE CASCADE,
  profile_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  role text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE service_areas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  city text,
  polygon_geo jsonb, -- optional geojson polygon defining service area
  created_at timestamptz DEFAULT now()
);

CREATE TABLE provider_service_areas (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id uuid REFERENCES providers(id) ON DELETE CASCADE,
  service_area_id uuid REFERENCES service_areas(id) ON DELETE CASCADE
);

CREATE TABLE waste_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  label text NOT NULL,
  requires_special_handling boolean DEFAULT false
);

CREATE TABLE provider_services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id uuid REFERENCES providers(id) ON DELETE CASCADE,
  waste_category_id uuid REFERENCES waste_categories(id) ON DELETE CASCADE,
  price_numeric numeric,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE collection_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_ref text UNIQUE,
  customer_profile_id uuid REFERENCES profiles(id) ON DELETE SET NULL,
  address text,
  city text,
  service_area_id uuid REFERENCES service_areas(id),
  waste_category_id uuid REFERENCES waste_categories(id),
  quantity_est text,
  preferred_date date,
  preferred_time_range text,
  status text DEFAULT 'pending', -- pending | awaiting_assignment | assigned | accepted | on_the_way | collected | awaiting_disposal | awaiting_verification | completed | cancelled | disputed
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE collection_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id uuid REFERENCES collection_requests(id) ON DELETE CASCADE,
  provider_id uuid REFERENCES providers(id) ON DELETE SET NULL,
  assigned_by uuid REFERENCES profiles(id) ON DELETE SET NULL,
  assigned_at timestamptz DEFAULT now(),
  accepted_at timestamptz,
  accepted_by uuid REFERENCES profiles(id),
  status text DEFAULT 'assigned'
);

CREATE TABLE collection_status_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id uuid REFERENCES collection_requests(id) ON DELETE CASCADE,
  changed_by uuid REFERENCES profiles(id),
  from_status text,
  to_status text,
  note text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE disposal_facilities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text,
  contact text,
  facility_type text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE disposal_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id uuid REFERENCES collection_assignments(id) ON DELETE CASCADE,
  facility_id uuid REFERENCES disposal_facilities(id),
  delivered_at timestamptz,
  quantity_est text,
  photos text[], -- array of storage URLs
  notes text,
  verified boolean DEFAULT false,
  verified_by uuid REFERENCES profiles(id),
  verified_at timestamptz,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE dumping_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_profile_id uuid REFERENCES profiles(id),
  location text,
  coordinates geography(POINT, 4326),
  waste_category_id uuid REFERENCES waste_categories(id),
  description text,
  photos text[],
  status text DEFAULT 'reported', -- reported | under_review | assigned | cleanup_in_progress | resolved
  created_at timestamptz DEFAULT now()
);

CREATE TABLE payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  request_id uuid REFERENCES collection_requests(id) ON DELETE SET NULL,
  amount numeric,
  currency text DEFAULT 'MWK',
  status text DEFAULT 'pending', -- pending | paid | failed | refunded
  provider_share numeric,
  platform_share numeric,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_profile_id uuid REFERENCES profiles(id),
  provider_id uuid REFERENCES providers(id),
  schedule text,
  next_due date,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles(id),
  title text,
  body text,
  read boolean DEFAULT false,
  meta jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE audit_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_profile_id uuid REFERENCES profiles(id),
  action text,
  target jsonb,
  created_at timestamptz DEFAULT now()
);

-- Seed a couple of basic waste categories
INSERT INTO waste_categories (key, label, requires_special_handling) VALUES
('household', 'Household Waste', false),
('diapers', 'Disposable Diapers', true),
('recyclables', 'Recyclables', false);
