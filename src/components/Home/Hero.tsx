"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Search, Zap, CheckCircle2, MessageSquare, TrendingUp, ShieldCheck } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"ads" | "seo" | "cro">("ads");

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-mesh">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Column: Conversational Copywriting */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Accepting Q4 Clients — Only 2 Slots Left This Month</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.12] tracking-tight">
            Stop Paying Agencies For 40-Page PDFs.{" "}
            <span className="text-gradient">We Build Websites & Run Ads That Print Revenue.</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            No middleman account managers. No 6-month lock-in contracts. Just direct WhatsApp access to senior marketers & developers who scale your leads and turn clicks into paying clients.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-primary text-white font-semibold text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
            >
              Book 15-Min Free Audit Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#portfolio"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-slate-900/80 border border-gray-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-base shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              See Real Client Results
            </Link>
          </div>

          {/* Authentic Proof Badges */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200/80 dark:border-slate-800/80 text-xs font-medium text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Direct WhatsApp Channel</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>No Binding Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>100+ Campaigns Managed</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3-Tab Mockup Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="w-full rounded-3xl bento-card p-6 shadow-2xl relative overflow-hidden border border-gray-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90">
            {/* Top Bar with Tab Switcher */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>

              {/* Interactive Tabs */}
              <div className="flex p-1 bg-slate-100 dark:bg-slate-900 rounded-xl gap-1">
                <button
                  onClick={() => setActiveTab("ads")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1 ${
                    activeTab === "ads"
                      ? "bg-primary text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5" /> Ads ROI
                </button>
                <button
                  onClick={() => setActiveTab("seo")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1 ${
                    activeTab === "seo"
                      ? "bg-primary text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
                  }`}
                >
                  <Search className="w-3.5 h-3.5" /> SEO Rank
                </button>
                <button
                  onClick={() => setActiveTab("cro")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1 ${
                    activeTab === "cro"
                      ? "bg-primary text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" /> Web CRO
                </button>
              </div>
            </div>

            {/* Tab Content Display */}
            <div className="py-6">
              {activeTab === "ads" && (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Active Meta & Google Campaign</span>
                      <h4 className="text-xl font-heading font-bold text-slate-900 dark:text-white">+$48,250 Revenue Generated</h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold">+340% ROI</span>
                  </div>

                  {/* SVG Ad Graph */}
                  <div className="h-36 w-full bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-3 flex items-end border border-gray-100 dark:border-slate-800">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120">
                      <path d="M 0,100 Q 60,80 120,40 T 240,20 L 300,5" fill="none" stroke="#6C4BFF" strokeWidth="4" />
                      <circle cx="120" cy="40" r="5" fill="#6C4BFF" />
                      <circle cx="240" cy="20" r="5" fill="#3B82F6" />
                      <circle cx="300" cy="5" r="5" fill="#10B981" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800">
                      <span className="text-[10px] text-slate-400 font-mono block">Cost Per Lead</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white font-heading">$11.40 (Dropped 55%)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800">
                      <span className="text-[10px] text-slate-400 font-mono block">Qualified Leads</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white font-heading">412 Leads / Mo</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "seo" && (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Google Search Console</span>
                      <h4 className="text-xl font-heading font-bold text-slate-900 dark:text-white">Rank #1 for 14 Keywords</h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">28.4K Organic</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    {[
                      { kw: "best digital marketing agency", pos: "#1 Rank", volume: "12.4K" },
                      { kw: "high converting web design", pos: "#1 Rank", volume: "8.1K" },
                      { kw: "meta ads management service", pos: "#2 Rank", volume: "5.6K" },
                    ].map((item, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800 flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-800 dark:text-slate-200">{item.kw}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400 text-[10px]">{item.volume}/mo</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold text-[10px]">{item.pos}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "cro" && (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Lighthouse & Conversion Metrics</span>
                      <h4 className="text-xl font-heading font-bold text-slate-900 dark:text-white">99 Performance Score</h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold">3.9% Conv. Rate</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800">
                      <span className="text-2xl font-bold text-emerald-500 font-heading">0.4s</span>
                      <span className="text-[10px] text-slate-400 block mt-1">Load Time</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800">
                      <span className="text-2xl font-bold text-primary font-heading">100</span>
                      <span className="text-[10px] text-slate-400 block mt-1">SEO Score</span>
                    </div>
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800">
                      <span className="text-2xl font-bold text-accent font-heading">+210%</span>
                      <span className="text-[10px] text-slate-400 block mt-1">Mobile Sales</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Messenger style note */}
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>Client Update: <em>&quot;Ad leads doubled this week, thanks Dovix team!&quot;</em></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
