import {
  Offering,
  SubscriptionPlan,
  Enquiry,
  FranchiseApplication,
  CollaborationRequest,
  Testimonial,
  FAQ,
  BusinessSettings,
  UserProfile,
  CustomerSubscriptionRecord,
} from "../types";

export const initialSettings: BusinessSettings = {
  brand_name: "Anagha Balanced Bites",
  tagline: "Eat Well • Live Balanced",
  phone: "+91 62814 22353",
  whatsapp_number: "+916281422353",
  email: "rishisrivastav778@gmail.com",
  address: "Flat 401, Balaji Nagar, Road Number 5, KLR Venture, Medchal",
  city: "Medchal, Hyderabad",
  state: "Telangana, India",
  hours: "Monday – Saturday: 8:00 AM – 9:00 PM",
  google_maps_embed_url:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15212.87157850239!2d78.471618!3d17.629124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f3a3c200001%3A0x6b4421b212345678!2sMedchal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  hero_headline: "Good Food for a Balanced Life",
  hero_subheadline:
    "At Anagha Balanced Bites, we bring you wholesome, nutritious and delicious options that fit your lifestyle and goals.",
  instagram_url: "https://instagram.com",
  facebook_url: "https://facebook.com",
  linkedin_url: "https://linkedin.com",
};

export const initialOfferings: Offering[] = [
  {
    id: "off-1",
    title: "Balanced Meal Bowls",
    category: "Meals",
    description: "Fresh, wholesome and protein-rich meals crafted for everyday energy.",
    price: "Custom Enquiry",
    status: "Available",
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    calories: "420 kcal",
    protein: "24g",
    is_featured: true,
  },
  {
    id: "off-2",
    title: "Fresh Juices & Smoothies",
    category: "Beverages",
    description: "Natural blends packed with vitamins, antioxidants, and pure goodness.",
    price: "Custom Enquiry",
    status: "Available",
    image_url: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80",
    calories: "180 kcal",
    protein: "6g",
    is_featured: true,
  },
  {
    id: "off-3",
    title: "Healthy Snack Packs",
    category: "Snacks",
    description: "Nutrient-dense snacks for on-the-go active lifestyles and busy workdays.",
    price: "Custom Enquiry",
    status: "Available",
    image_url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    calories: "210 kcal",
    protein: "10g",
    is_featured: true,
  },
  {
    id: "off-4",
    title: "Nutrition Guidance",
    category: "Meals",
    description: "Personalized meal consultations designed to align with your personal health goals.",
    price: "Custom Consultation",
    status: "Available",
    image_url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    calories: "Customized",
    protein: "Customized",
    is_featured: true,
  },
  {
    id: "off-5",
    title: "Soups & Warm Bowls",
    category: "Meals",
    description: "Comforting and nourishing botanical broths and wholesome soups for every season.",
    price: "Coming Soon",
    status: "Coming Soon",
    image_url: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    calories: "260 kcal",
    protein: "14g",
    is_featured: false,
  },
  {
    id: "off-6",
    title: "Healthy Desserts",
    category: "Snacks",
    description: "Guilt-free sweet treats made with whole dates, nuts, and zero refined sugar.",
    price: "Coming Soon",
    status: "Coming Soon",
    image_url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    calories: "190 kcal",
    protein: "7g",
    is_featured: false,
  },
  {
    id: "off-7",
    title: "Special Combos",
    category: "Others",
    description: "Curated meal combinations balanced for high performance and sustained energy.",
    price: "Coming Soon",
    status: "Coming Soon",
    image_url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    calories: "520 kcal",
    protein: "30g",
    is_featured: false,
  },
];

