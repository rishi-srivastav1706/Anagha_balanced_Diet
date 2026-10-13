import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Heart,
  Leaf,
  Users,
  CheckCircle2,
  Star,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { initialOfferings, initialSubscriptionPlans, initialTestimonials } from "@/lib/data/store";

export default function HomePage() {
  const featuredOfferings = initialOfferings.slice(0, 4);
  const featuredPlans = initialSubscriptionPlans;
  const approvedTestimonials = initialTestimonials.filter((t) => t.is_approved);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-gradient-to-b from-[#F5EBDD] via-[#FAF6F0] to-[#FAF6F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Headline and CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C64C2C]/10 border border-[#C64C2C]/20 text-[#C64C2C] text-xs font-semibold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Wholesome • Balanced • Nourishing</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#49352B] leading-[1.15]">
                  Good Food <br />
                  for a <span className="text-[#C64C2C] italic">Balanced</span> Life
                </h1>

                <p className="text-base sm:text-lg text-[#6E5446] max-w-xl leading-relaxed">
                  At Anagha Balanced Bites, we bring you wholesome, nutritious and delicious options that fit your lifestyle and personal wellness goals.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/offerings"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <span>Explore Our Offerings</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#49352B]/30 hover:border-[#49352B] text-[#49352B] bg-white/60 hover:bg-white font-medium text-sm transition-all shadow-2xs"
                  >
                    Get in Touch
                  </Link>
                </div>

                {/* Micro trust stats */}
                <div className="pt-6 flex items-center gap-6 text-xs text-[#8D7466] border-t border-[#E8DAC8]/80">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C64C2C]" />
                    <span>100% Whole Ingredients</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C64C2C]" />
                    <span>Nutrient Calibrated</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C64C2C]" />
                    <span>Hyderabad Delivery</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Circular Food Bowl Display */}
              <div className="lg:col-span-5 flex justify-center relative">
                <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px]">
                  {/* Decorative organic shapes */}
                  <div className="absolute inset-0 rounded-full bg-[#C64C2C]/10 blur-2xl transform scale-110"></div>
                  <div className="absolute -inset-4 rounded-full border border-[#C64C2C]/20 border-dashed animate-spin-slow"></div>

                  {/* Main image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80"
                      alt="Anagha Balanced Meal Bowl with fresh avocado, tomatoes, chicken and wholesome greens"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-2 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#E8DAC8] flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center">
                      <Heart className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-[#49352B]">Good Food</p>
                      <p className="text-[10px] text-[#8D7466] font-serif italic">Good Mood</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 PILLARS STRIP */}
        <section className="border-y border-[#E8DAC8]/70 bg-white/70 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center p-3">
                <div className="w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#E8DAC8] flex items-center justify-center text-[#C64C2C] mb-2.5">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-medium text-sm text-[#49352B]">Fresh Ingredients</h3>
                <p className="text-xs text-[#8D7466] mt-0.5">Sourced daily with care</p>
              </div>

              <div className="flex flex-col items-center p-3">
                <div className="w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#E8DAC8] flex items-center justify-center text-[#C64C2C] mb-2.5">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-medium text-sm text-[#49352B]">Balanced Nutrition</h3>
                <p className="text-xs text-[#8D7466] mt-0.5">Macronutrient optimized</p>
              </div>

              <div className="flex flex-col items-center p-3">
                <div className="w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#E8DAC8] flex items-center justify-center text-[#C64C2C] mb-2.5">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-medium text-sm text-[#49352B]">Customer Focused</h3>
                <p className="text-xs text-[#8D7466] mt-0.5">Personalized consultations</p>
              </div>

              <div className="flex flex-col items-center p-3">
                <div className="w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#E8DAC8] flex items-center justify-center text-[#C64C2C] mb-2.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-medium text-sm text-[#49352B]">Sustainable Choices</h3>
                <p className="text-xs text-[#8D7466] mt-0.5">Eco-conscious packaging</p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPLORE OUR OFFERINGS */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold mb-1">
                  OUR OFFERINGS
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#49352B] font-medium">
                  Explore Our Offerings
                </h2>
                <p className="text-sm text-[#8D7466] mt-2 max-w-lg">
                  Discover a range of healthy and delicious options, crafted with care for balanced living.
                </p>
              </div>
              <Link
                href="/offerings"
                className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#C64C2C] hover:text-[#AF3E20] group"
              >
                <span>View All Offerings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredOfferings.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E8DAC8]/70 shadow-sm hover:shadow-md transition-all group flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-[#FAF6F0]">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 text-[#2E7D32] text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
                      {item.status}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-medium text-[#8D7466] uppercase tracking-wider block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg font-medium text-[#49352B] mb-2 group-hover:text-[#C64C2C] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#6E5446] line-clamp-2 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    <Link
                      href="/offerings"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#C64C2C] hover:text-[#AF3E20] pt-2 border-t border-gray-100"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR STORY BANNER (Matching Mockup bottom-left) */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#49352B] rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Founder Image Left */}
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[440px]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                  alt="Founder of Anagha Balanced Bites"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Story Content Right */}
              <div className="lg:col-span-7 bg-[#C64C2C] p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-white relative">
                <div className="space-y-4 max-w-xl">
                  <span className="text-xs uppercase tracking-widest text-[#FAF6F0] font-semibold opacity-90">
                    OUR STORY
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-white">
                    Simple Food. <br />Better Choices.
                  </h2>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light">
                    Anagha Balanced Bites was born from a belief that healthy eating should be simple, accessible, and deeply enjoyable. We craft whole food and wellness solutions that nourish your body while fitting effortlessly into your daily schedule.
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#C64C2C] hover:bg-[#FAF6F0] font-semibold text-sm transition-all shadow-md"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUBSCRIPTIONS PREVIEW */}
        <section className="py-20 bg-[#F5EBDD]/50 border-t border-[#E8DAC8]/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold mb-1">
                SUBSCRIPTION PLANS
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#49352B] font-medium">
                Choose What Works for You
              </h2>
              <p className="text-sm text-[#8D7466] mt-2">
                Flexible plans designed to fit your lifestyle, daily routine, and wellness goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {featuredPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-7 flex flex-col justify-between transition-all ${
                    plan.is_popular
                      ? "bg-white border-2 border-[#C64C2C] shadow-xl relative transform md:-translate-y-2"
                      : "bg-white border border-[#E8DAC8] shadow-sm hover:shadow-md"
                  }`}
                >
                  {plan.is_popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C64C2C] text-white text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="font-serif text-xl font-medium text-[#49352B] mb-1">
                      {plan.title}
                    </h3>
                    <p className="text-xs text-[#8D7466] mb-4">{plan.subtitle}</p>

                    <div className="mb-6 p-3 bg-[#FAF6F0] rounded-xl text-center">
                      <span className="text-sm font-semibold text-[#49352B]">{plan.price}</span>
                      <span className="block text-[10px] text-[#8D7466] mt-0.5">
                        Configurable details on enquiry
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#6E5446]">
                          <CheckCircle2 className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/subscriptions?select=${plan.id}`}
                    className={`w-full py-3 rounded-full text-center text-xs font-semibold transition-all ${
                      plan.is_popular
                        ? "bg-[#C64C2C] hover:bg-[#AF3E20] text-white shadow-md"
                        : "border border-[#49352B]/40 hover:border-[#49352B] text-[#49352B] hover:bg-[#FAF6F0]"
                    }`}
                  >
                    Enquire Now
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-2xl p-6 border border-[#E8DAC8] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto shadow-xs">
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-10 h-10 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#49352B]">
                    Not sure which plan is right for you?
                  </h4>
                  <p className="text-xs text-[#8D7466]">
                    Talk to our nutrition team and we&apos;ll help you choose the best option.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full border border-[#C64C2C] text-[#C64C2C] hover:bg-[#C64C2C] hover:text-white text-xs font-semibold transition-colors shrink-0"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </section>

        {/* GENUINE TESTIMONIALS */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold mb-1">
                REAL FEEDBACK
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#49352B] font-medium">
                Loved by Wellness Seekers
              </h2>
              <p className="text-sm text-[#8D7466] mt-1">
                Verified experiences from our community across Hyderabad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {approvedTestimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-2xl p-6 border border-[#E8DAC8] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 text-[#C64C2C] mb-3">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-[#49352B] italic leading-relaxed mb-6">
                      &ldquo;{t.review}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-[#FAF6F0] border border-[#E8DAC8] text-[#C64C2C] font-serif font-bold text-xs flex items-center justify-center">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#49352B]">{t.name}</p>
                      <p className="text-[11px] text-[#8D7466]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/testimonials"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#C64C2C] hover:underline"
              >
                <span>Read all reviews or share your feedback</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FRANCHISE & COLLABORATION DUAL CTA */}
        <section className="py-16 bg-[#49352B] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#FAF6F0]/10 rounded-2xl p-8 border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#EADBC8] font-semibold">
                    GROWTH OPPORTUNITY
                  </span>
                  <h3 className="font-serif text-2xl font-medium mt-1 mb-3 text-white">
                    Franchise Partnerships
                  </h3>
                  <p className="text-xs text-[#EADBC8]/80 leading-relaxed mb-6">
                    Join our journey in bringing clean, balanced food to health-conscious urban hubs. We provide comprehensive operational support, supply chain management, and brand guidance.
                  </p>
                </div>
                <Link
                  href="/franchise"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold transition-all self-start"
                >
                  <span>Apply for Franchise</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="bg-[#FAF6F0]/10 rounded-2xl p-8 border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#EADBC8] font-semibold">
                    PROFESSIONAL NETWORK
                  </span>
                  <h3 className="font-serif text-2xl font-medium mt-1 mb-3 text-white">
                    Nutrition & Health Collaborations
                  </h3>
                  <p className="text-xs text-[#EADBC8]/80 leading-relaxed mb-6">
                    Are you a clinical nutritionist, dietician, or fitness coach? Partner with us to provide specialized, reliable meal solutions and educational workshops for your clients.
                  </p>
                </div>
                <Link
                  href="/nutrition"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/40 hover:bg-white hover:text-[#49352B] text-white text-xs font-semibold transition-all self-start"
                >
                  <span>Collaborate With Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK CONTACT STRIP WITH WHATSAPP */}
        <section className="py-12 bg-[#FAF6F0] border-t border-[#E8DAC8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-base font-medium text-[#49352B]">
                  Have a quick question?
                </h4>
                <p className="text-xs text-[#8D7466]">
                  Chat with our team directly on WhatsApp for swift answers and menu requests.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/916281422353?text=Hi%20Anagha%20Balanced%20Bites,%20I'd%20like%20to%20know%20more%20about%20your%20meals"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold transition-all shadow-md shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
