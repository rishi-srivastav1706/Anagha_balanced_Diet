"use client";

import React, { useState, useEffect } from "react";
import { store } from "@/lib/data/store";
import { CollaborationRequest } from "@/lib/types";
import { HeartHandshake, Phone, Mail, Globe } from "lucide-react";

export default function AdminCollaborationsPage() {
  const [collabs, setCollabs] = useState<CollaborationRequest[]>([]);

  useEffect(() => {
    setCollabs(store.getCollaborations());
  }, []);

  const handleUpdateStatus = (id: string, status: CollaborationRequest["status"]) => {
    store.updateCollaborationStatus(id, status);
    setCollabs([...store.getCollaborations()]);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="pb-6 border-b border-[#E8DAC8]">
        <h1 className="font-serif text-3xl font-medium text-[#49352B]">
          Nutrition & Professional Collaborations
        </h1>
        <p className="text-xs text-[#8D7466] mt-1">
          Review partnership proposals from dieticians, nutritionists, trainers, and healthcare professionals.
        </p>
      </div>

      <div className="space-y-4">
        {collabs.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DAC8] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#49352B]">
                    {c.name}
                  </h3>
                  <p className="text-xs text-[#C64C2C] font-medium">
                    {c.profession} • {c.email} • {c.phone}
                  </p>
                </div>
              </div>

              {c.social_or_website && (
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-gray-400" />
                  <span>{c.social_or_website}</span>
                </p>
              )}

              <p className="text-xs text-[#6E5446] leading-relaxed pt-1 bg-[#FAF6F0] p-3 rounded-xl border border-gray-100">
                {c.proposal}
              </p>
            </div>

            <div className="flex flex-col items-end gap-3 self-stretch md:self-auto shrink-0">
              <span
                className={`text-[10px] font-semibold px-3 py-1 rounded-full ${
                  c.status === "Contacted"
                    ? "bg-green-100 text-green-700"
                    : c.status === "In Review"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {c.status}
              </span>

              <select
                value={c.status}
                onChange={(e) =>
                  handleUpdateStatus(c.id, e.target.value as CollaborationRequest["status"])
                }
                className="text-xs border border-gray-200 rounded-xl px-3 py-1.5 bg-white focus:outline-none focus:border-[#C64C2C]"
              >
                <option value="New">New</option>
                <option value="In Review">In Review</option>
                <option value="Contacted">Contacted</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
