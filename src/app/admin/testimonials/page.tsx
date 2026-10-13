"use client";

import React, { useState, useEffect } from "react";
import { store } from "@/lib/data/store";
import { Testimonial } from "@/lib/types";
import { Star, CheckCircle, XCircle, ShieldCheck } from "lucide-react";

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonials(store.getTestimonials());
  }, []);

  const handleToggleApproval = (id: string, currentApproval: boolean) => {
    store.updateTestimonialApproval(id, !currentApproval);
    setTestimonials([...store.getTestimonials()]);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="pb-6 border-b border-[#E8DAC8]">
        <h1 className="font-serif text-3xl font-medium text-[#49352B]">
          Moderate Testimonials
        </h1>
        <p className="text-xs text-[#8D7466] mt-1">
          Approve or reject customer reviews before they appear publicly on the website.
        </p>
      </div>

      <div className="space-y-4">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DAC8] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-[#C64C2C]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span
                  className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                    t.is_approved
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {t.is_approved ? "Published on Website" : "Pending Verification"}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#49352B] italic leading-relaxed">
                &ldquo;{t.review}&rdquo;
              </p>

              <p className="text-xs text-[#8D7466]">
                <strong className="text-[#49352B]">{t.name}</strong> • {t.role} • {t.created_at}
              </p>
            </div>

            <div className="flex items-center gap-3 self-stretch md:self-auto justify-end shrink-0">
              {t.is_approved ? (
                <button
                  onClick={() => handleToggleApproval(t.id, t.is_approved)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold border border-red-200 text-red-600 hover:bg-red-50 transition-colors flex items-center gap-1.5"
                >
                  <XCircle className="w-4 h-4" />
                  <span>Unpublish</span>
                </button>
              ) : (
                <button
                  onClick={() => handleToggleApproval(t.id, t.is_approved)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-green-600 hover:bg-green-700 text-white transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Approve & Publish</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
