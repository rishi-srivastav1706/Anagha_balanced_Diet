"use client";

import React, { useState, useEffect } from "react";
import { store } from "@/lib/data/store";
import { Offering, OfferingCategory } from "@/lib/types";
import { Plus, Trash2, Edit2, CheckCircle, X, Sparkles } from "lucide-react";

export default function AdminOfferingsPage() {
  const [offerings, setOfferings] = useState<Offering[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Offering | null>(null);
  const [form, setForm] = useState<Omit<Offering, "id">>({
    title: "",
    category: "Meals",
    description: "",
    price: "Custom Enquiry",
    status: "Available",
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    calories: "450 kcal",
    protein: "22g",
    is_featured: false,
  });

  useEffect(() => {
    setOfferings(store.getOfferings());
  }, []);

  const handleOpenAdd = () => {
    setEditingItem(null);
    setForm({
      title: "",
      category: "Meals",
      description: "",
      price: "Custom Enquiry",
      status: "Available",
      image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      calories: "450 kcal",
      protein: "22g",
      is_featured: false,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: Offering) => {
    setEditingItem(item);
    setForm({
      title: item.title,
      category: item.category,
      description: item.description,
      price: item.price || "Custom Enquiry",
      status: item.status,
      image_url: item.image_url,
      calories: item.calories || "",
      protein: item.protein || "",
      is_featured: item.is_featured || false,
    });
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.description) return;

    if (editingItem) {
      store.saveOffering({
        ...form,
        id: editingItem.id,
      });
    } else {
      store.saveOffering({
        ...form,
        id: `off-${Date.now()}`,
      });
    }

    setOfferings([...store.getOfferings()]);
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to remove this offering?")) {
      store.deleteOffering(id);
      setOfferings([...store.getOfferings()]);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8DAC8]">
        <div>
          <h1 className="font-serif text-3xl font-medium text-[#49352B]">
            Manage Offerings & Menu
          </h1>
          <p className="text-xs text-[#8D7466] mt-1">
            Add, update descriptions, calibrate nutritional macros, and toggle availability.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold shadow-sm transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Offering</span>
        </button>
      </div>

      {/* Grid of Offerings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offerings.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden border border-[#E8DAC8] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span
                  className={`absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                    item.status === "Available"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between text-[10px] text-[#8D7466] uppercase tracking-wider mb-1">
                  <span>{item.category}</span>
                  <span>{item.calories}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-[#49352B] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6E5446] line-clamp-2 mb-3">
                  {item.description}
                </p>
                <span className="text-xs font-semibold text-[#49352B] bg-[#FAF6F0] px-2.5 py-1 rounded-lg">
                  {item.price || "Enquire"}
                </span>
              </div>
            </div>

            <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-end gap-2">
              <button
                onClick={() => handleOpenEdit(item)}
                className="p-2 text-gray-500 hover:text-[#C64C2C] hover:bg-gray-100 rounded-lg transition-colors"
                title="Edit item"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete item"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E8DAC8] animate-in fade-in zoom-in-95 duration-200 my-8">
            <div className="bg-[#49352B] text-white p-6 flex items-center justify-between">
              <h3 className="font-serif text-lg font-medium text-white">
                {editingItem ? "Edit Offering" : "Add New Offering"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Item Title *
                </label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="e.g. Avocado Greens Bowl"
                  className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        category: e.target.value as OfferingCategory,
                      })
                    }
                    className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C] bg-white"
                  >
                    <option value="Meals">Meals</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Status *
                  </label>
                  <select
                    value={form.status}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        status: e.target.value as "Available" | "Coming Soon",
                      })
                    }
                    className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C] bg-white"
                  >
                    <option value="Available">Available</option>
                    <option value="Coming Soon">Coming Soon</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <textarea
                  required
                  rows={2}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Detailed description of ingredients and nutrition..."
                  className="w-full text-xs px-3.5 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Configurable Price
                  </label>
                  <input
                    type="text"
                    value={form.price || ""}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    placeholder="e.g. ₹299 or Custom Enquiry"
                    className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Calories (Est.)
                  </label>
                  <input
                    type="text"
                    value={form.calories || ""}
                    onChange={(e) => setForm({ ...form, calories: e.target.value })}
                    placeholder="e.g. 420 kcal"
                    className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  value={form.image_url}
                  onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full text-xs px-3.5 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
                />
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
                  className="px-6 py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] text-white text-xs font-semibold transition-all shadow-sm"
                >
                  Save Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
