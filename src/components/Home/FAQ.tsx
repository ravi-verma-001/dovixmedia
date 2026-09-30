"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take to see results from SEO campaigns?",
    answer: "Typically, organic ranking improvements are visible within 3 to 6 months of launching on-page optimizations, backlinks, and keyword structures. Results scale compoundingly over time.",
  },
  {
    question: "Do you design custom websites or use standard templates?",
    answer: "We design every website from scratch in Figma before developing it using clean, optimized Next.js frameworks. This ensures your brand looks unique, loads instantly, and converts high.",
  },
  {
    question: "What platforms do you configure ads and conversion tracking on?",
    answer: "We specialize in Google Search, Google Display, Performance Max, Facebook Feed, Instagram Stories, Reels, and local geographical ads. We set up precise custom conversions using GTM and Meta Pixel.",
  },
  {
    question: "How do you handle budget recommendations for Meta and Google ads?",
    answer: "During our initial strategy call, we analyze your industry search volume, customer lifetime value, and competitors. We recommend start budgets that gather enough conversions without wasteful spending.",
  },
  {
    question: "How often do you report on search visibility and ad metrics?",
    answer: "We provide you with a live, real-time client dashboard access showing budget, clicks, leads, and conversion costs. Additionally, we run monthly strategy calls to review roadmap steps.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/50 overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-heading font-semibold text-slate-850 dark:text-white text-base md:text-lg cursor-pointer hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {faq.question}
                  <div className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-gray-100 dark:border-slate-800/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
