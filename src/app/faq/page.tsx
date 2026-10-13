"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { initialFAQs } from "@/lib/data/store";
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold">
              HELP & GUIDANCE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#49352B]">
              Frequently Asked Questions
            </h1>
            <p className="text-sm text-[#6E5446] max-w-lg mx-auto">
              Everything you need to know about our ingredients, ordering, subscriptions, and franchise partnerships.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4 mb-16">
            {initialFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#E8DAC8] overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-medium text-sm sm:text-base text-[#49352B] hover:text-[#C64C2C]"
                  >
                    <span className="font-serif">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8D7466] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#C64C2C]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#6E5446] leading-relaxed border-t border-gray-100 bg-[#FAF6F0]/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div className="bg-white rounded-3xl p-8 border border-[#E8DAC8] text-center space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center mx-auto">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-medium text-[#49352B]">
              Still have a question?
            </h3>
            <p className="text-xs text-[#8D7466] max-w-md mx-auto">
              Can’t find the answer you’re looking for? Our friendly team is ready to assist you directly.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold shadow-sm"
              >
                Contact Our Team
              </Link>
              <a
                href="https://wa.me/916281422353?text=Hi%20Anagha%20Balanced%20Bites,%20I%20have%20a%20question"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full border border-gray-300 hover:border-gray-400 text-[#49352B] text-xs font-semibold"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