export const initialSubscriptionPlans: SubscriptionPlan[] = [
  {
    id: "plan-starter",
    title: "Starter Plan",
    subtitle: "Perfect for a healthy start.",
    billing_interval: "monthly",
    price: "Starting at ₹2,999 / mo",
    features: [
      "Selected meal options",
      "Weekly / Monthly delivery",
      "Basic nutrition guidance",
    ],
    is_popular: false,
    is_active: true,
  },
  {
    id: "plan-wellness",
    title: "Wellness Plan",
    subtitle: "Designed for your well-being.",
    billing_interval: "monthly",
    price: "Starting at ₹4,999 / mo",
    features: [
      "Wide range of meal options",
      "Weekly / Monthly delivery",
      "Personalized nutrition guidance",
      "Priority support",
    ],
    is_popular: true,
    is_active: true,
  },
  {
    id: "plan-premium",
    title: "Premium Plan",
    subtitle: "Complete care for a healthier you.",
    billing_interval: "monthly",
    price: "Starting at ₹7,499 / mo",
    features: [
      "Full menu access",
      "Weekly / Monthly delivery",
      "Personalized nutrition guidance",
      "Expert consultation (if available)",
      "Priority support",
    ],
    is_popular: false,
    is_active: true,
  },
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Aarav Sharma",
    role: "Senior Consultant",
    review:
      "Anagha Balanced Bites solved my everyday weekday lunch struggles. Clean, fresh, delicious, and truly energizing without feeling sluggish.",
    rating: 5,
    is_approved: true,
    created_at: "2026-03-10",
  },
  {
    id: "test-2",
    name: "Dr. Kavita Joshi",
    role: "Clinical Dietician",
    review:
      "I often recommend Anagha Balanced Bites to clients seeking genuine balanced nutrition. Their ingredient transparency is outstanding.",
    rating: 5,
    is_approved: true,
    created_at: "2026-03-18",
  },
  {
    id: "test-3",
    name: "Pooja Varma",
    role: "Fitness Instructor",
    review:
      "The meal subscription keeps my macros on point. Portions are generous, high in quality protein, and delivered consistently on time.",
    rating: 5,
    is_approved: true,
    created_at: "2026-04-02",
  },
];

export const initialFAQs: FAQ[] = [
  {
    id: "faq-1",
    question: "What makes Anagha Balanced Bites different from ordinary meal services?",
    answer:
      "We focus on macro-balanced, wholesome, unprocessed ingredients with zero artificial additives. Every dish is designed to support steady energy and overall well-being.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "How do your subscription plans work?",
    answer:
      "You can choose between monthly and quarterly subscription plans. Once you submit an enquiry, our team coordinates your delivery preferences, schedule, and dietary considerations.",
    category: "Subscriptions",
  },
  {
    id: "faq-3",
    question: "Can I customize meals for my dietary restrictions?",
    answer:
      "Yes! Our team works with you to accommodate specific allergies, vegetarian/vegan preferences, or protein preferences where possible.",
    category: "Nutrition",
  },
  {
    id: "faq-4",
    question: "How can I apply for a franchise partnership?",
    answer:
      "Visit our Franchise page and complete the franchise application form. Our business development team will review your preferred location and get in touch within 48 hours.",
    category: "Franchise",
  },
  {
    id: "faq-5",
    question: "Are prices and menu items fixed?",
    answer:
      "Pricing and seasonal menus are configurable and updated regularly. You can reach out directly via our contact form or WhatsApp for the latest menu details.",
    category: "General",
  },
];

export const initialEnquiries: Enquiry[] = [
  {
    id: "enq-1",
    name: "Priya Sharma",
    email: "priya.s@example.com",
    phone: "+91 98111 22334",
    type: "General Enquiry",
    message: "Would like to understand more about weekly meal plan customization.",
    status: "New",
    created_at: "Apr 20, 2026",
  },
  {
    id: "enq-2",
    name: "Rahul Mehta",
    email: "rahul.m@example.com",
    phone: "+91 98222 33445",
    type: "Franchise",
    message: "Interested in opening an outlet in Gachibowli, Hyderabad.",
    status: "In Progress",
    created_at: "Apr 21, 2026",
  },
  {
    id: "enq-3",
    name: "Sneha Iyer",
    email: "sneha.i@example.com",
    phone: "+91 98333 44556",
    type: "Nutrition Collaboration",
    message: "Certified Sports Nutritionist interested in client meal referrals.",
    status: "Resolved",
    created_at: "Apr 22, 2026",
  },
];

export const initialFranchiseApplications: FranchiseApplication[] = [
  {
    id: "fran-1",
    name: "Rahul Mehta",
    email: "rahul.m@example.com",
    phone: "+91 98222 33445",
    city: "Hyderabad (Gachibowli)",
    state: "Telangana",
    investment_budget: "₹15 Lakhs - ₹25 Lakhs",
    experience: "5 years managing hospitality retail",
    message: "Looking for high-density tech corridor franchise setup.",
    status: "In Review",
    created_at: "Apr 21, 2026",
  },
  {
    id: "fran-2",
    name: "Karan Singhal",
    email: "karan.s@example.com",
    phone: "+91 98444 55667",
    city: "Bengaluru (Indiranagar)",
    state: "Karnataka",
    investment_budget: "₹25 Lakhs - ₹40 Lakhs",
    experience: "Previous cloud kitchen franchisee",
    message: "Passionate about health food brand expansion into South Bengaluru.",
    status: "New",
    created_at: "Apr 23, 2026",
  },
];

