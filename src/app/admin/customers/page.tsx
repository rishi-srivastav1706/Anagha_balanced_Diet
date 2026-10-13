"use client";

import React, { useState } from "react";
import { demoCustomerUser } from "@/lib/data/store";
import { Users, Mail, Phone, MapPin, Calendar, Shield } from "lucide-react";

export default function AdminCustomersPage() {
  const [customers] = useState([
    demoCustomerUser,
    {
      id: "cust-2",
      name: "Sneha Reddy",
      email: "sneha.reddy@example.com",
      phone: "+91 98450 11223",
      role: "customer" as const,
      address: "Banjara Hills, Road 12, Hyderabad",
      dietary_preferences: "Lactose free, low sodium",
      created_at: "2026-02-10",
    },
    {
      id: "cust-3",
      name: "Aditya Nair",
      email: "aditya.nair@example.com",
      phone: "+91 98765 99887",
      role: "customer" as const,
      address: "Madhapur Tech Zone, Hyderabad",
      dietary_preferences: "Keto friendly, extra avocado",
      created_at: "2026-03-01",
    },
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="pb-6 border-b border-[#E8DAC8]">
        <h1 className="font-serif text-3xl font-medium text-[#49352B]">
          Customer Accounts
        </h1>
        <p className="text-xs text-[#8D7466] mt-1">
          Registered customer accounts, contact numbers, and verified delivery locations.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-[#E8DAC8] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-200 bg-[#FAF6F0] text-gray-500 uppercase text-[10px] tracking-wider">
                <th className="py-3.5 px-4">Customer</th>
                <th className="py-3.5 px-4">Contact</th>
                <th className="py-3.5 px-4">Location</th>
                <th className="py-3.5 px-4">Dietary Note</th>
                <th className="py-3.5 px-4">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customers.map((c) => (
                <tr key={c.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center font-bold text-xs uppercase">
                        {c.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-[#49352B]">{c.name}</p>
                        <p className="text-[11px] text-gray-400">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{c.phone || "—"}</td>
                  <td className="py-4 px-4 text-gray-600 max-w-xs truncate">
                    {c.address || "Hyderabad"}
                  </td>
                  <td className="py-4 px-4 text-[#C64C2C] font-medium text-[11px]">
                    {c.dietary_preferences || "General Balanced"}
                  </td>
                  <td className="py-4 px-4 text-gray-400 text-[11px]">{c.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
