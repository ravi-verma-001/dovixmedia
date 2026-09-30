"use client";

import React, { useState } from "react";
import { MessageSquare, Star, CheckCheck, Send } from "lucide-react";

interface ChatReview {
  clientName: string;
  clientRole: string;
  avatarChar: string;
  avatarBg: string;
  messages: { sender: "client" | "agency"; time: string; text: string }[];
  resultMetric: string;
}

const reviews: ChatReview[] = [
  {
    clientName: "Aman Sharma",
    clientRole: "Founder, Clinica Dental",
    avatarChar: "A",
    avatarBg: "bg-gradient-to-tr from-emerald-500 to-teal-400",
    resultMetric: "Cost Per Lead Dropped 52%",
    messages: [
      { sender: "client", time: "11:42 AM", text: "Hey Dovix team! Just checking the Google Ads dashboard for this week..." },
      { sender: "client", time: "11:43 AM", text: "We received 38 patient appointments in 4 days! Cost per lead is down to ₹350 from ₹780 earlier! 🔥" },
      { sender: "agency", time: "11:45 AM", text: "Awesome Aman! We negative-keyworded 40 irrelevant search terms yesterday and boosted the landing page load speed to 0.5s." },
      { sender: "client", time: "11:47 AM", text: "That is insane speed. Best decision working with you guys directly on WhatsApp." },
    ],
  },
  {
    clientName: "Sarah Jenkins",
    clientRole: "Marketing VP, Apex SaaS",
    avatarChar: "S",
    avatarBg: "bg-gradient-to-tr from-primary to-indigo-500",
    resultMetric: "Organic Organic Traffic +340%",
    messages: [
      { sender: "client", time: "4:15 PM", text: "Quick update: Search Console just reported 28,000 monthly visits!" },
      { sender: "agency", time: "4:18 PM", text: "Great news Sarah! Our technical schema updates and cluster article optimization just kicked in for your core keywords." },
      { sender: "client", time: "4:20 PM", text: "Your live dashboard is so clean compared to our old agency's 50-page PDF monthly reports. Appreciate the transparency!" },
    ],
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = reviews[activeIdx];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            Real Client Reactions
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mt-4 mb-4">
            Direct <span className="text-gradient">WhatsApp & Slack</span> Updates
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Real conversations with founders and marketing leaders celebrating campaign milestones with our team.
          </p>
        </div>

        {/* Tab Switcher for Clients */}
        <div className="flex justify-center gap-3 mb-10">
          {reviews.map((rev, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition cursor-pointer flex items-center gap-2 ${
                activeIdx === i
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              <div className={`w-5 h-5 rounded-full ${rev.avatarBg} text-white flex items-center justify-center font-bold text-[10px]`}>
                {rev.avatarChar}
              </div>
              <span>{rev.clientName}</span>
            </button>
          ))}
        </div>

        {/* Realistic Chat Window Mockup */}
        <div className="max-w-2xl mx-auto rounded-3xl bento-card border border-gray-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 overflow-hidden shadow-2xl">
          {/* WhatsApp Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${active.avatarBg} flex items-center justify-center font-bold text-white text-base shadow-md`}>
                {active.avatarChar}
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white">{active.clientName}</h4>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Online • Direct WhatsApp Group
                </span>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
              {active.resultMetric}
            </span>
          </div>

          {/* Chat Messages */}
          <div className="p-6 flex flex-col gap-4 max-h-[380px] overflow-y-auto bg-mesh">
            {active.messages.map((msg, i) => {
              const isClient = msg.sender === "client";
              return (
                <div
                  key={i}
                  className={`flex flex-col ${isClient ? "items-start" : "items-end"} gap-1 max-w-[85%] ${
                    isClient ? "self-start" : "self-end"
                  }`}
                >
                  <div
                    className={`p-3.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                      isClient
                        ? "chat-bubble-client font-medium"
                        : "chat-bubble-agency border border-gray-200 dark:border-slate-800 font-normal"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-slate-400 font-mono px-1">
                    <span>{msg.time}</span>
                    {!isClient && <CheckCheck className="w-3 h-3 text-blue-400" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 flex items-center gap-3">
            <input
              type="text"
              readOnly
              value="Type message..."
              className="w-full px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-950 text-xs text-slate-400 focus:outline-none"
            />
            <div className="p-2 rounded-xl bg-primary text-white flex-shrink-0">
              <Send className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
