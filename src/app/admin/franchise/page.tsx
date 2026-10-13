"use client";

import React, { useState, useEffect } from "react";
import { store } from "@/lib/data/store";
import { FranchiseApplication } from "@/lib/types";
import { Building, MapPin, IndianRupee, Briefcase, Phone, Mail } from "lucide-react";

export default function AdminFranchisePage() {
  const [apps, setApps] = useState<FranchiseApplication[]>([]);

  useEffect(() => {
    setApps(store.getFranchiseApplications());
  }, []);

  const handleUpdateStatus = (id: string, status: FranchiseApplication["status"]) => {
    store.updateFranchiseStatus(id, status);
    setApps([...store.getFranchiseApplications()]);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="pb-6 border-b border-[#E8DAC8]">
        <h1 className="font-serif text-3xl font-medium text-[#49352B]">
          Franchise Applications
        </h1>
        <p className="text-xs text-[#8D7466] mt-1">
          Review prospective franchise partners, proposed expansion territories, and investment capabilities.
        </p>
      </div>

      <div className="space-y-4">
        {apps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DAC8] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#49352B]">
                    {app.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {app.email} • {app.phone}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                <div className="bg-[#FAF6F0] p-2.5 rounded-xl">
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">
                    Preferred Territory
                  </span>
                  <span className="font-semibold text-[#49352B]">{app.city}</span>
                </div>
                <div className="bg-[#FAF6F0] p-2.5 rounded-xl">
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">
                    Investment Range
                  </span>
                  <span className="font-semibold text-[#C64C2C]">{app.investment_budget}</span>
                </div>
                <div className="bg-[#FAF6F0] p-2.5 rounded-xl">
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">
                    Prior Experience
                  </span>
                  <span className="font-semibold text-[#49352B] truncate block">
                    {app.experience || "Not specified"}
                  </span>
                </div>
              </div>

              {app.message && (
                <p className="text-xs text-[#6E5446] leading-relaxed pt-1 italic">
                  &ldquo;{app.message}&rdquo;
                </p>
              )}
            </div>

            <div className="flex flex-col items-end gap-3 self-stretch md:self-auto shrink-0">
              <span
                className={`text-[10px] font-semibold px-3 py-1 rounded-full ${
                  app.status === "Approved"
                    ? "bg-green-100 text-green-700"
                    : app.status === "Contacted"
                    ? "bg-blue-100 text-blue-700"
                    : app.status === "In Review"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {app.status}
              </span>

              <select
                value={app.status}
                onChange={(e) =>
                  handleUpdateStatus(app.id, e.target.value as FranchiseApplication["status"])
                }
                className="text-xs border border-gray-200 rounded-xl px-3 py-1.5 bg-white focus:outline-none focus:border-[#C64C2C]"
              >
                <option value="New">New</option>
                <option value="In Review">In Review</option>
                <option value="Contacted">Contacted</option>
                <option value="Approved">Approved</option>
                <option value="Declined">Declined</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
