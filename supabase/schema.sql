-- Supabase Database Schema for Anagha Balanced Bites
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. User Profiles & Roles
create table if not exists public.user_profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null,
  email text unique not null,
  phone text,
  role text not null default 'customer' check (role in ('customer', 'admin')),
  address text,
  dietary_preferences text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS for user_profiles
alter table public.user_profiles enable row level security;

create policy "Users can view their own profile"
  on public.user_profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.user_profiles for update
  using (auth.uid() = id);

create policy "Admins have full access to user profiles"
  on public.user_profiles for all
  using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- 2. Offerings
create table if not exists public.offerings (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  category text not null check (category in ('Meals', 'Snacks', 'Beverages', 'Others')),
  description text not null,
  price text, -- Configurable placeholder
  status text not null default 'Available' check (status in ('Available', 'Coming Soon')),
  image_url text not null,
  calories text,
  protein text,
  is_featured boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.offerings enable row level security;

create policy "Anyone can view offerings"
  on public.offerings for select
  using (true);

create policy "Admins can manage offerings"
  on public.offerings for all
  using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- 3. Subscription Plans
create table if not exists public.subscription_plans (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  subtitle text not null,
  billing_interval text not null check (billing_interval in ('monthly', 'quarterly')),
  price text not null,
  features jsonb not null default '[]'::jsonb,
  is_popular boolean default false,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.subscription_plans enable row level security;

create policy "Anyone can view active subscription plans"
  on public.subscription_plans for select
  using (is_active = true);

create policy "Admins can manage subscription plans"
  on public.subscription_plans for all
  using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- 4. Customer Subscriptions
create table if not exists public.customer_subscriptions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.user_profiles(id) on delete cascade not null,
  plan_id uuid references public.subscription_plans(id) on delete restrict not null,
  status text not null default 'Active' check (status in ('Active', 'Paused', 'Cancelled')),
  started_at timestamp with time zone default timezone('utc'::text, now()) not null,
  next_billing timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.customer_subscriptions enable row level security;

create policy "Users can view their own subscriptions"
  on public.customer_subscriptions for select
  using (auth.uid() = user_id);

create policy "Admins can view and manage all subscriptions"
  on public.customer_subscriptions for all
  using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- 5. Customer Enquiries
create table if not exists public.enquiries (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.user_profiles(id) on delete set null,
  name text not null,
  email text not null,
  phone text not null,
  type text not null,
  message text not null,
  status text not null default 'New' check (status in ('New', 'In Progress', 'Resolved')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.enquiries enable row level security;

create policy "Anyone can submit an enquiry"
  on public.enquiries for insert
  with check (true);

create policy "Users can view their own enquiries"
  on public.enquiries for select
  using (auth.uid() = user_id);

create policy "Admins can view and manage enquiries"
  on public.enquiries for all
  using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- 6. Franchise Applications
create table if not exists public.franchise_applications (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text not null,
  city text not null,
  state text,
  investment_budget text not null,
  experience text,
  message text not null,
  status text not null default 'New' check (status in ('New', 'In Review', 'Contacted', 'Approved', 'Declined')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.franchise_applications enable row level security;

create policy "Anyone can submit a franchise application"
  on public.franchise_applications for insert
  with check (true);

create policy "Admins can view and manage franchise applications"
  on public.franchise_applications for all
  using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- 7. Collaboration Requests
create table if not exists public.collaboration_requests (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  phone text not null,
  profession text not null,
  social_or_website text,
  proposal text not null,
  status text not null default 'New' check (status in ('New', 'In Review', 'Contacted')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.collaboration_requests enable row level security;

create policy "Anyone can submit a collaboration request"
  on public.collaboration_requests for insert
  with check (true);

create policy "Admins can view and manage collaboration requests"
  on public.collaboration_requests for all
  using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- 8. Testimonials
create table if not exists public.testimonials (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  role text not null,
  review text not null,
  rating integer not null check (rating between 1 and 5),
  is_approved boolean not null default false,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.testimonials enable row level security;

create policy "Public can view approved testimonials"
  on public.testimonials for select
  using (is_approved = true);

create policy "Public can submit testimonials for approval"
  on public.testimonials for insert
  with check (is_approved = false);

create policy "Admins can manage all testimonials"
  on public.testimonials for all
  using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- 9. FAQs
create table if not exists public.faqs (
  id uuid default gen_random_uuid() primary key,
  question text not null,
  answer text not null,
  category text not null,
  order_index integer default 0
);

alter table public.faqs enable row level security;

create policy "Public can view faqs"
  on public.faqs for select
  using (true);

create policy "Admins can manage faqs"
  on public.faqs for all
  using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- 10. Business Settings
create table if not exists public.business_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.business_settings enable row level security;

create policy "Public can view settings"
  on public.business_settings for select
  using (true);

create policy "Admins can manage settings"
  on public.business_settings for all
  using (
    exists (
      select 1 from public.user_profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- SEED DATA
insert into public.subscription_plans (title, subtitle, billing_interval, price, features, is_popular, is_active)
values
  ('Starter Plan', 'Perfect for a healthy start.', 'monthly', 'Starting at ₹2,999/mo (Enquire for details)', '["Selected meal options", "Weekly delivery schedule", "Basic nutrition guidance"]'::jsonb, false, true),
  ('Wellness Plan', 'Designed for your total well-being.', 'monthly', 'Starting at ₹4,999/mo (Enquire for details)', '["Wide range of meal options", "Flexible delivery schedule", "Personalized nutrition guidance", "Priority support"]'::jsonb, true, true),
  ('Premium Plan', 'Complete care for a healthier you.', 'monthly', 'Starting at ₹7,499/mo (Enquire for details)', '["Full menu access", "Daily / customized delivery", "Personalized nutrition consultation", "Dedicated wellness advisor", "Priority support"]'::jsonb, false, true);

insert into public.offerings (title, category, description, price, status, image_url, is_featured)
values
  ('Balanced Meal Bowls', 'Meals', 'Fresh, wholesome, and protein-rich meals crafted for everyday energy.', 'Placeholder pricing: Enquire', 'Available', 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', true),
  ('Fresh Juices & Smoothies', 'Beverages', 'Natural cold-pressed blends packed with vitamins, enzymes, and goodness.', 'Placeholder pricing: Enquire', 'Available', 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80', true),
  ('Healthy Snack Packs', 'Snacks', 'Nutrient-dense bites and energy bars for on-the-go active lifestyles.', 'Placeholder pricing: Enquire', 'Available', 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', true),
  ('Nutrition Guidance Bowl', 'Meals', 'Custom portion-calibrated macro bowls curated for personal goals.', 'Placeholder pricing: Enquire', 'Available', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80', true),
  ('Soups & Warm Bowls', 'Meals', 'Comforting and nourishing botanical broths for every season.', 'Placeholder pricing: Enquire', 'Coming Soon', 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80', false),
  ('Healthy Guilt-Free Desserts', 'Snacks', 'Guilt-free sweet treats made with real ingredients and zero refined sugar.', 'Placeholder pricing: Enquire', 'Coming Soon', 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80', false),
  ('Special Seasonal Combos', 'Others', 'Curated meal combinations tailored for your wellness milestones.', 'Placeholder pricing: Enquire', 'Coming Soon', 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80', false);

insert into public.testimonials (name, role, review, rating, is_approved)
values
  ('Aarav Mehta', 'Software Architect, Hyderabad', 'Anagha Balanced Bites completely transformed my daily lunch routine. The food is fresh, light, and truly nourishing.', 5, true),
  ('Dr. Sneha Rao', 'Holistic Wellness Consultant', 'As someone who advises clients on nutrition, I appreciate their clean ingredients and dedication to balance without compromising on taste.', 5, true),
  ('Vikram Reddy', 'Fitness Enthusiast', 'The subscription plan keeps me consistent without spending hours cooking. Highly recommended for busy professionals!', 5, true);
