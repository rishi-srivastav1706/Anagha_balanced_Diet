export type UserRole = "customer" | "admin";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  address?: string;
  dietary_preferences?: string;
  created_at: string;
}

export type OfferingCategory = "All" | "Meals" | "Snacks" | "Beverages" | "Others";

export interface Offering {
  id: string;
  title: string;
  category: OfferingCategory;
  description: string;
  price?: string; // Kept configurable / placeholder per instructions
  status: "Available" | "Coming Soon";
  image_url: string;
  calories?: string;
  protein?: string;
  is_featured?: boolean;
}

export interface SubscriptionPlan {
  id: string;
  title: string;
  subtitle: string;
  billing_interval: "monthly" | "quarterly";
  price: string; // Formatted configurable string, e.g., "Starting from ₹3,499/mo" or "Custom enquiry"
  features: string[];
  is_popular?: boolean;
  is_active: boolean;
}

export interface Enquiry {
  id: string;
  user_id?: string;
  name: string;
  email: string;
  phone: string;
  type: "General Enquiry" | "Subscription" | "Support" | "Franchise" | "Nutrition Collaboration";
  message: string;
  status: "New" | "In Progress" | "Resolved";
  created_at: string;
}

export interface FranchiseApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state?: string;
  investment_budget: string;
  experience?: string;
  message: string;
  status: "New" | "In Review" | "Contacted" | "Approved" | "Declined";
  created_at: string;
}

export interface CollaborationRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  profession: "Nutritionist" | "Dietician" | "Fitness Coach" | "Doctor" | "Wellness Brand" | "Other";
  social_or_website?: string;
  proposal: string;
  status: "New" | "In Review" | "Contacted";
  created_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  is_approved: boolean;
  avatar_url?: string;
  created_at: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BusinessSettings {
  brand_name: string;
  tagline: string;
  phone: string;
  whatsapp_number: string;
  email: string;
  address: string;
  city: string;
  state: string;
  hours: string;
  google_maps_embed_url: string;
  hero_headline: string;
  hero_subheadline: string;
  instagram_url: string;
  facebook_url: string;
  linkedin_url: string;
}

export interface CustomerSubscriptionRecord {
  id: string;
  user_id: string;
  plan_id: string;
  plan_title: string;
  status: "Active" | "Paused" | "Cancelled";
  started_at: string;
  next_billing?: string;
}
