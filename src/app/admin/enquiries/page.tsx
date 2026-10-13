"use client";

import React, { useState, useEffect } from "react";
import { store } from "@/lib/data/store";
import { Enquiry } from "@/lib/types";
import { MessageSquare, Phone, Mail, CheckCircle, Clock } from "lucide-react";

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    setEnquiries(store.getEnquiries());
  }, []);

  const handleUpdateStatus = (id: string, status: Enquiry["status"]) => {
    store.updateEnquiryStatus(id, status);
    setEnquiries([...store.getEnquiries()]);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="pb-6 border-b border-[#E8DAC8]">
        <h1 className="font-serif text-3xl font-medium text-[#49352B]">
          Customer & Business Enquiries
        </h1>
        <p className="text-xs text-[#8D7466] mt-1">
          Review customer inquiries, contact submissions, and assign progress statuses.
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-[#E8DAC8] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-200 bg-[#FAF6F0] text-gray-500 uppercase text-[10px] tracking-wider">
                <th className="py-3.5 px-4">Contact Person</th>
                <th className="py-3.5 px-4">Type</th>
                <th className="py-3.5 px-4">Message</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Update Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {enquiries.map((enq) => (
                <tr key={enq.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-4 px-4">
                    <p className="font-semibold text-[#49352B]">{enq.name}</p>
                    <p className="text-[11px] text-gray-500">{enq.phone}</p>
                    <p className="text-[10px] text-gray-400">{enq.email}</p>
                  </td>
                  <td className="py-4 px-4 text-[#C64C2C] font-semibold text-[11px]">
                    {enq.type}
                  </td>
                  <td className="py-4 px-4 text-gray-700 max-w-sm leading-relaxed">
                    {enq.message}
                  </td>
                  <td className="py-4 px-4 text-gray-400 text-[11px]">{enq.created_at}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                        enq.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : enq.status === "In Progress"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {enq.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <select
                      value={enq.status}
                      onChange={(e) =>
                        handleUpdateStatus(enq.id, e.target.value as Enquiry["status"])
                      }
                      className="text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 bg-white focus:outline-none focus:border-[#C64C2C]"
                    >
                      <option value="New">New</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
