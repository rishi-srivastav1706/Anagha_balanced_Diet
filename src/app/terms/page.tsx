import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DAC8] shadow-xs">
          <span className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold">
            TERMS OF SERVICE
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#49352B] mt-2 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xs text-[#8D7466] mb-8">
            Last Updated: April 2026
          </p>

          <div className="space-y-6 text-xs sm:text-sm text-[#6E5446] leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-serif text-lg font-semibold text-[#49352B]">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the services, website, or subscription plans provided by Anagha Balanced Bites, you agree to be bound by these Terms and Conditions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-semibold text-[#49352B]">
                2. Nature of Offerings & Nutritional Disclaimer
              </h2>
              <p>
                All culinary preparations, nutritional figures, macro estimates, and calorie approximations are provided for general health guidance only. Anagha Balanced Bites does not provide medical treatment, diagnosis, or clinical diets. Customers with severe food allergies must inform us prior to ordering.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-semibold text-[#49352B]">
                3. Subscriptions & Deliveries
              </h2>
              <p>
                Subscription schedules, delivery windows, and pauses are managed in coordination with our support desk. Pauses must be notified at least 24 hours prior to the scheduled delivery date.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-semibold text-[#49352B]">
                4. Franchise & Collaborations
              </h2>
              <p>
                Submitting a franchise expression of interest or collaboration proposal does not constitute a legally binding franchise agreement or joint venture until formal contracts are reviewed and executed.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
