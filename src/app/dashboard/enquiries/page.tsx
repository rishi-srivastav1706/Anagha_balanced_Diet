"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { store } from "@/lib/data/store";
import { Enquiry } from "@/lib/types";
import { HelpCircle, MessageSquarePlus, Clock, CheckCircle2 } from "lucide-react";

export default function CustomerEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    setEnquiries(store.getEnquiries());
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8DAC8]">
        <div>
          <h1 className="font-serif text-3xl font-medium text-[#49352B]">
            Support & Enquiries
          </h1>
          <p className="text-xs text-[#8D7466] mt-1">
            Track the status of your queries, customization requests, and partner applications.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold shadow-sm self-start sm:self-auto"
        >
          <MessageSquarePlus className="w-4 h-4" />
          <span>New Enquiry</span>
        </Link>
      </div>

      <div className="space-y-4">
        {enquiries.map((enq) => (
          <div
            key={enq.id}
            className="bg-white rounded-3xl p-6 border border-[#E8DAC8] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-[#C64C2C] font-semibold">
                  {enq.type}
                </span>
                <span className="text-[10px] text-gray-400">• {enq.created_at}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#49352B] font-medium leading-relaxed">
                {enq.message}
              </p>
            </div>

            <div className="shrink-0">
              <span
                className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
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
          </div>
        ))}

        {enquiries.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center text-[#8D7466] border border-[#E8DAC8]">
            No enquiries recorded yet.
          </div>
        )}
      </div>
    </div>
  );
}
