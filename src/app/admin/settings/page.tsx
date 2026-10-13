"use client";

import React, { useState } from "react";
import { store } from "@/lib/data/store";
import { BusinessSettings } from "@/lib/types";
import { Save, CheckCircle, Settings, Phone, MessageCircle, MapPin, Mail } from "lucide-react";

export default function AdminSettingsPage() {
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
          Business & Integration Settings
        </h1>
        <p className="text-xs text-[#8D7466] mt-1">
          Configure direct WhatsApp links, support phone numbers, email addresses, and Google Maps location.
        </p>
      </div>

      {saved && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3 text-green-900 text-xs">
          <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
          <span>Business settings saved successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white rounded-3xl p-8 border border-[#E8DAC8] shadow-xs space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Public Phone Number
            </label>
            <input
              type="text"
              required
              value={settings.phone}
              onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              WhatsApp Integration Number (E.164 format with country code)
            </label>
            <input
              type="text"
              required
              value={settings.whatsapp_number}
              onChange={(e) =>
                setSettings({ ...settings, whatsapp_number: e.target.value })
              }
              placeholder="+916281422353"
              className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Customer Support Email
            </label>
            <input
              type="email"
              required
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Operating Hours
            </label>
            <input
              type="text"
              required
              value={settings.hours}
              onChange={(e) => setSettings({ ...settings, hours: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Physical Kitchen Address
          </label>
          <input
            type="text"
            required
            value={settings.address}
            onChange={(e) => setSettings({ ...settings, address: e.target.value })}
            className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              required
              value={settings.city}
              onChange={(e) => setSettings({ ...settings, city: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              State / Region
            </label>
            <input
              type="text"
              required
              value={settings.state}
              onChange={(e) => setSettings({ ...settings, state: e.target.value })}
              className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Google Maps Embed URL
          </label>
          <input
            type="url"
            value={settings.google_maps_embed_url}
            onChange={(e) =>
              setSettings({ ...settings, google_maps_embed_url: e.target.value })
            }
            className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
          />
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold shadow-md transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
}
