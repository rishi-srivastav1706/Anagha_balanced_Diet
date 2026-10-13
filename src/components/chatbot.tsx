"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles, Phone, ExternalLink } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg-welcome",
      sender: "bot",
      text: "Hi! I'm your Anagha assistant. How can I help you today?",
      timestamp: "10:00 AM",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Tell me about your offerings",
    "Subscription plans",
    "Franchise opportunity",
    "Nutrition & collaboration",
    "Contact details",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();
      const botReply = data.reply || "I am here to assist you with our food, subscriptions, and franchise details.";

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          sender: "bot",
          text: "I couldn't reach the server right now. You can also chat directly with our team on WhatsApp at +91 62814 22353.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Widget Trigger */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#C64C2C] hover:bg-[#AF3E20] text-white rounded-full shadow-2xl transition-all transform hover:scale-105"
          aria-label="Open AI Assistant"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="font-medium text-sm pr-1 hidden sm:inline">Ask Anagha Assistant</span>
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white"></span>
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[380px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-[#E8DAC8] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-[#49352B] text-white px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#C64C2C] flex items-center justify-center font-serif text-sm font-bold text-white shadow-inner">
                  A
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#49352B]" />
              </div>
              <div>
                <h3 className="font-medium text-sm leading-tight">Anagha Balanced Bites</h3>
                <span className="text-[11px] text-[#EADBC8]/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                  AI Wellness Assistant Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#FAF6F0]/40 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 shadow-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#C64C2C] text-white rounded-tr-none"
                      : "bg-white text-[#49352B] border border-[#E8DAC8]/70 rounded-tl-none whitespace-pre-line"
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      msg.sender === "user" ? "text-white/70" : "text-[#8D7466]"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-full bg-[#49352B] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2 items-center text-[#8D7466]">
                <div className="w-7 h-7 rounded-full bg-[#C64C2C]/10 text-[#C64C2C] flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-[#E8DAC8] rounded-2xl px-3.5 py-2 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C64C2C] animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C64C2C] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C64C2C] animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}

            {/* Quick Prompt Chips */}
            {messages.length <= 3 && (
              <div className="pt-2">
                <p className="text-[10px] text-[#8D7466] mb-1.5 uppercase tracking-wider font-semibold">
                  Suggested topics
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSendMessage(prompt)}
                      className="text-[11px] bg-white border border-[#E8DAC8] hover:border-[#C64C2C] hover:text-[#C64C2C] px-2.5 py-1.5 rounded-full text-[#49352B] transition-colors shadow-2xs text-left"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Connect bar */}
          <div className="px-3 py-1.5 bg-[#F5EBDD] border-t border-[#E8DAC8] flex items-center justify-between text-[11px] text-[#49352B]">
            <span className="text-[#8D7466]">Need immediate support?</span>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/916281422353?text=Hi%20Anagha%20Balanced%20Bites,%20I%20have%20an%20enquiry"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#25D366] hover:underline font-semibold"
              >
                WhatsApp <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <span>•</span>
              <a
                href="mailto:rishisrivastav778@gmail.com"
                className="hover:underline text-[#C64C2C] font-semibold"
              >
                Email
              </a>
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              disabled={isLoading}
              className="flex-1 text-xs border border-gray-200 rounded-full px-3.5 py-2.5 focus:outline-none focus:border-[#C64C2C] text-[#49352B]"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isLoading}
              className="w-9 h-9 rounded-full bg-[#C64C2C] hover:bg-[#AF3E20] disabled:opacity-40 text-white flex items-center justify-center transition-all shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
