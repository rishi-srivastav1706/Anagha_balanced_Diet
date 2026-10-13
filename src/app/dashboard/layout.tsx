"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  User,
  CalendarCheck,
  ShoppingBag,
  HelpCircle,
  LogOut,
  Menu,
  X,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { store } from "@/lib/data/store";
import { UserProfile } from "@/lib/types";

export default function CustomerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const current = store.getCurrentUser();
    if (!current) {
      // Default to demo customer for immediate interactive testing
      store.setCurrentUser({
        id: "cust-demo",
        name: "Rishi",
        email: "rishisrivastav778@gmail.com",
        phone: "+91 62814 22353",
        role: "customer",
        address: "Flat 401, Balaji Nagar, Road Number 5, KLR Venture, Medchal",
        dietary_preferences: "High protein, low sodium, gluten sensitive",
        created_at: "2026-01-15",
      });
      setUser(store.getCurrentUser());
    } else {
      setUser(current);
    }
  }, []);

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Profile", href: "/dashboard/profile", icon: User },
    { name: "Subscriptions", href: "/dashboard/subscriptions", icon: CalendarCheck },
    { name: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
    { name: "Support & Enquiries", href: "/dashboard/enquiries", icon: HelpCircle },
  ];

  const handleLogout = () => {
    store.setCurrentUser(null);
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex flex-col md:flex-row">
      {/* Mobile Header Bar */}
      <div className="md:hidden bg-[#FAF6F0] border-b border-[#E8DAC8] p-4 flex items-center justify-between sticky top-0 z-30">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#C64C2C] flex items-center justify-center text-white font-serif font-bold text-sm">
            A
          </div>
          <span className="font-serif font-semibold text-sm text-[#49352B]">
            ANAGHA BALANCED BITES
          </span>
        </Link>
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-2 text-[#49352B]"
          aria-label="Toggle Menu"
        >
          {mobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar matching Mockup #4 */}
      <aside
        className={`fixed md:sticky top-0 z-40 h-screen w-64 bg-[#FAF6F0] border-r border-[#E8DAC8] p-6 flex flex-col justify-between transition-transform duration-200 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 mb-8 group">
            <div className="w-10 h-10 rounded-full bg-[#C64C2C]/10 border border-[#C64C2C]/30 flex items-center justify-center text-[#C64C2C]">
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
            <div>
              <span className="font-serif text-sm tracking-wider font-semibold text-[#49352B] block">
                ANAGHA
              </span>
              <span className="text-[9px] tracking-[0.22em] text-[#8D7466] uppercase block">
                BALANCED BITES
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-[#C64C2C] text-white shadow-sm"
                      : "text-[#49352B] hover:bg-[#F5EBDD] hover:text-[#C64C2C]"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Link back to public site */}
          <div className="mt-6 pt-6 border-t border-[#E8DAC8]">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs text-[#8D7466] hover:text-[#C64C2C] px-4 py-2 transition-colors font-medium"
            >
              <span>← Back to Public Website</span>
            </Link>
          </div>
        </div>

        {/* User Card & Logout */}
        <div className="pt-6 border-t border-[#E8DAC8] space-y-3">
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-full bg-[#C64C2C] text-white flex items-center justify-center font-bold text-xs uppercase shadow-sm">
              {user?.name?.[0] || "U"}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-[#49352B] truncate">{user?.name || "Customer"}</p>
              <p className="text-[10px] text-[#8D7466] truncate">{user?.email || "customer@example.com"}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-gray-600 hover:text-red-700 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4 text-gray-400" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 p-6 md:p-10 max-w-6xl">{children}</main>
    </div>
  );
}
