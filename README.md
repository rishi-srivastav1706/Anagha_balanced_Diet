# Anagha Balanced Bites — Official Web Application

A premium, full-stack website and management portal for **Anagha Balanced Bites** built with Next.js (App Router), TypeScript, Tailwind CSS, Supabase PostgreSQL, and an AI-powered customer concierge assistant.

![Anagha Balanced Bites](https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Features & Highlights

### 1. Public-Facing Business Website
- **Branded Design System**: Customized color palette featuring Cream Beige (`#F5EBDD`), Sindoor Orange (`#C64C2C`), Deep Brown (`#49352B`), and crisp White typography.
- **Hero & Value Pillars**: High-converting hero banner with meal bowl spotlight, core quality badges (Fresh Ingredients, Balanced Nutrition, Customer Focused, Sustainable Choices).
- **Our Story Banner**: Authentic brand story and philosophy presentation.
- **Offerings Showcase**: Configurable menu options across **Meals**, **Snacks**, **Beverages**, and **Others** with macro information (calories, protein) and an interactive enquiry modal.
- **Subscriptions Portal**: Monthly and Quarterly plan tiers (**Starter Plan**, **Wellness Plan**, **Premium Plan**) with instant enquiry forms and WhatsApp routing.
- **Nutrition & Collaborations**: Nutrition guidelines, clinical disclaimers, and an application form for certified dieticians, nutritionists, and fitness coaches.
- **Franchise Opportunities**: Business overview, kitchen model criteria, and an expansion application workflow.
- **Testimonials & Social Proof**: Genuine reviews system with customer submission and admin verification moderation.
- **Locations & Google Maps**: Embedded interactive map of the primary kitchen and delivery center (Flat 401, Balaji Nagar, Road Number 5, KLR Venture, Medchal) with navigation links and delivery radius guidance.
- **Direct WhatsApp Concierge**: Instant WhatsApp buttons with pre-filled enquiry strings.

### 2. Protected Customer Dashboard (`/dashboard`)
- **Account Overview**: Real-time stats on active subscriptions, order history, and sent enquiries.
- **Profile Management**: Configurable contact information, delivery address, and culinary/allergy preferences.
- **Subscription Management**: Ability to view active tiers and pause or resume recurring delivery cycles.
- **Enquiry Tracking**: Chronological log of enquiries with status labels (`New`, `In Progress`, `Resolved`).

### 3. Business Owner Admin Dashboard (`/admin`)
- **Overview Metrics**: Total registered customers, new enquiries, active subscription accounts, and pending franchise applications.
- **Menu & Offerings Management (`/admin/offerings`)**: Complete CRUD capability to add, edit descriptions, adjust macro calories/protein, upload photos, and toggle item availability.
- **Subscription Tier Manager (`/admin/subscriptions`)**: Configure plan pricing, billing intervals, featured badges, and included features.
- **Enquiry Dispatcher (`/admin/enquiries`)**: Review customer enquiries and update progress statuses.
- **Franchise Committee Review (`/admin/franchise`)**: Review territory proposals, budget tiers, and experience logs.
- **Collaborations Hub (`/admin/collaborations`)**: Moderate nutritionist and fitness trainer partnership proposals.
- **Testimonial Moderation Queue (`/admin/testimonials`)**: Review customer submissions with one-click **Approve & Publish** or **Unpublish** controls.
- **Content Editor (`/admin/content`)**: Modify hero headlines, brand taglines, and marketing banners in real time.
- **Chatbot & Knowledge Base Studio (`/admin/chatbot`)**: Inspect active FAQs, compliance guardrails, and test the AI chat simulator.
- **Integration Settings (`/admin/settings`)**: Configure public contact phones, E.164 WhatsApp links, Google Maps iframe embed, and operating hours.

### 4. AI-Powered Customer Concierge Chatbot
- Floating interactive widget located across every public and client page.
- Instant topic suggestions:
  - *Tell me about your offerings*
  - *Subscription plans*
  - *Franchise opportunity*
  - *Nutrition & collaboration*
  - *Contact details*
- Server-side route `/api/chat` with **rate limiting**, **medical advisory guardrails** (prevents unverified disease cure claims), and automated fallback to the local knowledge base if an external LLM key is absent.
- Optional integration with **Google Gemini 1.5** via `GEMINI_API_KEY`.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase PostgreSQL with Row Level Security (RLS)
- **Authentication**: Supabase Auth (with local testing fallback session switcher)
- **Icons**: Lucide React
- **AI Concierge**: Server-side route with Google Gemini integration & local knowledge base fallback

---

## 🚀 Getting Started Locally

### 1. Clone & Install Dependencies
\`\`\`bash
git clone <your-repo-url>
cd vishnu
npm install
\`\`\`

### 2. Configure Environment Variables
Copy the provided `.env.example` to `.env.local`:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Update the values in `.env.local`:
\`\`\`env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key-here

# AI Chatbot (Optional Google Gemini API)
GEMINI_API_KEY=your_gemini_api_key_here

# Contact & Integrations
NEXT_PUBLIC_WHATSAPP_NUMBER=+916281422353
NEXT_PUBLIC_CONTACT_EMAIL=rishisrivastav778@gmail.com
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_google_maps_api_key_here
\`\`\`

> **Note**: The application is built with a self-contained persistence store (`src/lib/data/store.ts`). It runs smoothly out of the box with zero external configuration required for development and testing!

### 3. Run the Development Server
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Supabase Database Setup & Schema

1. Log in to your [Supabase Dashboard](https://supabase.com).
2. Create a new project named `anagha-balanced-bites`.
3. Navigate to the **SQL Editor** in the left sidebar.
4. Copy the entire contents of `supabase/schema.sql` located in this repository and execute the script.
5. The script creates:
   - `user_profiles` table with customer and admin roles.
   - `offerings` table with macro calibrations.
   - `subscription_plans` and `customer_subscriptions` tables.
   - `enquiries`, `franchise_applications`, and `collaboration_requests` tables.
   - `testimonials` table with moderation workflows.
   - `faqs` and `business_settings` tables.
   - Row Level Security (RLS) policies ensuring customers only view permitted records while administrators have full management privileges.
   - Seed data for default offerings and plans.

---

## 🚢 Deployment to Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import this repository.
4. Add your environment variables in the Vercel Project Settings (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `GEMINI_API_KEY`, etc.).
5. Click **Deploy**. Vercel will automatically compile the Next.js App Router application.

---

## 📄 License & Ownership
Copyright © 2026 Anagha Balanced Bites. All rights reserved.
Eat Well • Live Balanced.
