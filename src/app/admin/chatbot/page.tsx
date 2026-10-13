"use client";

import React, { useState } from "react";
import { initialFAQs } from "@/lib/data/store";
import { Bot, Sparkles, Send, CheckCircle2, ShieldAlert } from "lucide-react";

export default function AdminChatbotPage() {
  const [faqs] = useState(initialFAQs);
  const [testInput, setTestInput] = useState("");
  const [testResponse, setTestResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTestChatbot = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testInput.trim()) return;

    setLoading(true);
    setTestResponse("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: testInput }),
      });
      const data = await res.json();
      setTestResponse(data.reply || "No response received.");
    } catch {
      setTestResponse("Connection error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="pb-6 border-b border-[#E8DAC8]">
        <h1 className="font-serif text-3xl font-medium text-[#49352B]">
          AI Chatbot & Knowledge Base
        </h1>
        <p className="text-xs text-[#8D7466] mt-1">
          Review approved knowledge sources, guardrails, and test customer responses in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Knowledge & Guardrails Left */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#FAF4EC] p-5 rounded-2xl border border-[#E8DAC8] space-y-2">
            <div className="flex items-center gap-2 text-[#49352B] font-semibold text-xs">
              <ShieldAlert className="w-4 h-4 text-[#C64C2C]" />
              <span>Active Medical & Nutrition Guardrails</span>
            </div>
            <p className="text-xs text-[#6E5446] leading-relaxed">
              Per strict brand and compliance guidelines, the assistant automatically detects disease, cure, or medical prescription requests and returns a responsible physician referral disclaimer. It never hallucinates prices or claims.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E8DAC8] shadow-xs space-y-4">
            <h3 className="font-serif text-base font-semibold text-[#49352B]">
              Approved FAQs in Knowledge Base ({faqs.length})
            </h3>
            <div className="space-y-3">
              {faqs.map((f) => (
                <div key={f.id} className="p-3.5 bg-[#FAF6F0] rounded-xl border border-gray-100">
                  <p className="font-semibold text-xs text-[#49352B] mb-1">{f.question}</p>
                  <p className="text-[11px] text-[#6E5446] leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Simulator Right */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-[#E8DAC8] shadow-xs space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold text-[#49352B]">
                Live Response Simulator
              </h3>
              <p className="text-[11px] text-[#8D7466]">
                Test the `/api/chat` engine
              </p>
            </div>
          </div>

          <form onSubmit={handleTestChatbot} className="space-y-3 pt-2">
            <textarea
              rows={3}
              value={testInput}
              onChange={(e) => setTestInput(e.target.value)}
              placeholder="Ask a question (e.g., 'What are your meal plans?', 'Can I open a franchise?')..."
              className="w-full text-xs p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#C64C2C]"
            />
            <button
              type="submit"
              disabled={loading || !testInput.trim()}
              className="w-full py-2.5 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] disabled:opacity-50 text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{loading ? "Generating response..." : "Send Test Query"}</span>
            </button>
          </form>

          {testResponse && (
            <div className="mt-4 p-4 rounded-2xl bg-[#FAF6F0] border border-[#E8DAC8] space-y-1.5">
              <span className="text-[10px] text-[#8D7466] uppercase tracking-wider font-semibold block">
                Engine Response:
              </span>
              <p className="text-xs text-[#49352B] leading-relaxed whitespace-pre-line">
                {testResponse}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
