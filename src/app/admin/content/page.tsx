"use client";

import React, { useState, useEffect } from "react";
import { store } from "@/lib/data/store";
import { BusinessSettings } from "@/lib/types";
import { Save, CheckCircle, FileText } from "lucide-react";

export default function AdminContentPage() {
  const [settings, setSettings] = useState<BusinessSettings>(store.getSettings());
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    store.updateSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-4xl space-y-8 animate-in fade-in duration-300">
      <div className="pb-6 border-b border-[#E8DAC8]">
        <h1 className="font-serif text-3xl font-medium text-[#49352B]">
          Website Content Management
        </h1>
        <p className="text-xs text-[#8D7466] mt-1">
          Edit hero slogans, brand promises, and landing page announcements.
        </p>
      </div>

      {saved && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3 text-green-900 text-xs">
          <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
          <span>Website content updated successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white rounded-3xl p-8 border border-[#E8DAC8] shadow-xs space-y-6">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Brand Name
          </label>
          <input
            type="text"
            required
            value={settings.brand_name}
            onChange={(e) => setSettings({ ...settings, brand_name: e.target.value })}
            className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Hero Headline
          </label>
          <input
            type="text"
            required
            value={settings.hero_headline}
            onChange={(e) =>
              setSettings({ ...settings, hero_headline: e.target.value })
            }
            className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Hero Subheadline
          </label>
          <textarea
            rows={3}
            value={settings.hero_subheadline}
            onChange={(e) =>
              setSettings({ ...settings, hero_subheadline: e.target.value })
            }
            className="w-full text-xs px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Brand Tagline
          </label>
          <input
            type="text"
            value={settings.tagline}
            onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
            className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
          />
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold shadow-md transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
}
