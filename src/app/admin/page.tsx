"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { store } from "@/lib/data/store";
import { Enquiry, FranchiseApplication } from "@/lib/types";
import {
  Users,
  MessageSquare,
  CalendarCheck,
  Building,
  ArrowRight,
  Plus,
  Clock,
  Sparkles,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

export default function AdminOverviewPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [franchiseApps, setFranchiseApps] = useState<FranchiseApplication[]>([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  useEffect(() => {
    setEnquiries(store.getEnquiries());
    setFranchiseApps(store.getFranchiseApplications());
  }, []);

  const handleUpdateStatus = (id: string, status: Enquiry["status"]) => {
    store.updateEnquiryStatus(id, status);
    setEnquiries([...store.getEnquiries()]);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Header */}
      <div className="pb-6 border-b border-[#E8DAC8]">
        <h1 className="font-serif text-3xl font-medium text-[#49352B]">
          Admin Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-[#8D7466] mt-1">
          Manage your business, customers, offerings, and customer enquiries from here.
        </p>
      </div>

      {/* 4 Stat Cards matching Mockup #5 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-2xl p-5 border border-[#E8DAC8] shadow-xs">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-medium">Total Customers</span>
            <Users className="w-4 h-4 text-[#8D7466]" />
          </div>
          <p className="font-serif text-3xl font-semibold text-[#49352B]">124</p>
          <span className="text-[10px] text-green-700 bg-green-50 px-2 py-0.5 rounded-full inline-block mt-2">
            +12 this month
          </span>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8DAC8] shadow-xs">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-medium">New Enquiries</span>
            <MessageSquare className="w-4 h-4 text-[#C64C2C]" />
          </div>
          <p className="font-serif text-3xl font-semibold text-[#49352B]">
            {enquiries.length}
          </p>
          <span className="text-[10px] text-[#C64C2C] bg-[#C64C2C]/10 px-2 py-0.5 rounded-full inline-block mt-2">
            Active inquiries
          </span>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8DAC8] shadow-xs">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-medium">Active Subscriptions</span>
            <CalendarCheck className="w-4 h-4 text-[#2E7D32]" />
          </div>
          <p className="font-serif text-3xl font-semibold text-[#49352B]">32</p>
          <span className="text-[10px] text-green-700 bg-green-50 px-2 py-0.5 rounded-full inline-block mt-2">
            Consistent recurring
          </span>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#E8DAC8] shadow-xs">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-xs font-medium">Franchise Applications</span>
            <Building className="w-4 h-4 text-purple-600" />
          </div>
          <p className="font-serif text-3xl font-semibold text-[#49352B]">
            {franchiseApps.length}
          </p>
          <span className="text-[10px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full inline-block mt-2">
            In review
          </span>
        </div>
      </div>

      {/* Middle Row: Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-[#E8DAC8] shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-base font-semibold text-[#49352B]">
              Recent Activity
            </h3>
            <span className="text-[11px] text-[#8D7466]">Live Feed</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF6F0] border border-gray-100">
              <div className="w-2 h-2 rounded-full bg-[#C64C2C] mt-1.5 shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-[#49352B]">New customer enquiry received</p>
                <p className="text-[11px] text-[#8D7466]">Priya Sharma regarding custom meal bowl delivery</p>
              </div>
              <span className="text-[10px] text-gray-400">2 hrs ago</span>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF6F0] border border-gray-100">
              <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-[#49352B]">Franchise application submitted</p>
                <p className="text-[11px] text-[#8D7466]">Karan Singhal for Bengaluru territory</p>
              </div>
              <span className="text-[10px] text-gray-400">1 day ago</span>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF6F0] border border-gray-100">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0" />
              <div className="flex-1">
                <p className="font-medium text-[#49352B]">Nutrition collaboration proposed</p>
                <p className="text-[11px] text-[#8D7466]">Dr. Sneha Iyer (Clinical Dietetics)</p>
              </div>
              <span className="text-[10px] text-gray-400">2 days ago</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#E8DAC8] shadow-xs space-y-4">
          <h3 className="font-serif text-base font-semibold text-[#49352B]">
            Quick Actions
          </h3>

          <div className="grid grid-cols-1 gap-2.5">
            <Link
              href="/admin/offerings"
              className="flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-[#C64C2C] text-xs font-semibold text-[#49352B] hover:text-[#C64C2C] transition-colors"
            >
              <span>+ Add New Menu Offering</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/admin/subscriptions"
              className="flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-[#C64C2C] text-xs font-semibold text-[#49352B] hover:text-[#C64C2C] transition-colors"
            >
              <span>Edit Subscription Plans</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/admin/testimonials"
              className="flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-[#C64C2C] text-xs font-semibold text-[#49352B] hover:text-[#C64C2C] transition-colors"
            >
              <span>Approve Pending Testimonials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/admin/content"
              className="flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:border-[#C64C2C] text-xs font-semibold text-[#49352B] hover:text-[#C64C2C] transition-colors"
            >
              <span>Update Homepage & Content</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Recent Enquiries Table matching Mockup #5 */}
      <div className="bg-white rounded-2xl p-6 border border-[#E8DAC8] shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-semibold text-[#49352B]">
              Recent Enquiries
            </h3>
            <p className="text-xs text-[#8D7466]">
              Review inquiries and update their status.
            </p>
          </div>
          <Link
            href="/admin/enquiries"
            className="text-xs font-semibold text-[#C64C2C] hover:underline"
          >
            View All ({enquiries.length})
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-200 text-gray-400 uppercase text-[10px] tracking-wider">
                <th className="py-3 px-3">Name</th>
                <th className="py-3 px-3">Type</th>
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {enquiries.slice(0, 5).map((enq) => (
                <tr key={enq.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-3.5 px-3">
                    <p className="font-semibold text-[#49352B]">{enq.name}</p>
                    <p className="text-[11px] text-gray-400">{enq.phone}</p>
                  </td>
                  <td className="py-3.5 px-3 text-gray-700">{enq.type}</td>
                  <td className="py-3.5 px-3 text-gray-500">{enq.created_at}</td>
                  <td className="py-3.5 px-3">
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
                  <td className="py-3.5 px-3 text-right space-x-1.5">
                    <select
                      value={enq.status}
                      onChange={(e) =>
                        handleUpdateStatus(enq.id, e.target.value as Enquiry["status"])
                      }
                      className="text-[11px] border border-gray-200 rounded-lg px-2 py-1 bg-white focus:outline-none focus:border-[#C64C2C]"
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
