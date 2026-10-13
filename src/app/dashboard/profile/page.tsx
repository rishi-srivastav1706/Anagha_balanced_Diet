"use client";

import React, { useState, useEffect } from "react";
import { store } from "@/lib/data/store";
import { UserProfile } from "@/lib/types";
import { Save, CheckCircle, User } from "lucide-react";

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setProfile(store.getCurrentUser());
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;

    store.updateUserProfile(profile);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  if (!profile) return null;

  return (
    <div className="max-w-3xl space-y-8 animate-in fade-in duration-300">
      <div className="pb-6 border-b border-[#E8DAC8]">
        <h1 className="font-serif text-3xl font-medium text-[#49352B]">
          Profile & Preferences
        </h1>
        <p className="text-xs text-[#8D7466] mt-1">
          Manage your personal details, delivery address, and culinary guidelines.
        </p>
      </div>

      {saved && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3 text-green-900 text-xs">
          <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
          <span>Profile changes saved successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white rounded-3xl p-8 border border-[#E8DAC8] shadow-xs space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Email Address (Account Identifier)
            </label>
            <input
              type="email"
              disabled
              value={profile.email}
              className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl bg-gray-50 text-gray-500 cursor-not-allowed"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Contact Phone Number
            </label>
            <input
              type="tel"
              value={profile.phone || ""}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Account Role
            </label>
            <input
              type="text"
              disabled
              value={profile.role}
              className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl bg-gray-50 text-gray-500 capitalize"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Default Delivery Address in Hyderabad
          </label>
          <input
            type="text"
            value={profile.address || ""}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
            className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Dietary Preferences & Allergies
          </label>
          <textarea
            rows={3}
            value={profile.dietary_preferences || ""}
            onChange={(e) =>
              setProfile({ ...profile, dietary_preferences: e.target.value })
            }
            className="w-full text-xs px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
          />
          <p className="text-[11px] text-[#8D7466] mt-1">
            Our kitchen team uses this note when portioning your meal subscription boxes.
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold shadow-md transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Profile</span>
          </button>
        </div>
      </form>
    </div>
  );
}
