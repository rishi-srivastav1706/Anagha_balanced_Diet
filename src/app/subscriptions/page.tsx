"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { store } from "@/lib/data/store";
import { SubscriptionPlan } from "@/lib/types";
import { CheckCircle2, Leaf, Send, CheckCircle, X, Sparkles, MessageCircle } from "lucide-react";

export default function SubscriptionsPage() {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    preferences: "",
  });

  useEffect(() => {
    setPlans(store.getPlans());
  }, []);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !selectedPlan) return;

    store.addEnquiry({
      name: form.name,
      email: form.email || "subscriber@example.com",
      phone: form.phone,
      type: "Subscription",
      message: `Subscription Enquiry for: ${selectedPlan.title} (${billingCycle}). Delivery Area: ${form.address}. Preferences: ${form.preferences}`,
    });

    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setSelectedPlan(null);
      setForm({ name: "", email: "", phone: "", address: "", preferences: "" });
    }, 2500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-1 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Banner matching Mockup #3 */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-14">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold">
                SUBSCRIPTION PLANS
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#49352B]">
                Choose What Works for You
              </h1>
              <p className="text-sm sm:text-base text-[#6E5446] leading-relaxed">
                Flexible plans designed to fit your lifestyle, daily schedule, and individual wellness goals.
              </p>
            </div>

            {/* Meal prep box mockup preview */}
            <div className="hidden lg:flex items-center gap-4 bg-[#F5EBDD] p-3 rounded-2xl border border-[#E8DAC8]">
              <div className="w-24 h-20 rounded-xl overflow-hidden shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=300&q=80"
                  alt="Meal prep containers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pr-4">
                <p className="font-serif text-xs font-semibold text-[#49352B]">Healthy Meals</p>
                <p className="font-serif italic text-xs text-[#C64C2C]">Happy You</p>
              </div>
            </div>
          </div>

          {/* Billing Interval Toggle (Monthly / Quarterly) */}
          <div className="flex justify-center mb-12">
            <div className="bg-[#EADBC8]/60 p-1 rounded-full flex items-center border border-[#E8DAC8]">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all ${
                  billingCycle === "monthly"
                    ? "bg-[#C64C2C] text-white shadow-sm"
                    : "text-[#49352B] hover:text-[#C64C2C]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("quarterly")}
                className={`px-6 py-2 rounded-full text-xs font-semibold transition-all ${
                  billingCycle === "quarterly"
                    ? "bg-[#C64C2C] text-white shadow-sm"
                    : "text-[#49352B] hover:text-[#C64C2C]"
                }`}
              >
                Quarterly (Save 10%)
              </button>
            </div>
          </div>

          {/* 3 Tier Plans Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  plan.is_popular
                    ? "bg-white border-2 border-[#C64C2C] shadow-xl relative transform md:-translate-y-2"
                    : "bg-white border border-[#E8DAC8] shadow-sm hover:shadow-md"
                }`}
              >
                {plan.is_popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C64C2C] text-white text-[11px] font-semibold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#49352B] mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-[#8D7466] mb-5">{plan.subtitle}</p>

                  <div className="mb-6 p-4 bg-[#FAF6F0] rounded-2xl border border-[#E8DAC8]/70 text-center">
                    <span className="text-base font-semibold text-[#49352B]">
                      {billingCycle === "quarterly"
                        ? plan.price.replace("/ mo", "/ quarter (discounted)")
                        : plan.price}
                    </span>
                    <span className="block text-[10px] text-[#8D7466] mt-0.5">
                      Tailored to your dietary routine
                    </span>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#6E5446]">
                        <CheckCircle2 className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full py-3.5 rounded-full text-xs font-semibold transition-all ${
                      plan.is_popular
                        ? "bg-[#C64C2C] hover:bg-[#AF3E20] text-white shadow-md hover:shadow-lg"
                        : "border border-[#49352B]/40 hover:border-[#49352B] text-[#49352B] hover:bg-[#FAF6F0]"
                    }`}
                  >
                    Enquire Now
                  </button>

                  <a
                    href={`https://wa.me/916281422353?text=Hi%20Anagha%20Balanced%20Bites,%20I'm%20interested%20in%20the%20${encodeURIComponent(
                      plan.title
                    )}%20(${billingCycle})`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 text-[11px] text-[#8D7466] hover:text-[#25D366] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Banner */}
          <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DAC8] flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-xs">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center shrink-0">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-base font-semibold text-[#49352B]">
                  Not sure which plan is right for you?
                </h4>
                <p className="text-xs sm:text-sm text-[#8D7466] mt-0.5">
                  Talk to our team and we&apos;ll help you choose the best option for your goals.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full border-2 border-[#C64C2C] text-[#C64C2C] hover:bg-[#C64C2C] hover:text-white text-xs font-bold transition-all shrink-0"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </main>

      {/* Plan Enquiry Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E8DAC8] animate-in fade-in zoom-in-95 duration-200 my-8">
            <div className="bg-[#49352B] text-white p-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#EADBC8] uppercase tracking-wider font-semibold">
                  SUBSCRIPTION ENQUIRY
                </span>
                <h3 className="font-serif text-xl font-medium mt-0.5 text-white">
                  {selectedPlan.title} ({billingCycle})
                </h3>
              </div>
              <button
                onClick={() => setSelectedPlan(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {enquirySuccess ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-2xl flex flex-col items-center text-center gap-3 text-green-900">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                  <h4 className="font-serif font-semibold text-lg">Enquiry Submitted!</h4>
                  <p className="text-xs text-green-700">
                    Thank you, {form.name}! Our meal planning coordinator will contact you at {form.phone} to finalize your menu preferences and delivery times.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Rishi Verma"
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 62814 22353"
                        className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Delivery Locality / Address in Hyderabad
                    </label>
                    <input
                      type="text"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="e.g., Medchal, Kompally, Jubilee Hills..."
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Dietary Goals / Preferences
                    </label>
                    <textarea
                      rows={2}
                      value={form.preferences}
                      onChange={(e) => setForm({ ...form, preferences: e.target.value })}
                      placeholder="e.g. Vegetarian only, high protein, low spice, lunch deliveries only..."
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2 focus:outline-none focus:border-[#C64C2C]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedPlan(null)}
                      className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold transition-all shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Enquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
