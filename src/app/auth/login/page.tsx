"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { store, demoCustomerUser, demoAdminUser } from "@/lib/data/store";
import { User, ShieldCheck, Lock, Mail, ArrowRight, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (email.toLowerCase().includes("admin")) {
        store.setCurrentUser(demoAdminUser);
        router.push("/admin");
      } else {
        store.setCurrentUser({
          ...demoCustomerUser,
          email: email || demoCustomerUser.email,
        });
        router.push("/dashboard");
      }
      setLoading(false);
    }, 600);
  };

  const handleQuickLogin = (role: "customer" | "admin") => {
    if (role === "admin") {
      store.setCurrentUser(demoAdminUser);
      router.push("/admin");
    } else {
      store.setCurrentUser(demoCustomerUser);
      router.push("/dashboard");
    }
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
          Welcome Back
        </h2>
        <p className="mt-1 text-xs text-[#8D7466]">
          Sign in to access your customer dashboard or admin management
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-[#E8DAC8] shadow-sm space-y-6">
          {/* Quick Demo Logins banner */}
          <div className="p-3 bg-[#FAF6F0] rounded-2xl border border-[#E8DAC8] text-xs">
            <p className="font-semibold text-[#49352B] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C64C2C]" />
              Quick One-Click Demo Access:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleQuickLogin("customer")}
                className="py-2 px-3 rounded-xl bg-white border border-[#E8DAC8] hover:border-[#C64C2C] text-[#49352B] hover:text-[#C64C2C] text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <User className="w-3 h-3 text-[#C64C2C]" />
                Customer (Rishi)
              </button>
              <button
                type="button"
                onClick={() => handleQuickLogin("admin")}
                className="py-2 px-3 rounded-xl bg-[#49352B] hover:bg-black text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <ShieldCheck className="w-3 h-3 text-[#C64C2C]" />
                Admin (Owner)
              </button>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rishi@example.com or admin@..."
                  className="w-full text-xs pl-10 pr-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-medium text-gray-700">
                  Password
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-[11px] text-[#C64C2C] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full text-xs pl-10 pr-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{loading ? "Signing in..." : "Sign In"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="pt-4 border-t border-gray-100 text-center text-xs text-[#8D7466]">
            Don&apos;t have an account yet?{" "}
            <Link href="/auth/register" className="text-[#C64C2C] font-semibold hover:underline">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