export const initialCollaborations: CollaborationRequest[] = [
  {
    id: "collab-1",
    name: "Sneha Iyer",
    email: "sneha.i@example.com",
    phone: "+91 98333 44556",
    profession: "Nutritionist",
    social_or_website: "instagram.com/snehaiyernutrition",
    proposal: "Collaborate on clinical nutrition meal plans for diabetes & PCOS wellness.",
    status: "In Review",
    created_at: "Apr 22, 2026",
  },
];

export const demoCustomerUser: UserProfile = {
  id: "cust-demo",
  name: "Rishi",
  email: "rishisrivastav778@gmail.com",
  phone: "+91 62814 22353",
  role: "customer",
  address: "Flat 401, Balaji Nagar, Road Number 5, KLR Venture, Medchal",
  dietary_preferences: "High protein, low sodium, gluten sensitive",
  created_at: "2026-01-15",
};

export const demoAdminUser: UserProfile = {
  id: "admin-demo",
  name: "Anagha Admin",
  email: "rishisrivastav778@gmail.com",
  phone: "+91 62814 22353",
  role: "admin",
  created_at: "2026-01-01",
};

export const demoSubscriptions: CustomerSubscriptionRecord[] = [
  {
    id: "sub-1",
    user_id: "cust-demo",
    plan_id: "plan-wellness",
    plan_title: "Wellness Plan",
    status: "Active",
    started_at: "Apr 01, 2026",
    next_billing: "May 01, 2026",
  },
];

// In-Memory store with browser localStorage sync for interactive testing
class DataStore {
  private offerings: Offering[] = [...initialOfferings];
  private plans: SubscriptionPlan[] = [...initialSubscriptionPlans];
  private enquiries: Enquiry[] = [...initialEnquiries];
  private franchiseApps: FranchiseApplication[] = [...initialFranchiseApplications];
  private collabs: CollaborationRequest[] = [...initialCollaborations];
  private testimonials: Testimonial[] = [...initialTestimonials];
  private faqs: FAQ[] = [...initialFAQs];
  private settings: BusinessSettings = { ...initialSettings };
  private currentUser: UserProfile | null = demoCustomerUser;

  constructor() {
    if (typeof window !== "undefined") {
      this.loadFromLocalStorage();
    }
  }

  private loadFromLocalStorage() {
    try {
      const storedOfferings = localStorage.getItem("abb_offerings");
      if (storedOfferings) this.offerings = JSON.parse(storedOfferings);

      const storedPlans = localStorage.getItem("abb_plans");
      if (storedPlans) this.plans = JSON.parse(storedPlans);

      const storedEnquiries = localStorage.getItem("abb_enquiries");
      if (storedEnquiries) this.enquiries = JSON.parse(storedEnquiries);

      const storedFranchise = localStorage.getItem("abb_franchise");
      if (storedFranchise) this.franchiseApps = JSON.parse(storedFranchise);

      const storedCollabs = localStorage.getItem("abb_collabs");
      if (storedCollabs) this.collabs = JSON.parse(storedCollabs);

      const storedTestimonials = localStorage.getItem("abb_testimonials");
      if (storedTestimonials) this.testimonials = JSON.parse(storedTestimonials);

      const storedSettings = localStorage.getItem("abb_settings");
      if (storedSettings) {
        const parsed = JSON.parse(storedSettings);
        if (!parsed.phone || parsed.phone === "+91 98765 43210" || parsed.email === "info@anaghabalancedbites.com") {
          this.settings = { ...initialSettings };
          this.saveToLocalStorage("abb_settings", this.settings);
        } else {
          this.settings = parsed;
        }
      }

      const storedUser = localStorage.getItem("abb_current_user");
      if (storedUser) this.currentUser = JSON.parse(storedUser);
    } catch {
      // LocalStorage access safe fallback
    }
  }

