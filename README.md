# Smart Waste Management System

This repository contains the code and documentation for the Smart Waste Management Platform — a web application to connect customers with existing waste collection providers while providing platform operators with oversight, disposal verification, and environmental monitoring.

This initial scaffold includes the project's vision, MVP feature set, technology stack, database schema draft for Supabase/Postgres, and GitHub issue templates to help development planning.

Quick overview

- Frontend: Next.js + Tailwind CSS
- Backend: Supabase (Postgres, Auth, Storage)
- Maps: OpenStreetMap + Leaflet
- Hosting: Vercel (frontend) and Supabase (database + storage)

MVP (Phase 1)

- Customer registration & login
- Provider registration & approval
- Administrator dashboard
- Collection requests, assignments, and status updates
- Disposal record submissions and verification
- Illegal dumping reports

Getting started (local)

1. Clone the repository
   git clone https://github.com/cleversoncchisale-cmyk/Smart-Waste-Management-System.git
2. Create a Supabase project and copy the following environment variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY (only for server-side jobs, keep secret)
3. Install dependencies (when frontend scaffolded):
   npm install
4. Run the dev server:
   npm run dev

Supabase

- Use Supabase Auth for users and roles.
- Use Supabase Storage for uploaded photos (disposal evidence, dumping reports).
- Apply Row Level Security (RLS) and policies that map to the user roles described in ROADMAP.md.

Next steps

- Create Next.js app and wire up authentication.
- Implement database migrations from supabase/schema.sql.
- Build the customer, provider, and admin dashboards.

This file is a living document and will be expanded as development continues.
