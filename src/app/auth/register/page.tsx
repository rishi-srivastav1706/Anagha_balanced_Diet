"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { store } from "@/lib/data/store";
import { User, Lock, Mail, Phone, ArrowRight, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    dietary_preferences: "",
  });
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) return;

    setLoading(true);
    setTimeout(() => {
      store.setCurrentUser({
        id: `user-${Date.now()}`,
        name: form.name,
        email: form.email,
        phone: form.phone,
        role: "customer", // Customers cannot make themselves admins per security requirement
        address: form.address,
        dietary_preferences: form.dietary_preferences,
        created_at: new Date().toISOString(),
      });
      setLoading(false);
      router.push("/dashboard");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-[#C64C2C] flex items-center justify-center text-white font-serif font-bold text-lg">
            A
          </div>
          <div className="text-left">
            <span className="font-serif text-lg tracking-wider font-semibold text-[#49352B] block">
              ANAGHA
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#8D7466] uppercase block">
              BALANCED BITES
            </span>
          </div>
        </Link>
        <h2 className="mt-6 font-serif text-3xl font-medium text-[#49352B]">
          Create Customer Account
        </h2>
        <p className="mt-1 text-xs text-[#8D7466]">
          Track meal subscriptions, enquiries, and customized dietary profiles
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-[#E8DAC8] shadow-sm space-y-6">
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Rishi Verma"
                  className="w-full text-xs pl-10 pr-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 62814 22353"
                  className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Password *
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full text-xs pl-10 pr-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Delivery Address / Locality
              </label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="e.g. Balaji Nagar, KLR Venture, Medchal"
                className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Dietary Preferences (Optional)
              </label>
              <input
                type="text"
                value={form.dietary_preferences}
                onChange={(e) => setForm({ ...form, dietary_preferences: e.target.value })}
                placeholder="e.g. High protein, gluten conscious, diabetic friendly"
                className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{loading ? "Creating Account..." : "Create Account"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-4 border-t border-gray-100 text-center text-xs text-[#8D7466]">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#C64C2C] font-semibold hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
