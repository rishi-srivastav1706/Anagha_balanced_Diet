"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, ShieldCheck, ChevronDown, Sparkles } from "lucide-react";
import { store } from "@/lib/data/store";
import { UserProfile } from "@/lib/types";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    setCurrentUser(store.getCurrentUser());
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Offerings", href: "/offerings" },
    { name: "Subscriptions", href: "/subscriptions" },
    { name: "Nutrition", href: "/nutrition" },
    { name: "Franchise", href: "/franchise" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
  ];

  const handleSwitchUser = (role: "customer" | "admin" | "guest") => {
    if (role === "customer") {
      store.setCurrentUser({
        id: "cust-demo",
        name: "Rishi",
        email: "rishisrivastav778@gmail.com",
        phone: "+91 62814 22353",
        role: "customer",
        address: "Flat 401, Balaji Nagar, Road Number 5, KLR Venture, Medchal",
        dietary_preferences: "High protein, gluten conscious",
        created_at: "2026-01-15",
      });
    } else if (role === "admin") {
      store.setCurrentUser({
        id: "admin-demo",
        name: "Anagha Admin",
        email: "rishisrivastav778@gmail.com",
        phone: "+91 62814 22353",
        role: "admin",
        created_at: "2026-01-01",
      });
    } else {
      store.setCurrentUser(null);
    }
    setCurrentUser(store.getCurrentUser());
    setUserDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#E8DAC8]/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#C64C2C]/10 border border-[#C64C2C]/30 flex items-center justify-center text-[#C64C2C] group-hover:scale-105 transition-transform">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12c0 4.5 3 8 7 9.5 0-3 .5-5 2-7" />
                <path d="M12 2c5.5 0 10 4.5 10 10 0 4.5-3 8-7 9.5 0-3-.5-5-2-7" />
                <path d="M12 2v20" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-wider font-semibold text-[#49352B]">
                ANAGHA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#8D7466] uppercase font-medium">
                BALANCED BITES
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "text-[#C64C2C] font-semibold bg-[#C64C2C]/10"
                      : "text-[#49352B] hover:text-[#C64C2C] hover:bg-[#F5EBDD]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* User & Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Demo Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border border-[#E8DAC8] bg-white text-[#49352B] hover:border-[#C64C2C]/50 transition-colors shadow-sm"
              >
                {currentUser?.role === "admin" ? (
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C64C2C]" />
                ) : (
                  <User className="w-3.5 h-3.5 text-[#8D7466]" />
                )}
                <span>
                  {currentUser ? `${currentUser.name} (${currentUser.role})` : "Guest"}
                </span>
                <ChevronDown className="w-3 h-3 text-[#8D7466]" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-[#E8DAC8] py-2 z-50 text-xs">
                  <div className="px-3 py-2 border-b border-gray-100 font-semibold text-[#49352B]">
                    Active Session
                  </div>
                  {currentUser ? (
                    <>
                      {currentUser.role === "admin" ? (
                        <Link
                          href="/admin"
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 hover:bg-[#FAF6F0] text-[#C64C2C] font-medium"
                        >
                          <ShieldCheck className="w-4 h-4" /> Go to Admin Dashboard
                        </Link>
                      ) : (
                        <Link
                          href="/dashboard"
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 hover:bg-[#FAF6F0] text-[#C64C2C] font-medium"
                        >
                          <User className="w-4 h-4" /> Go to Customer Dashboard
                        </Link>
                      )}
                      <div className="my-1 border-t border-gray-100"></div>
                      <div className="px-3 py-1 text-[11px] text-gray-500 font-medium uppercase">
                        Switch Role / Demo:
                      </div>
                    </>
                  ) : null}

                  <button
                    onClick={() => handleSwitchUser("customer")}
                    className="w-full text-left px-3 py-1.5 hover:bg-[#FAF6F0] text-gray-700 flex items-center justify-between"
                  >
                    <span>Customer (Rishi)</span>
                    {currentUser?.role === "customer" && (
                      <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">Active</span>
                    )}
                  </button>
                  <button
                    onClick={() => handleSwitchUser("admin")}
                    className="w-full text-left px-3 py-1.5 hover:bg-[#FAF6F0] text-gray-700 flex items-center justify-between"
                  >
                    <span>Admin (Owner)</span>
                    {currentUser?.role === "admin" && (
                      <span className="text-[10px] bg-red-100 text-[#C64C2C] px-1.5 py-0.5 rounded">Active</span>
                    )}
                  </button>
                  <button
                    onClick={() => handleSwitchUser("guest")}
                    className="w-full text-left px-3 py-1.5 hover:bg-[#FAF6F0] text-gray-500"
                  >
                    Logout / View as Guest
                  </button>
                </div>
              )}
            </div>

            {/* Dashboard / Login CTA */}
            {currentUser?.role === "admin" ? (
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#49352B] hover:bg-[#35251D] text-white text-sm font-medium transition-all shadow-sm hover:shadow"
              >
                <ShieldCheck className="w-4 h-4 text-[#C64C2C]" />
                Admin Panel
              </Link>
            ) : currentUser?.role === "customer" ? (
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-sm font-medium transition-all shadow-sm hover:shadow"
              >
                <User className="w-4 h-4" />
                My Dashboard
              </Link>
            ) : (
              <Link
                href="/auth/login"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-sm font-medium transition-all shadow-sm hover:shadow"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#49352B] hover:text-[#C64C2C] hover:bg-[#F5EBDD] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E8DAC8] bg-[#FAF6F0] px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                pathname === link.href
                  ? "bg-[#C64C2C]/10 text-[#C64C2C] font-semibold"
                  : "text-[#49352B] hover:bg-[#F5EBDD]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#E8DAC8] flex flex-col gap-2">
            {currentUser?.role === "admin" ? (
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-full bg-[#49352B] text-white font-medium text-sm"
              >
                Admin Panel
              </Link>
            ) : currentUser?.role === "customer" ? (
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-full bg-[#C64C2C] text-white font-medium text-sm"
              >
                Customer Dashboard
              </Link>
            ) : (
              <Link
                href="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-full bg-[#C64C2C] text-white font-medium text-sm"
              >
                Login / Register
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
