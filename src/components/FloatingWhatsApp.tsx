"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const handleChat = () => {
    const phone = "916267777534";
    const message = "Hi Dovix Media, I would like to book a free strategy call/consultation for my business.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleChat}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-6 z-50 p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-emerald-500/20 hover:scale-110 transition-all duration-300 animate-pulse flex items-center justify-center cursor-pointer"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
    </button>
  );
}
