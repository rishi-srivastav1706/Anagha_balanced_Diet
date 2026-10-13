"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { store, initialSettings } from "@/lib/data/store";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "General Enquiry" as "General Enquiry" | "Subscription" | "Support" | "Franchise" | "Nutrition Collaboration",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return;

    store.addEnquiry({
      name: form.name,
      email: form.email || "contact@client.com",
      phone: form.phone,
      type: form.type,
      message: form.message,
    });

    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      type: "General Enquiry",
      message: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold">
              GET IN TOUCH
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#49352B]">
              We&apos;re Here to Help You Thrive
            </h1>
            <p className="text-sm sm:text-base text-[#6E5446] leading-relaxed">
              Have questions about meal plans, ingredients, deliveries, or corporate catering? Reach out directly to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 bg-[#49352B] text-white rounded-3xl p-8 sm:p-10 shadow-sm space-y-8">
              <div>
                <span className="text-[10px] text-[#EADBC8] uppercase tracking-wider font-semibold">
                  DIRECT CONTACT
                </span>
                <h2 className="font-serif text-2xl font-medium text-white mt-2">
                  Anagha Balanced Bites
                </h2>
                <p className="text-xs text-[#EADBC8]/80 mt-1">
                  Flat 401, Balaji Nagar, Road Number 5, KLR Venture, Medchal
                </p>
              </div>

              <div className="space-y-6 text-xs text-[#FAF6F0]">
                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-0.5">Phone Support</strong>
                    <a href={`tel:${initialSettings.phone}`} className="hover:text-[#EADBC8] text-white/90">
                      {initialSettings.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-0.5">Email Support</strong>
                    <a href={`mailto:${initialSettings.email}`} className="hover:text-[#EADBC8] text-white/90">
                      {initialSettings.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-0.5">Kitchen & Support Hours</strong>
                    <span className="text-white/90">{initialSettings.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="w-4 h-4 text-[#C64C2C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-0.5">Medchal Center</strong>
                    <span className="text-white/90">
                      {initialSettings.address}, {initialSettings.city}, {initialSettings.state}
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Callout */}
              <div className="p-5 bg-white/10 rounded-2xl border border-white/15 space-y-3">
                <div className="flex items-center gap-2 text-white font-medium text-xs">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Prefer Messaging?</span>
                </div>
                <p className="text-[11px] text-[#EADBC8]/80 leading-relaxed">
                  Connect with our guest relations coordinator on WhatsApp for quick menu clarifications and timing updates.
                </p>
                <a
                  href={`https://wa.me/916281422353?text=Hello%20Anagha%20Balanced%20Bites,%20I'd%20like%20to%20connect%20with%20your%20team`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-bold transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8DAC8] shadow-sm">
              <h2 className="font-serif text-2xl font-medium text-[#49352B] mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs text-[#8D7466] mb-8">
                Please fill in the form below and we will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 bg-green-50 border border-green-200 rounded-2xl flex flex-col items-center text-center gap-3 text-green-900">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                  <h4 className="font-serif text-xl font-semibold">Message Delivered!</h4>
                  <p className="text-xs text-green-700 max-w-md">
                    Thank you for contacting Anagha Balanced Bites. Your enquiry has been received and routed to our team.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full bg-[#49352B] text-white text-xs font-semibold hover:bg-black"
                  >
                    Send another message
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
                        placeholder="e.g. Ramesh Kumar"
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
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="ramesh@example.com"
                        className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Enquiry Type *
                      </label>
                      <select
                        value={form.type}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            type: e.target.value as typeof form.type,
                          })
                        }
                        className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C] bg-white"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Subscription">Meal Subscription</option>
                        <option value="Support">Customer Support</option>
                        <option value="Franchise">Franchise Inquiry</option>
                        <option value="Nutrition Collaboration">Nutrition Collaboration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we assist you with our healthy bites or subscriptions?"
                      className="w-full text-xs border border-gray-200 rounded-xl px-3.5 py-2 focus:outline-none focus:border-[#C64C2C]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold transition-all shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
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