  private saveToLocalStorage(key: string, data: unknown) {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(data));
      } catch {
        // Safe fallback
      }
    }
  }

  // Offerings
  getOfferings() {
    return this.offerings;
  }

  saveOffering(offering: Offering) {
    const idx = this.offerings.findIndex((o) => o.id === offering.id);
    if (idx >= 0) {
      this.offerings[idx] = offering;
    } else {
      this.offerings.unshift(offering);
    }
    this.saveToLocalStorage("abb_offerings", this.offerings);
  }

  deleteOffering(id: string) {
    this.offerings = this.offerings.filter((o) => o.id !== id);
    this.saveToLocalStorage("abb_offerings", this.offerings);
  }

  // Plans
  getPlans() {
    return this.plans;
  }

  savePlan(plan: SubscriptionPlan) {
    const idx = this.plans.findIndex((p) => p.id === plan.id);
    if (idx >= 0) {
      this.plans[idx] = plan;
    } else {
      this.plans.push(plan);
    }
    this.saveToLocalStorage("abb_plans", this.plans);
  }

  // Enquiries
  getEnquiries() {
    return this.enquiries;
  }

  addEnquiry(enquiry: Omit<Enquiry, "id" | "created_at" | "status">) {
    const newEnq: Enquiry = {
      ...enquiry,
      id: `enq-${Date.now()}`,
      status: "New",
      created_at: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    this.enquiries.unshift(newEnq);
    this.saveToLocalStorage("abb_enquiries", this.enquiries);
    return newEnq;
  }

  updateEnquiryStatus(id: string, status: Enquiry["status"]) {
    const item = this.enquiries.find((e) => e.id === id);
    if (item) {
      item.status = status;
      this.saveToLocalStorage("abb_enquiries", this.enquiries);
    }
  }

  // Franchise
  getFranchiseApplications() {
    return this.franchiseApps;
  }

  addFranchiseApplication(app: Omit<FranchiseApplication, "id" | "created_at" | "status">) {
    const newApp: FranchiseApplication = {
      ...app,
      id: `fran-${Date.now()}`,
      status: "New",
      created_at: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    this.franchiseApps.unshift(newApp);
    this.saveToLocalStorage("abb_franchise", this.franchiseApps);
    return newApp;
  }

  updateFranchiseStatus(id: string, status: FranchiseApplication["status"]) {
    const item = this.franchiseApps.find((f) => f.id === id);
    if (item) {
      item.status = status;
      this.saveToLocalStorage("abb_franchise", this.franchiseApps);
    }
  }

  // Collaborations
  getCollaborations() {
    return this.collabs;
  }

  addCollaboration(collab: Omit<CollaborationRequest, "id" | "created_at" | "status">) {
    const newCollab: CollaborationRequest = {
      ...collab,
      id: `collab-${Date.now()}`,
      status: "New",
      created_at: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    this.collabs.unshift(newCollab);
    this.saveToLocalStorage("abb_collabs", this.collabs);
    return newCollab;
  }

  updateCollaborationStatus(id: string, status: CollaborationRequest["status"]) {
    const item = this.collabs.find((c) => c.id === id);
    if (item) {
      item.status = status;
      this.saveToLocalStorage("abb_collabs", this.collabs);
    }
  }

  // Testimonials
  getTestimonials() {
    return this.testimonials;
  }

  addTestimonial(testimonial: Omit<Testimonial, "id" | "created_at" | "is_approved">) {
    const newTest: Testimonial = {
      ...testimonial,
      id: `test-${Date.now()}`,
      is_approved: false, // Must be approved by admin per requirement
      created_at: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    this.testimonials.unshift(newTest);
    this.saveToLocalStorage("abb_testimonials", this.testimonials);
    return newTest;
  }

  updateTestimonialApproval(id: string, is_approved: boolean) {
    const item = this.testimonials.find((t) => t.id === id);
    if (item) {
      item.is_approved = is_approved;
      this.saveToLocalStorage("abb_testimonials", this.testimonials);
    }
  }

  // Settings
  getSettings() {
    return this.settings;
  }

  updateSettings(settings: Partial<BusinessSettings>) {
    this.settings = { ...this.settings, ...settings };
    this.saveToLocalStorage("abb_settings", this.settings);
  }

  // FAQs
  getFAQs() {
    return this.faqs;
  }

  // Auth & Profile
  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user: UserProfile | null) {
    this.currentUser = user;
    this.saveToLocalStorage("abb_current_user", user);
  }

  updateUserProfile(profile: Partial<UserProfile>) {
    if (this.currentUser) {
      this.currentUser = { ...this.currentUser, ...profile };
      this.saveToLocalStorage("abb_current_user", this.currentUser);
    }
  }
}

export const store = new DataStore();
