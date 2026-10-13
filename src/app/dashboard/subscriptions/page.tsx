"use client";

import React, { useState } from "react";
import Link from "next/link";
import { demoSubscriptions, initialSubscriptionPlans } from "@/lib/data/store";
import { CalendarCheck, CheckCircle2, PauseCircle, PlayCircle, Plus, MessageCircle } from "lucide-react";

export default function CustomerSubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState(demoSubscriptions);

  const toggleStatus = (id: string) => {
    setSubscriptions((prev) =>
      prev.map((sub) => {
        if (sub.id === id) {
          const newStatus = sub.status === "Active" ? "Paused" : "Active";
          return { ...sub, status: newStatus as "Active" | "Paused" };
        }
        return sub;
      })
    );
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8DAC8]">
        <div>
          <h1 className="font-serif text-3xl font-medium text-[#49352B]">
            My Meal Subscriptions
          </h1>
          <p className="text-xs text-[#8D7466] mt-1">
            Review your active meal plans, pause delivery when travelling, or upgrade your plan.
          </p>
        </div>

        <Link
          href="/subscriptions"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold shadow-sm self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Explore More Plans</span>
        </Link>
      </div>

      <div className="space-y-6">
        {subscriptions.map((sub) => (
          <div
            key={sub.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DAC8] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center font-bold text-sm">
                  <CalendarCheck className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#49352B]">
                    {sub.plan_title}
                  </h3>
                  <span
                    className={`inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full mt-0.5 ${
                      sub.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {sub.status}
                  </span>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#6E5446] space-y-1">
                <p>Started: {sub.started_at}</p>
                <p>Next Delivery Cycle: {sub.next_billing || "Flexible Weekly Delivery"}</p>
                <p className="text-[#8D7466]">
                  Includes: Wide variety of meal options, personalized nutrition guidance & priority dispatch.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-stretch md:self-auto justify-end">
              <button
                onClick={() => toggleStatus(sub.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
                  sub.status === "Active"
                    ? "border-amber-300 text-amber-800 hover:bg-amber-50"
                    : "border-green-300 text-green-800 hover:bg-green-50"
                }`}
              >
                {sub.status === "Active" ? (
                  <>
                    <PauseCircle className="w-4 h-4" /> Pause Delivery
                  </>
                ) : (
                  <>
                    <PlayCircle className="w-4 h-4" /> Resume Delivery
                  </>
                )}
              </button>

              <a
                href={`https://wa.me/916281422353?text=Hi%20Anagha%20Balanced%20Bites,%20I'd%20like%20to%20modify%20my%20subscription%20(${sub.plan_title})`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#FAF6F0] text-[#49352B] hover:bg-[#F5EBDD] border border-[#E8DAC8] flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                Modify via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
