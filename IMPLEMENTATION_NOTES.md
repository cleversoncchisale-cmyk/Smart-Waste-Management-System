# Smart Waste Management System

This repository has been initialized with the foundational web app structure for the Smart Waste Management Platform.

Important notes

- The app is structured as a Next.js project using Tailwind CSS.
- The frontend includes a public landing page and role-based dashboard shells for customer, provider, and admin users.
- Supabase integration is prepared in the dependency list and database schema file.
- The app is designed to align with the MVP proposed in the project planning documents.

To run locally

1. Install dependencies:
   npm install
2. Start the development server:
   npm run dev
3. Open the project at:
   http://localhost:3000

Current starter pages

- `/` — public website landing page
- `/login` — portal access selector
- `/dashboard/customer` — customer dashboard shell
- `/dashboard/provider` — provider dashboard shell
- `/dashboard/admin` — admin dashboard shell

Next implementation stages

1. Add authentication and Supabase connection
2. Build collection request workflow
3. Add provider approval dashboard and disposal evidence review
4. Build reporting and monitoring map features
5. Deploy to Vercel and connect Supabase
