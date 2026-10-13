"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { store } from "@/lib/data/store";
import { CheckCircle2, TrendingUp, Store, Utensils, HelpCircle, Send, CheckCircle } from "lucide-react";

export default function FranchisePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    investment_budget: "₹15 Lakhs - ₹25 Lakhs",
    experience: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.city) return;

    store.addFranchiseApplication({
      name: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,
      state: form.state,
      investment_budget: form.investment_budget,
      experience: form.experience,
      message: form.message,
    });

    setSuccess(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      investment_budget: "₹15 Lakhs - ₹25 Lakhs",
      experience: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold">
              EXPANSION & PARTNERSHIPS
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#49352B]">
              Own an Anagha Balanced Bites Franchise
            </h1>
            <p className="text-sm sm:text-base text-[#6E5446] leading-relaxed">
              Join India&apos;s wellness movement. Partner with an emerging healthy food brand built on repeat subscription demand, lean operational models, and clean eating loyalty.
            </p>
          </div>

          {/* Franchise Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-3xl border border-[#E8DAC8] shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#FAF6F0] text-[#C64C2C] flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#49352B] mb-2">
                High-Growth Category
              </h3>
              <p className="text-xs text-[#6E5446] leading-relaxed">
                Urban health consciousness is accelerating. Consumers actively choose whole food bowls, macro nutrition, and fresh beverages over heavy junk food.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E8DAC8] shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#FAF6F0] text-[#C64C2C] flex items-center justify-center mb-4">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#49352B] mb-2">
                Standardized Kitchen SOPs
              </h3>
              <p className="text-xs text-[#6E5446] leading-relaxed">
                Plug-and-play recipes, vetted ingredient supplier networks, portion controls, and comprehensive staff onboarding minimize waste and preserve consistency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E8DAC8] shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#FAF6F0] text-[#C64C2C] flex items-center justify-center mb-4">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#49352B] mb-2">
                Predictable Subscription Model
              </h3>
              <p className="text-xs text-[#6E5446] leading-relaxed">
                Beyond one-off walk-ins, benefit from recurring weekday customer subscription contracts that yield strong, predictable monthly revenue streams.
              </p>
            </div>
          </div>

          {/* Application Form & Details Grid */}
          <div className="bg-white rounded-3xl border border-[#E8DAC8] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Col Info */}
            <div className="lg:col-span-5 bg-[#49352B] text-white p-8 sm:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-widest text-[#EADBC8] font-semibold">
                  FRANCHISE OVERVIEW
                </span>
                <h3 className="font-serif text-3xl font-medium leading-tight text-white">
                  What We Look For in Franchise Partners
                </h3>
                <p className="text-xs sm:text-sm text-[#EADBC8]/85 leading-relaxed">
                  We look for passionate entrepreneurs who appreciate healthy living, value customer service excellence, and have the local network to build a regional hub.
                </p>

                <div className="space-y-3.5 pt-2 text-xs text-[#FAF6F0]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                    <span>Space requirement: 300 – 900 sq.ft. (Cloud kitchen or dine-in counter)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                    <span>Comprehensive location suitability & traffic analysis</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                    <span>Digital marketing & corporate subscription enablement</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 text-xs text-[#EADBC8]/70">
                Have questions before applying? Email us at rishisrivastav778@gmail.com.
              </div>
            </div>

            {/* Right Col Application Form */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              <h3 className="font-serif text-2xl font-medium text-[#49352B] mb-2">
                Franchise Expression of Interest
              </h3>
              <p className="text-xs text-[#8D7466] mb-8">
                Submit your preliminary application below. Our expansion committee will review your profile and reach out within 48 hours.
              </p>

              {success ? (
                <div className="p-8 bg-green-50 border border-green-200 rounded-2xl flex flex-col items-center text-center gap-3 text-green-900">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                  <h4 className="font-serif text-xl font-semibold">Application Received!</h4>
                  <p className="text-xs text-green-700 max-w-md">
                    Thank you, {form.name || "partner"}. Your franchise expression of interest has been received. Our expansion team will review your preferred territory and schedule an exploratory call.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-6 py-2 rounded-full bg-[#49352B] text-white text-xs font-semibold hover:bg-black"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Rahul Mehta"
                        className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                      />
                    </div>
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Estimated Investment Budget *
                      </label>
                      <select
                        value={form.investment_budget}
                        onChange={(e) =>
                          setForm({ ...form, investment_budget: e.target.value })
                        }
                        className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C] bg-white"
                      >
                        <option value="₹10 Lakhs - ₹15 Lakhs">₹10 Lakhs – ₹15 Lakhs</option>
                        <option value="₹15 Lakhs - ₹25 Lakhs">₹15 Lakhs – ₹25 Lakhs</option>
                        <option value="₹25 Lakhs - ₹40 Lakhs">₹25 Lakhs – ₹40 Lakhs</option>
                        <option value="₹40 Lakhs+">₹40 Lakhs and above</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Preferred City / Region *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        placeholder="e.g. Hyderabad (Gachibowli) / Bengaluru"
                        className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        value={form.state}
                        onChange={(e) => setForm({ ...form, state: e.target.value })}
                        placeholder="e.g. Telangana"
                        className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Prior Business or Hospitality Experience
                    </label>
                    <input
                      type="text"
                      value={form.experience}
                      onChange={(e) => setForm({ ...form, experience: e.target.value })}
                      placeholder="e.g. 4 years retail management, QSR franchise ownership, etc."
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Additional Message / Planned Timeline
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share any specifics regarding your prospective locations or timeline..."
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2 focus:outline-none focus:border-[#C64C2C]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold transition-all shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Franchise Application</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
