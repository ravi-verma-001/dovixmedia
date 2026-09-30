"use client";

import React from "react";
import { Check, X, ShieldCheck, Zap } from "lucide-react";

const comparison = [
  {
    feature: "Client Communication",
    typical: "Account manager middleman, 3-day email responses",
    dovix: "Direct WhatsApp group with senior developers & marketers",
  },
  {
    feature: "Contract Terms",
    typical: "6 to 12 month mandatory lock-in contracts",
    dovix: "No lock-in contracts. Cancel anytime if we don't hit ROI",
  },
  {
    feature: "Campaign Onboarding",
    typical: "3 to 4 weeks of back-and-forth setup questionnaires",
    dovix: "48-hour rapid launch guarantee",
  },
  {
    feature: "Reporting & Transparency",
    typical: "Monthly 40-page PDF filled with vanity impressions",
    dovix: "Live real-time revenue, CPL & sales dashboard",
  },
  {
    feature: "Team Assigned",
    typical: "Passed off to junior interns after signing",
    dovix: "Worked on directly by experienced founders & senior engineers",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/40 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            Why We Are Different
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mt-4 mb-4">
            Typical Agency vs. <span className="text-gradient">Dovix Media</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            See why founders and marketing leads switch to our direct, results-driven model.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl bento-card overflow-hidden shadow-xl border border-gray-200/80 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="grid grid-cols-12 bg-slate-100 dark:bg-slate-900 p-4 md:p-6 border-b border-gray-200 dark:border-slate-800 text-xs font-heading font-bold uppercase tracking-wider text-slate-500">
            <div className="col-span-4">Feature</div>
            <div className="col-span-4 text-rose-500 flex items-center gap-1">
              <X className="w-4 h-4" /> Typical Agency
            </div>
            <div className="col-span-4 text-emerald-500 flex items-center gap-1">
              <Check className="w-4 h-4" /> Dovix Media
            </div>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-slate-800/60">
            {comparison.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 md:p-6 items-center text-xs md:text-sm hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition">
                <div className="col-span-4 font-heading font-semibold text-slate-900 dark:text-white">
                  {item.feature}
                </div>
                <div className="col-span-4 text-slate-500 dark:text-slate-400 pr-2 flex items-start gap-1.5">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>{item.typical}</span>
                </div>
                <div className="col-span-4 text-slate-800 dark:text-slate-200 font-medium flex items-start gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{item.dovix}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
