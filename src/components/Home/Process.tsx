"use client";

import React from "react";
import { Search, Compass, Cpu, Gauge, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We analyze your website, keywords, Meta ads pixel data, and competitors to locate leaks in your sales funnel.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    step: "02",
    title: "Marketing Strategy",
    desc: "We draft a customized roadmap outlining target demographics, keyword priorities, and mockups.",
    icon: <Compass className="w-5 h-5" />,
  },
  {
    step: "03",
    title: "Launch & Execution",
    desc: "We build custom components, publish SEO articles, configure analytics, and publish the campaigns live.",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    step: "04",
    title: "A/B Optimization",
    desc: "We review search queries, test different creatives, optimize bidding thresholds, and run page speed diagnostics.",
    icon: <Gauge className="w-5 h-5" />,
  },
  {
    step: "05",
    title: "Scaling & Growth",
    desc: "We expand budgets on top performing ads, target secondary keywords, and grow your local citations.",
    icon: <Rocket className="w-5 h-5" />,
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">How We Work</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2 mb-4">
            Our 5-Step Growth Process
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            A structured, repeatable methodology designed to maximize conversions, improve visibility, and build pipeline.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative border-l border-gray-200 dark:border-slate-800 ml-4 md:ml-6 flex flex-col gap-16 max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-10 md:pl-16 group">
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-primary text-primary flex items-center justify-center font-heading font-bold text-xs shadow-md shadow-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {step.step}
              </div>

              {/* Box Content */}
              <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    {step.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg md:text-xl text-slate-800 dark:text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
