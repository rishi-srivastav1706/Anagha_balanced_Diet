"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { store, demoSubscriptions } from "@/lib/data/store";
import { UserProfile, Enquiry } from "@/lib/types";
import {
  CalendarCheck,
  ShoppingBag,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Headphones,
  CheckCircle,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function CustomerDashboardOverview() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    setUser(store.getCurrentUser());
    setEnquiries(store.getEnquiries().slice(0, 3));
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Greeting & User Avatar */}
      <div className="flex items-center justify-between pb-6 border-b border-[#E8DAC8]">
        <div>
          <h1 className="font-serif text-3xl font-medium text-[#49352B]">
            Good morning, {user?.name || "Rishu"}!
          </h1>
          <p className="text-xs sm:text-sm text-[#8D7466] mt-1">
            Here&apos;s what&apos;s happening with your account.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#C64C2C] text-white flex items-center justify-center font-bold text-base shadow-sm">
            {user?.name?.[0] || "R"}
          </div>
        </div>
      </div>

      {/* 3 Overview Stat Cards matching Mockup #4 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-6 border border-[#E8DAC8] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-[#8D7466] font-medium">Active Subscriptions</span>
              <div className="w-8 h-8 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center">
                <CalendarCheck className="w-4 h-4" />
              </div>
            </div>
            <p className="font-serif text-4xl font-semibold text-[#49352B]">
              {demoSubscriptions.length}
            </p>
          </div>
          <Link
            href="/dashboard/subscriptions"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#C64C2C] hover:underline pt-4 border-t border-gray-100"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-[#E8DAC8] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-[#8D7466] font-medium">Total Orders</span>
              <div className="w-8 h-8 rounded-full bg-[#FAF6F0] text-[#49352B] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
            </div>
            <p className="font-serif text-4xl font-semibold text-[#49352B]">0</p>
          </div>
          <Link
            href="/dashboard/orders"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#C64C2C] hover:underline pt-4 border-t border-gray-100"
          >
            <span>View Orders</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-[#E8DAC8] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-[#8D7466] font-medium">Your Enquiries</span>
              <div className="w-8 h-8 rounded-full bg-[#FAF6F0] text-[#49352B] flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </div>
            </div>
            <p className="font-serif text-4xl font-semibold text-[#49352B]">
              {enquiries.length}
            </p>
          </div>
          <Link
            href="/dashboard/enquiries"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#C64C2C] hover:underline pt-4 border-t border-gray-100"
          >
            <span>View Enquiries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Grid: Subscriptions + Enquiries + Support */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (8 cols): Recent Subscriptions & Enquiries */}
        <div className="lg:col-span-8 space-y-8">
          {/* Recent Subscriptions Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DAC8] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-medium text-[#49352B]">
                Recent Subscriptions
              </h2>
              <Link
                href="/dashboard/subscriptions"
                className="text-xs text-[#C64C2C] font-semibold hover:underline"
              >
                Manage all
              </Link>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E8DAC8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white border border-[#E8DAC8] flex items-center justify-center text-[#C64C2C]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-base font-semibold text-[#49352B]">
                      Wellness Plan
                    </h3>
                    <span className="text-[10px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-[#8D7466] mt-0.5">
                    Monthly • Next renewal: Configurable on schedule
                  </p>
                </div>
              </div>

              <Link
                href="/dashboard/subscriptions"
                className="text-xs font-semibold text-[#C64C2C] hover:underline inline-flex items-center gap-1"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Recent Enquiries Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DAC8] shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-medium text-[#49352B]">
                Recent Enquiries
              </h2>
              <Link
                href="/dashboard/enquiries"
                className="text-xs text-[#C64C2C] font-semibold hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="space-y-3">
              {enquiries.map((enq) => (
                <div
                  key={enq.id}
                  className="p-4 rounded-2xl bg-white border border-gray-100 hover:border-[#E8DAC8] transition-colors flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-[#49352B]">{enq.type}</p>
                    <p className="text-[11px] text-[#8D7466] line-clamp-1">{enq.message}</p>
                    <span className="text-[10px] text-gray-400 block">{enq.created_at}</span>
                  </div>

                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                      enq.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : enq.status === "In Progress"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {enq.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (4 cols): Need Help Card matching Mockup #4 */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DAC8] shadow-xs text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center mx-auto">
              <Headphones className="w-7 h-7" />
            </div>

            <h3 className="font-serif text-xl font-medium text-[#49352B]">
              Need Help?
            </h3>
            <p className="text-xs text-[#8D7466] leading-relaxed">
              Our team is here to assist you with delivery changes, meal customizations, or paused schedules.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-block py-3 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold shadow-md transition-all text-center"
              >
                Contact Support
              </Link>
            </div>

            <div className="pt-3 border-t border-gray-100">
              <a
                href="https://wa.me/916281422353?text=Hi%20Anagha%20Balanced%20Bites,%20I'm%20a%20customer%20needing%20support"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-semibold hover:underline"
              >
                <span>Live WhatsApp Support</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Profile Summary */}
          <div className="bg-[#FAF6F0] rounded-3xl p-6 border border-[#E8DAC8] space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#49352B]">
              Dietary Profile
            </h4>
            <p className="text-xs text-[#6E5446]">
              {user?.dietary_preferences || "No specific dietary restrictions listed."}
            </p>
            <Link
              href="/dashboard/profile"
              className="text-xs text-[#C64C2C] font-semibold hover:underline inline-block pt-1"
            >
              Update preferences →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
