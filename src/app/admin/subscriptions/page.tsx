"use client";

import React, { useState, useEffect } from "react";
import { store } from "@/lib/data/store";
import { SubscriptionPlan } from "@/lib/types";
import { Plus, Edit2, CheckCircle2, X } from "lucide-react";

export default function AdminSubscriptionsPage() {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<SubscriptionPlan | null>(null);
  const [form, setForm] = useState<{
    title: string;
    subtitle: string;
    billing_interval: "monthly" | "quarterly";
    price: string;
    featuresText: string;
    is_popular: boolean;
    is_active: boolean;
  }>({
    title: "",
    subtitle: "",
    billing_interval: "monthly",
    price: "Starting at ₹3,999 / mo",
    featuresText: "Selected meal options\nWeekly delivery\nBasic nutrition support",
    is_popular: false,
    is_active: true,
  });

  useEffect(() => {
    setPlans(store.getPlans());
  }, []);

  const handleOpenEdit = (plan: SubscriptionPlan) => {
    setEditingPlan(plan);
    setForm({
      title: plan.title,
      subtitle: plan.subtitle,
      billing_interval: plan.billing_interval,
      price: plan.price,
      featuresText: plan.features.join("\n"),
      is_popular: plan.is_popular || false,
      is_active: plan.is_active,
    });
    setIsModalOpen(true);
  };

  const handleOpenAdd = () => {
    setEditingPlan(null);
    setForm({
      title: "",
      subtitle: "",
      billing_interval: "monthly",
      price: "Starting at ₹3,999 / mo",
      featuresText: "Selected meal options\nWeekly delivery\nBasic nutrition support",
      is_popular: false,
      is_active: true,
    });
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.price) return;

    const features = form.featuresText
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);

    const planToSave: SubscriptionPlan = {
      id: editingPlan ? editingPlan.id : `plan-${Date.now()}`,
      title: form.title,
      subtitle: form.subtitle,
      billing_interval: form.billing_interval,
      price: form.price,
      features,
      is_popular: form.is_popular,
      is_active: form.is_active,
    };

    store.savePlan(planToSave);
    setPlans([...store.getPlans()]);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8DAC8]">
        <div>
          <h1 className="font-serif text-3xl font-medium text-[#49352B]">
            Subscription Plans
          </h1>
          <p className="text-xs text-[#8D7466] mt-1">
            Configure subscription tiers, perks, highlighted badges, and pricing placeholders.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold shadow-sm transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Plan</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white rounded-3xl p-6 border shadow-xs flex flex-col justify-between ${
              plan.is_popular ? "border-[#C64C2C]" : "border-[#E8DAC8]"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-semibold text-[#8D7466]">
                  {plan.billing_interval}
                </span>
                {plan.is_popular && (
                  <span className="text-[10px] bg-[#C64C2C] text-white px-2.5 py-0.5 rounded-full font-semibold">
                    Popular
                  </span>
                )}
              </div>

              <h3 className="font-serif text-xl font-medium text-[#49352B] mb-1">
                {plan.title}
              </h3>
              <p className="text-xs text-[#8D7466] mb-4">{plan.subtitle}</p>

              <div className="p-3 bg-[#FAF6F0] rounded-xl text-center mb-6">
                <p className="text-sm font-semibold text-[#49352B]">{plan.price}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#6E5446]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C64C2C] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => handleOpenEdit(plan)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#C64C2C] hover:bg-[#FAF6F0] rounded-xl transition-colors"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit Plan</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E8DAC8] animate-in fade-in zoom-in-95 duration-200 my-8">
            <div className="bg-[#49352B] text-white p-6 flex items-center justify-between">
              <h3 className="font-serif text-lg font-medium text-white">
                {editingPlan ? "Edit Subscription Plan" : "Create New Plan"}
              </h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Plan Title *
                </label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="e.g. Wellness Plan"
                  className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={form.subtitle}
                  onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                  placeholder="e.g. Designed for your everyday well-being"
                  className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Billing Interval
                  </label>
                  <select
                    value={form.billing_interval}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        billing_interval: e.target.value as "monthly" | "quarterly",
                      })
                    }
                    className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-[#C64C2C]"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Price Display
                  </label>
                  <input
                    type="text"
                    required
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    placeholder="e.g. Starting at ₹4,999 / mo"
                    className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Features (One per line)
                </label>
                <textarea
                  rows={4}
                  value={form.featuresText}
                  onChange={(e) => setForm({ ...form, featuresText: e.target.value })}
                  placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                  className="w-full text-xs px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                />
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.is_popular}
                    onChange={(e) => setForm({ ...form, is_popular: e.target.checked })}
                    className="rounded text-[#C64C2C] focus:ring-[#C64C2C]"
                  />
                  <span>Mark as Most Popular</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.is_active}
                    onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                    className="rounded text-[#C64C2C] focus:ring-[#C64C2C]"
                  />
                  <span>Active & Visible</span>
                </label>
              </div>

              <div className="pt-3 border-t border-gray-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold shadow-sm"
                >
                  Save Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
