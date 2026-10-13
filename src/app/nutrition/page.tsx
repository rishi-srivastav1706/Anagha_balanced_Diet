"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { store } from "@/lib/data/store";
import { CollaborationRequest } from "@/lib/types";
import { ShieldAlert, HeartHandshake, CheckCircle, Send, Leaf, Sparkles, Award } from "lucide-react";

export default function NutritionPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "Nutritionist" as CollaborationRequest["profession"],
    social_or_website: "",
    proposal: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.proposal) return;

    store.addCollaboration({
      name: form.name,
      email: form.email,
      phone: form.phone,
      profession: form.profession,
      social_or_website: form.social_or_website,
      proposal: form.proposal,
    });

    setSuccess(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      profession: "Nutritionist",
      social_or_website: "",
      proposal: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold">
              WELLNESS & COLLABORATION
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#49352B]">
              Nutrition Harmony & Professional Partnerships
            </h1>
            <p className="text-sm sm:text-base text-[#6E5446] leading-relaxed">
              We work alongside certified wellness practitioners, dieticians, and fitness mentors to empower everyday wellness through genuine, unprocessed nutrition.
            </p>
          </div>

          {/* Medical Notice Box */}
          <div className="bg-[#FAF4EC] border border-[#E8DAC8] rounded-2xl p-4 sm:p-5 mb-14 flex items-start gap-3.5 max-w-4xl mx-auto">
            <ShieldAlert className="w-5 h-5 text-[#C64C2C] shrink-0 mt-0.5" />
            <div className="text-xs text-[#6E5446] leading-relaxed">
              <strong className="text-[#49352B] font-semibold">Important Health Advisory: </strong>
              The culinary guidance and nutritional information provided by Anagha Balanced Bites are designed for general wellness, balanced macronutrient intake, and mindful eating. We do not diagnose diseases, prescribe medical treatments, or replace personalized clinical nutrition therapy. Please consult a licensed medical doctor or qualified physician for clinical conditions.
            </div>
          </div>

          {/* 3 Pillars of Balanced Nutrition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-3xl border border-[#E8DAC8] shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#FAF6F0] text-[#C64C2C] flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#49352B] mb-2">
                Whole Food First
              </h3>
              <p className="text-xs text-[#6E5446] leading-relaxed">
                Prioritizing clean legumes, seasonal regional vegetables, healthy fats, and unrefined grains over industrial powders or synthetic flavor additives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E8DAC8] shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#FAF6F0] text-[#C64C2C] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#49352B] mb-2">
                Macronutrient Balance
              </h3>
              <p className="text-xs text-[#6E5446] leading-relaxed">
                Every meal bowl harmonizes steady-release carbohydrates, essential lean amino acids, and vital fibers to support consistent daily blood glucose stability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E8DAC8] shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#FAF6F0] text-[#C64C2C] flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#49352B] mb-2">
                Practitioner Synergy
              </h3>
              <p className="text-xs text-[#6E5446] leading-relaxed">
                We team up with registered dieticians to ensure customized client prescriptions can be translated into delicious, reliably delivered meals.
              </p>
            </div>
          </div>

          {/* Collaboration Section with Form */}
          <div className="bg-white rounded-3xl border border-[#E8DAC8] shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Col Info */}
            <div className="lg:col-span-5 bg-[#49352B] text-white p-8 sm:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-widest text-[#EADBC8] font-semibold">
                  PARTNER WITH US
                </span>
                <h3 className="font-serif text-3xl font-medium leading-tight text-white">
                  Calling Nutritionists, Trainers & Health Mentors
                </h3>
                <p className="text-xs sm:text-sm text-[#EADBC8]/85 leading-relaxed">
                  Help your clients stay adherent to their dietary goals without the cooking fatigue. Partner with Anagha Balanced Bites for customized client meal plans, co-branded wellness workshops, and referral perks.
                </p>

                <div className="space-y-3 pt-2 text-xs text-[#FAF6F0]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#C64C2C]" />
                    <span>Specialized macro formulation for your clients</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#C64C2C]" />
                    <span>Dedicated kitchen fulfillment coordinator</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#C64C2C]" />
                    <span>Co-marketing & community guest articles</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 text-xs text-[#EADBC8]/70">
                Have an urgent proposal? Call us directly at +91 62814 22353.
              </div>
            </div>

            {/* Right Col Application Form */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              <h3 className="font-serif text-2xl font-medium text-[#49352B] mb-2">
                Professional Collaboration Request
              </h3>
              <p className="text-xs text-[#8D7466] mb-8">
                Tell us about your background and how you would like to collaborate. Our wellness lead will contact you within 2 business days.
              </p>

              {success ? (
                <div className="p-8 bg-green-50 border border-green-200 rounded-2xl flex flex-col items-center text-center gap-3 text-green-900">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                  <h4 className="font-serif text-xl font-semibold">Request Received!</h4>
                  <p className="text-xs text-green-700 max-w-md">
                    Thank you for reaching out. We have logged your collaboration proposal in our partner queue and will connect with you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 px-6 py-2 rounded-full bg-[#49352B] text-white text-xs font-semibold hover:bg-black"
                  >
                    Submit another request
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
                        placeholder="Dr. / Coach / Nutritionist"
                        className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Professional Title *
                      </label>
                      <select
                        value={form.profession}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            profession: e.target.value as CollaborationRequest["profession"],
                          })
                        }
                        className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C] bg-white"
                      >
                        <option value="Nutritionist">Clinical Nutritionist</option>
                        <option value="Dietician">Registered Dietician</option>
                        <option value="Fitness Coach">Fitness Coach / Trainer</option>
                        <option value="Doctor">Medical Practitioner</option>
                        <option value="Wellness Brand">Wellness Center / Brand</option>
                        <option value="Other">Other Wellness Professional</option>
                      </select>
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
                        placeholder="doctor@practice.com"
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

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Professional Website / Social Profile
                    </label>
                    <input
                      type="text"
                      value={form.social_or_website}
                      onChange={(e) => setForm({ ...form, social_or_website: e.target.value })}
                      placeholder="e.g. instagram.com/mywellnessclinic or portfolio link"
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Collaboration Proposal & Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.proposal}
                      onChange={(e) => setForm({ ...form, proposal: e.target.value })}
                      placeholder="Share how you'd like to work together, client base size, or proposed joint initiatives..."
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2 focus:outline-none focus:border-[#C64C2C]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold transition-all shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Collaboration Proposal</span>
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
