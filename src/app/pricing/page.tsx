"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import { Check, HelpCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter Growth",
    price: "$1,499",
    period: "month",
    desc: "Best for local businesses looking to establish visibility and capture basic leads.",
    features: [
      "1 Core Service (SEO or Ads)",
      "Basic Keyword Research & Setup",
      "Standard Meta Ads campaign management",
      "Monthly performance reporting dashboard",
      "Email and chat support",
    ],
  },
  {
    name: "Revenue Scale",
    price: "$2,999",
    period: "month",
    isPopular: true,
    desc: "Ideal for growing businesses looking to scale acquisition across multiple search channels.",
    features: [
      "2 Core Services (SEO + Google Ads)",
      "Technical audit & structural fixes",
      "Meta Ads lead generation setup",
      "A/B creative testing & copywriting",
      "Weekly analytics updates",
      "Dedicated Slack communication channel",
    ],
  },
  {
    name: "Enterprise Dominance",
    price: "$5,499",
    period: "month",
    desc: "For brands requiring complete custom funnels, landing pages, and multi-channel ads.",
    features: [
      "All services (SEO, GBP, Google & Meta Ads)",
      "Bespoke landing page design & development",
      "Continuous Conversion Rate Optimization",
      "Real-time custom CRM integration dashboard",
      "Priority strategist access",
    ],
  },
];

export default function PricingPage() {
  const [budget, setBudget] = useState(2500);
  const [channels, setChannels] = useState<string[]>(["SEO"]);

  const toggleChannel = (ch: string) => {
    if (channels.includes(ch)) {
      setChannels(channels.filter((c) => c !== ch));
    } else {
      setChannels([...channels, ch]);
    }
  };

  // Calculation logic for estimated outcome
  const estLeads = Math.floor((budget / 100) * 1.8 * (channels.length ? channels.length * 0.9 : 0.5));
  const estROI = channels.length > 0 ? "180% - 260%" : "0%";

  return (
    <div className="relative min-h-screen">
      <MouseGlow />
      <Navbar />

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing Plans</span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2 mb-4">
            Transparent Pricing. **No Hidden Fees.**
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Choose a pre-packaged growth tier or use our custom calculator below to estimate lead acquisition rates.
          </p>
        </div>

        {/* Flat Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-white dark:bg-slate-900 border flex flex-col justify-between relative shadow-sm hover:shadow-xl transition-all duration-300 ${
                plan.isPopular
                  ? "border-primary ring-2 ring-primary/20 dark:ring-primary/10"
                  : "border-gray-200 dark:border-slate-800"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 bg-primary text-white text-[10px] uppercase font-bold tracking-wider rounded-full">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="font-heading font-bold text-xl text-slate-800 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {plan.desc}
                </p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-heading font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-sm text-slate-400">/{plan.period}</span>
                </div>

                <ul className="flex flex-col gap-3.5 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-650 dark:text-slate-300 leading-snug">
                      <Check className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/#contact"
                className={`w-full py-3.5 rounded-xl font-semibold text-center text-sm transition cursor-pointer ${
                  plan.isPopular
                    ? "bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary-hover"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>

        {/* Custom Quote Estimator */}
        <div className="p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-gray-150 dark:border-slate-800/80 shadow-sm">
          <div className="text-center mb-10 max-w-xl mx-auto">
            <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-2">
              Interactive ROI & Lead Estimator
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Select your channels and drag the monthly budget slider to view predicted marketing outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Input Side */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Channel buttons */}
              <div>
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
                  Select Target Channels
                </span>
                <div className="flex flex-wrap gap-2">
                  {["SEO", "Google Ads", "Meta Ads", "Local SEO"].map((ch) => {
                    const isSelected = channels.includes(ch);
                    return (
                      <button
                        key={ch}
                        onClick={() => toggleChannel(ch)}
                        className={`px-4 py-2 text-xs rounded-xl font-medium border transition cursor-pointer ${
                          isSelected
                            ? "bg-primary text-white border-primary"
                            : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-gray-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                      >
                        {ch}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Monthly Marketing Budget
                  </span>
                  <span className="text-lg font-heading font-extrabold text-primary">
                    ${budget.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="15000"
                  step="500"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-mono">
                  <span>$1,000</span>
                  <span>$7,500</span>
                  <span>$15,000</span>
                </div>
              </div>
            </div>

            {/* Results Side */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
              <div className="flex items-center gap-2 text-slate-400">
                <HelpCircle className="w-4.5 h-4.5 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider">Estimated Monthly Projections</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800">
                  <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-mono mb-1">Target Leads</span>
                  <span className="text-2xl font-heading font-bold text-slate-800 dark:text-white">
                    {estLeads} - {Math.floor(estLeads * 1.3)}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-800">
                  <span className="block text-[10px] text-slate-400 dark:text-slate-500 font-mono mb-1">Expected ROI</span>
                  <span className="text-2xl font-heading font-bold text-emerald-500">{estROI}</span>
                </div>
              </div>

              <a
                href={`/#contact`}
                className="w-full py-4 bg-primary text-white text-center text-xs font-semibold rounded-xl hover:bg-primary-hover shadow-md shadow-primary/20 transition cursor-pointer"
              >
                Request Detailed Campaign Roadmap
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
