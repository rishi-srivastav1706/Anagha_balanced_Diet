import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DAC8] shadow-xs">
          <span className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold">
            LEGAL & PRIVACY
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#49352B] mt-2 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#8D7466] mb-8">
            Last Updated: April 2026
          </p>

          <div className="space-y-6 text-xs sm:text-sm text-[#6E5446] leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-serif text-lg font-semibold text-[#49352B]">
                1. Information We Collect
              </h2>
              <p>
                At Anagha Balanced Bites, we value the trust you place in us. When you browse our website, submit an enquiry, register an account, or order subscriptions, we collect relevant information such as your name, phone number, email address, dietary preferences, and delivery location.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-semibold text-[#49352B]">
                2. How We Use Your Information
              </h2>
              <p>
                We use your details strictly to coordinate meal preparation, schedule timely daily deliveries, respond to franchise/collaboration requests, provide customer support, and inform you of new seasonal offerings (with your consent).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-semibold text-[#49352B]">
                3. Data Security & Storage
              </h2>
              <p>
                Your data is stored securely using Supabase database infrastructure adhering to modern encryption standards and Row Level Security. We never sell, rent, or lease your personal information to third-party marketing companies.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-semibold text-[#49352B]">
                4. Cookies & Web Analytics
              </h2>
              <p>
                We employ standard, privacy-conscious session cookies to keep you logged into your dashboard, remember your cart/preferences, and analyze aggregate site usage.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-semibold text-[#49352B]">
                5. Contact Regarding Privacy
              </h2>
              <p>
                For any questions or data removal requests, please write to us at rishisrivastav778@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
