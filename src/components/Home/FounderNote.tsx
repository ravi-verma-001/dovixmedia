"use client";

import React from "react";
import { ShieldCheck, MessageCircle, HeartHandshake } from "lucide-react";

export default function FounderNote() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl bento-card p-8 md:p-12 relative overflow-hidden border border-gray-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 shadow-xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Founder Avatar Badge */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-gray-200/60 dark:border-slate-800">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-heading font-extrabold text-3xl text-white shadow-xl shadow-primary/25 mb-4">
                DM
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                Dovix Media Team
              </h3>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">
                Founders & Lead Engineers
              </span>
              <div className="flex items-center gap-1.5 mt-3 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Personal Guarantee</span>
              </div>
            </div>

            {/* Right: Personal Note Copywriting */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4" /> From The Founders
              </span>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-snug">
                &quot;We don&apos;t hide behind account managers or 40-page PDFs.&quot;
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Most traditional agencies operate like factories: you sign a 6-month contract, get passed off to a junior intern, and receive monthly PDF reports filled with vanity metrics like &quot;impressions&quot;.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                We started Dovix Media to do the exact opposite. When you work with us, you get direct WhatsApp access to the senior developers building your site and the performance marketers optimizing your ad spend.
              </p>

              {/* Founder Signature Accent */}
              <div className="pt-4 mt-2 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-heading font-extrabold text-lg text-slate-850 dark:text-white block tracking-wide">
                    The Dovix Guarantee
                  </span>
                  <span className="text-xs text-slate-400">
                    No long-term contracts. If we don&apos;t deliver measurable ROI, cancel anytime.
                  </span>
                </div>

                <a
                  href="https://wa.me/916267777534?text=Hi%20Dovix%20Team%2C%20I%20would%20like%20to%20talk%20directly%20with%20a%20founder."
                  target="_blank"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition cursor-pointer w-fit"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Chat Direct With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
