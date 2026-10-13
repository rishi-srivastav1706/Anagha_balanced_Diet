"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { store } from "@/lib/data/store";
import { Testimonial } from "@/lib/types";
import { Star, MessageSquarePlus, CheckCircle, Send, X, ShieldCheck } from "lucide-react";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    role: "",
    review: "",
    rating: 5,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Only display approved testimonials publicly per requirement
    setTestimonials(store.getTestimonials().filter((t) => t.is_approved));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.review) return;

    store.addTestimonial({
      name: form.name,
      role: form.role || "Verified Customer",
      review: form.review,
      rating: form.rating,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setForm({ name: "", role: "", review: "", rating: 5 });
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold">
                COMMUNITY TESTIMONIALS
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#49352B] mt-1">
                Real Stories, Real Balance
              </h1>
              <p className="text-sm text-[#6E5446] mt-2 max-w-xl">
                Read authentic feedback from working professionals, health enthusiasts, and nutrition partners across Hyderabad.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold transition-all shadow-md shrink-0 self-start sm:self-auto"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Share Your Experience</span>
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-8 border border-[#E8DAC8] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#C64C2C]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="flex items-center gap-1 text-[11px] text-[#2E7D32] bg-green-50 px-2.5 py-1 rounded-full font-medium">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  </div>

                  <p className="text-sm text-[#49352B] italic leading-relaxed mb-6 font-light">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border border-[#E8DAC8] text-[#C64C2C] font-serif font-bold text-sm flex items-center justify-center">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#49352B]">{t.name}</h4>
                    <p className="text-xs text-[#8D7466]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Share Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E8DAC8] animate-in fade-in zoom-in-95 duration-200 my-8">
            <div className="bg-[#49352B] text-white p-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#EADBC8] uppercase tracking-wider font-semibold">
                  FEEDBACK SUBMISSION
                </span>
                <h3 className="font-serif text-xl font-medium mt-0.5 text-white">
                  Share Your Anagha Experience
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-2xl flex flex-col items-center text-center gap-3 text-green-900">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                  <h4 className="font-serif font-semibold text-lg">Thank You for Your Feedback!</h4>
                  <p className="text-xs text-green-700 leading-relaxed">
                    To preserve transparency and genuine feedback, customer reviews are verified by our team before publishing publicly on the website.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Title / Role
                      </label>
                      <input
                        type="text"
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        placeholder="e.g. Wellness Client / Fitness Coach"
                        className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Rating (1 to 5 Stars)
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setForm({ ...form, rating: star })}
                          className="p-1 focus:outline-none"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= form.rating
                                ? "text-[#C64C2C] fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Your Genuine Review *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.review}
                      onChange={(e) => setForm({ ...form, review: e.target.value })}
                      placeholder="Tell us about the dishes, service, taste, or how the meals fit your routine..."
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2 focus:outline-none focus:border-[#C64C2C]"
                    />
                  </div>

                  <p className="text-[11px] text-[#8D7466] leading-relaxed">
                    Note: Submitted testimonials are held in the admin moderation queue and published following verification.
                  </p>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold transition-all shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit for Verification</span>
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
