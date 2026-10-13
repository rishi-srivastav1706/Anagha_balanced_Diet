"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { store } from "@/lib/data/store";
import { Offering, OfferingCategory } from "@/lib/types";
import { ArrowRight, Flame, Dumbbell, Sparkles, X, CheckCircle, Send, MessageCircle } from "lucide-react";

export default function OfferingsPage() {
  const [offerings, setOfferings] = useState<Offering[]>([]);
  const [activeCategory, setActiveCategory] = useState<OfferingCategory>("All");
  const [selectedItem, setSelectedItem] = useState<Offering | null>(null);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setOfferings(store.getOfferings());
  }, []);

  const categories: OfferingCategory[] = ["All", "Meals", "Snacks", "Beverages", "Others"];

  const filteredOfferings =
    activeCategory === "All"
      ? offerings
      : offerings.filter((item) => item.category === activeCategory);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryForm.name || !enquiryForm.phone) return;

    store.addEnquiry({
      name: enquiryForm.name,
      email: enquiryForm.email || "no-email@customer.com",
      phone: enquiryForm.phone,
      type: "General Enquiry",
      message: `Enquiry about offering: ${selectedItem?.title}. Note: ${enquiryForm.message}`,
    });

    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setSelectedItem(null);
      setEnquiryForm({ name: "", email: "", phone: "", message: "" });
    }, 2500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Title Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold">
                OUR OFFERINGS
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#49352B]">
                Nutritious Options for Every Lifestyle
              </h1>
              <p className="text-sm sm:text-base text-[#6E5446] leading-relaxed">
                From wholesome meals to healthy snacks, explore our carefully crafted offerings designed to keep you energized, focused and balanced.
              </p>
            </div>

            {/* Decorative mini banner (Mockup matching) */}
            <div className="hidden lg:flex items-center gap-4 bg-[#F5EBDD] p-3 rounded-2xl border border-[#E8DAC8]">
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80"
                  alt="Healthy Bowl preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pr-4">
                <p className="font-serif text-xs font-semibold text-[#49352B]">Good food</p>
                <p className="font-serif italic text-xs text-[#C64C2C]">Good mood</p>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E8DAC8]">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-[#C64C2C] text-white shadow-sm"
                      : "bg-white text-[#49352B] border border-[#E8DAC8] hover:border-[#C64C2C]/50 hover:bg-[#FAF6F0]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOfferings.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8DAC8] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-[#FAF6F0]">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-xs ${
                        item.status === "Available"
                          ? "bg-white/95 text-[#2E7D32]"
                          : "bg-[#49352B]/90 text-[#F5EBDD]"
                      }`}
                    >
                      {item.status}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-[11px] text-[#8D7466] uppercase tracking-wider mb-2">
                      <span>{item.category}</span>
                      {item.calories && (
                        <span className="flex items-center gap-1 text-[#C64C2C] font-medium lowercase">
                          <Flame className="w-3 h-3" />
                          {item.calories}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-xl font-medium text-[#49352B] mb-2 group-hover:text-[#C64C2C] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#6E5446] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.price && (
                      <div className="text-xs font-medium text-[#49352B] bg-[#FAF6F0] px-3 py-1.5 rounded-lg inline-block mb-2">
                        {item.price}
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C64C2C] hover:text-[#AF3E20] group-hover:underline"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/916281422353?text=Hi%20Anagha%20Balanced%20Bites,%20I'd%20like%20to%20enquire%20about%20${encodeURIComponent(
                      item.title
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-gray-500 hover:text-[#25D366] flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredOfferings.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#E8DAC8]">
              <p className="font-serif text-lg text-[#49352B]">No items found in this category.</p>
              <p className="text-xs text-[#8D7466] mt-1">Please check back soon or explore other categories.</p>
            </div>
          )}
        </div>
      </main>

      {/* DETAIL & ENQUIRY MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#E8DAC8] animate-in fade-in zoom-in-95 duration-200 my-8">
            <div className="relative h-60 bg-gray-100">
              <img
                src={selectedItem.image_url}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-white/95 text-[#2E7D32] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {selectedItem.status}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#C64C2C] font-semibold">
                  {selectedItem.category}
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#49352B] mt-1">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E5446] leading-relaxed mt-2">
                  {selectedItem.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-4">
                  {selectedItem.calories && (
                    <div className="flex items-center gap-1.5 bg-[#FAF6F0] px-3 py-1.5 rounded-full text-xs text-[#49352B] border border-[#E8DAC8]">
                      <Flame className="w-3.5 h-3.5 text-[#C64C2C]" />
                      <span>{selectedItem.calories}</span>
                    </div>
                  )}
                  {selectedItem.protein && (
                    <div className="flex items-center gap-1.5 bg-[#FAF6F0] px-3 py-1.5 rounded-full text-xs text-[#49352B] border border-[#E8DAC8]">
                      <Dumbbell className="w-3.5 h-3.5 text-[#C64C2C]" />
                      <span>{selectedItem.protein} Protein</span>
                    </div>
                  )}
                  <div className="bg-[#FAF6F0] px-3 py-1.5 rounded-full text-xs text-[#49352B] border border-[#E8DAC8]">
                    {selectedItem.price || "Enquire for Pricing"}
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-serif text-base font-semibold text-[#49352B] mb-2">
                  Enquire About This Offering
                </h4>
                <p className="text-xs text-[#8D7466] mb-4">
                  Send your enquiry and our wellness coordinators will respond with customization options and schedule.
                </p>

                {enquirySuccess ? (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3 text-green-800 text-xs">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    <span>Thank you! Your enquiry has been received. Our team will contact you shortly.</span>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-gray-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={enquiryForm.name}
                          onChange={(e) =>
                            setEnquiryForm({ ...enquiryForm, name: e.target.value })
                          }
                          placeholder="e.g. Rahul Sharma"
                          className="w-full text-xs border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={enquiryForm.phone}
                          onChange={(e) =>
                            setEnquiryForm({ ...enquiryForm, phone: e.target.value })
                          }
                          placeholder="+91 62814 22353"
                          className="w-full text-xs border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-gray-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={enquiryForm.email}
                        onChange={(e) =>
                          setEnquiryForm({ ...enquiryForm, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full text-xs border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-gray-700 mb-1">
                        Any Specific Preferences or Questions?
                      </label>
                      <textarea
                        rows={2}
                        value={enquiryForm.message}
                        onChange={(e) =>
                          setEnquiryForm({ ...enquiryForm, message: e.target.value })
                        }
                        placeholder="e.g., Interested in daily lunch delivery in Medchal..."
                        className="w-full text-xs border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-[#C64C2C]"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedItem(null)}
                        className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold transition-all shadow-sm"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Enquiry</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
