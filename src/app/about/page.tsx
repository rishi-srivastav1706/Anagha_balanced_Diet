import React from "react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ArrowRight, CheckCircle2, Heart, Award, Shield, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#F5EBDD] to-[#FAF6F0] border-b border-[#E8DAC8]/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold">
              ABOUT ANAGHA BALANCED BITES
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium text-[#49352B] leading-tight">
              Simple Food. Mindful Living. Real Balance.
            </h1>
            <p className="text-base sm:text-lg text-[#6E5446] leading-relaxed max-w-2xl mx-auto">
              We started with a simple belief: clean, nutritious eating shouldn’t feel like a compromise or a chore. It should be vibrant, flavourful, and deeply satisfying.
            </p>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                    alt="Founder Anagha Balanced Bites"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-[#E8DAC8]">
                    <p className="font-serif font-semibold text-sm text-[#49352B]">
                      Founded with a Passion for Health
                    </p>
                    <p className="text-xs text-[#8D7466]">
                      Hyderabad, Telangana • Serving Balanced Meals Daily
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold">
                  OUR PHILOSOPHY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#49352B] font-medium leading-tight">
                  Fueling Your Life with Nourishing Everyday Choices
                </h2>
                <p className="text-sm sm:text-base text-[#6E5446] leading-relaxed">
                  In today&apos;s fast-paced world, maintaining energy and cognitive clarity depends directly on what we put on our plate. Many commercial foods are overloaded with refined oils, hidden sugars, and empty carbohydrates that result in energy crashes.
                </p>
                <p className="text-sm sm:text-base text-[#6E5446] leading-relaxed">
                  At Anagha Balanced Bites, we craft everyday meal options that focus on unprocessed whole ingredients, high-quality proteins, healthy fats, and fiber-rich slow carbs. Our recipes are created to sustain your vitality without sacrificing taste.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-white rounded-2xl border border-[#E8DAC8] shadow-2xs">
                    <div className="w-8 h-8 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center mb-2">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif font-semibold text-sm text-[#49352B] mb-1">
                      Pure & Honest
                    </h3>
                    <p className="text-xs text-[#8D7466]">
                      No hidden preservatives, refined artificial sugars, or ultra-processed shortcuts.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-[#E8DAC8] shadow-2xs">
                    <div className="w-8 h-8 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center mb-2">
                      <Heart className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif font-semibold text-sm text-[#49352B] mb-1">
                      Nutrient Calibrated
                    </h3>
                    <p className="text-xs text-[#8D7466]">
                      Thoughtfully proportioned macro balance for sustained energy throughout your day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Values */}
        <section className="py-16 bg-[#F5EBDD]/60 border-t border-[#E8DAC8]/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-[#C64C2C] font-semibold">
                OUR COMMITMENT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#49352B] font-medium mt-1">
                The Standards We Uphold
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-7 rounded-2xl border border-[#E8DAC8] shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#49352B] mb-2">
                  Quality Ingredients
                </h3>
                <p className="text-xs sm:text-sm text-[#6E5446] leading-relaxed">
                  We hand-pick fresh vegetables, premium whole grains, lean proteins, and cold-pressed cooking oils from trusted regional growers.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#E8DAC8] shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#49352B] mb-2">
                  Hygienic Preparation
                </h3>
                <p className="text-xs sm:text-sm text-[#6E5446] leading-relaxed">
                  Our kitchens adhere to strict cleanliness guidelines, standard operating protocols, and temperature-controlled food handling.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#E8DAC8] shadow-xs">
                <div className="w-10 h-10 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#49352B] mb-2">
                  Transparent Nutrition
                </h3>
                <p className="text-xs sm:text-sm text-[#6E5446] leading-relaxed">
                  We believe in clarity. Our macro and ingredient breakdowns allow customers to make educated decisions for their lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-16 bg-[#49352B] text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white">
              Ready to Experience Balanced Eating?
            </h2>
            <p className="text-sm text-[#EADBC8]/80 max-w-xl mx-auto">
              Explore our current menu or speak with our team to start your personalized wellness meal routine.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/offerings"
                className="px-7 py-3 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-sm font-semibold transition-all shadow-md"
              >
                Explore Offerings
              </Link>
              <Link
                href="/subscriptions"
                className="px-7 py-3 rounded-full border border-white/40 hover:bg-white hover:text-[#49352B] text-white text-sm font-semibold transition-all"
              >
                View Subscription Plans
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
