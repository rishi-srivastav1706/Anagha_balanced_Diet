"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  UtensilsCrossed,
  CalendarCheck,
  Users,
  MessageSquare,
  Building,
  HeartHandshake,
  Star,
  FileText,
  Bot,
  Settings,
  LogOut,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { store, demoAdminUser } from "@/lib/data/store";
import { UserProfile } from "@/lib/types";

export default function AdminLayout({
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
    // Verify admin access. If not admin, provide admin demo user for testing
    if (!current || current.role !== "admin") {
      store.setCurrentUser(demoAdminUser);
      setUser(demoAdminUser);
    } else {
      setUser(current);
    }
  }, []);

  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Offerings", href: "/admin/offerings", icon: UtensilsCrossed },
    { name: "Subscriptions", href: "/admin/subscriptions", icon: CalendarCheck },
    { name: "Customers", href: "/admin/customers", icon: Users },
    { name: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
    { name: "Franchise Applications", href: "/admin/franchise", icon: Building },
    { name: "Collaboration Requests", href: "/admin/collaborations", icon: HeartHandshake },
    { name: "Testimonials", href: "/admin/testimonials", icon: Star },
    { name: "Content", href: "/admin/content", icon: FileText },
    { name: "Chatbot & Knowledge", href: "/admin/chatbot", icon: Bot },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  const handleLogout = () => {
    store.setCurrentUser(null);
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-[#F5EBDD]/40 flex flex-col lg:flex-row">
      {/* Mobile Top Header */}
      <div className="lg:hidden bg-[#FAF6F0] border-b border-[#E8DAC8] p-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#49352B] flex items-center justify-center text-white font-serif font-bold text-sm">
            A
          </div>
          <span className="font-serif font-semibold text-sm text-[#49352B]">
            ADMIN CONSOLE
          </span>
        </div>
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-2 text-[#49352B]"
          aria-label="Toggle Navigation"
        >
          {mobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Admin Sidebar matching Mockup #5 */}
      <aside
        className={`fixed lg:sticky top-0 z-40 h-screen w-64 bg-white border-r border-[#E8DAC8] p-5 flex flex-col justify-between transition-transform duration-200 overflow-y-auto ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div>
          {/* Brand Logo & Admin Badge */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#C64C2C]/10 border border-[#C64C2C]/30 flex items-center justify-center text-[#C64C2C]">
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
                <span className="font-serif text-xs tracking-wider font-semibold text-[#49352B] block">
                  ANAGHA
                </span>
                <span className="text-[8px] tracking-[0.2em] text-[#8D7466] uppercase block">
                  BALANCED BITES
                </span>
              </div>
            </Link>
            <span className="text-[10px] bg-[#49352B] text-white px-2 py-0.5 rounded-full font-medium">
              Admin
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileSidebarOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#FAF4EC] text-[#C64C2C] font-semibold border border-[#E8DAC8]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#49352B]"
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#C64C2C]" : "text-gray-400"}`} />
                  <span className="truncate">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link
              href="/"
              className="text-xs text-[#8D7466] hover:text-[#C64C2C] px-3 py-1.5 block font-medium"
            >
              ← View Public Website
            </Link>
          </div>
        </div>

        {/* Admin Footer & Logout */}
        <div className="pt-4 border-t border-gray-100 space-y-2">
          <div className="flex items-center gap-2.5 px-2">
            <div className="w-8 h-8 rounded-full bg-[#49352B] text-white flex items-center justify-center font-bold text-xs uppercase">
              A
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-[#49352B] truncate">{user?.name || "Admin"}</p>
              <p className="text-[9px] text-[#8D7466] truncate">{user?.email || "admin@example.com"}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-gray-500 hover:text-red-700 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5 text-gray-400" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Admin Content Body */}
      <main className="flex-1 p-6 lg:p-8 max-w-7xl overflow-y-auto">{children}</main>
    </div>
  );
}
