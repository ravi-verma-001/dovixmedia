"use client";

import React, { useState } from "react";
import { CheckCircle2, TrendingUp, Sparkles, BarChart2 } from "lucide-react";

export default function Results() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const position = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX, container);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isDragging) {
      const container = e.currentTarget.getBoundingClientRect();
      handleMove(e.clientX, container);
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Results</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mt-2 mb-4">
            Campaign Results & Live Marketing Impact
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Slide to compare average performance optimization before and after partnering with Dovix Media.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Stats Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-gray-100 dark:border-slate-800 flex items-start gap-4 shadow-sm">
              <div className="p-3 bg-primary/10 text-primary rounded-2xl flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">200% ROI</h3>
                <span className="text-xs text-slate-400 font-medium">Average return across Google & Meta advertising campaigns</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-gray-100 dark:border-slate-800 flex items-start gap-4 shadow-sm">
              <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-2xl flex-shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">95% Retention</h3>
                <span className="text-xs text-slate-400 font-medium">Clients that continue working with us month-over-month</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-gray-100 dark:border-slate-800 flex items-start gap-4 shadow-sm">
              <div className="p-3 bg-accent/10 text-accent rounded-2xl flex-shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">100+ Campaigns</h3>
                <span className="text-xs text-slate-400 font-medium">Managed platforms across E-commerce, healthcare, and SaaS</span>
              </div>
            </div>
          </div>

          {/* Right Before/After Interactive Panel */}
          <div className="lg:col-span-7">
            <div
              className="relative w-full aspect-video rounded-3xl overflow-hidden border border-gray-250 dark:border-slate-800 bg-slate-950 shadow-2xl select-none cursor-ew-resize"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
            >
              {/* BEFORE: Low flat curve (Left) */}
              <div className="absolute inset-0 bg-slate-950 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1.5 bg-rose-500/20 border border-rose-500/30 text-rose-400 rounded-full font-mono text-xs uppercase font-semibold">
                    Before Strategy
                  </span>
                  <span className="text-xs font-mono text-slate-500">Low Organic Leads</span>
                </div>
                <div className="flex-grow flex items-end">
                  <svg className="w-full h-36 opacity-35" viewBox="0 0 400 200">
                    <path d="M 0,170 Q 100,165 200,172 T 400,160" fill="transparent" stroke="#F43F5E" strokeWidth="4" />
                    <circle cx="200" cy="172" r="5" fill="#F43F5E" />
                  </svg>
                </div>
                <div className="flex justify-between items-center text-xs font-mono text-slate-500 pt-4 border-t border-slate-900">
                  <span>Ad Spend: High</span>
                  <span>Conversions: 0.8%</span>
                </div>
              </div>

              {/* AFTER: High soaring curve (Right, clipped by slider) */}
              <div
                className="absolute inset-0 bg-slate-950 p-6 flex flex-col justify-between"
                style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
              >
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-full font-mono text-xs uppercase font-semibold">
                    After Dovix Media
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <BarChart2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" /> +320% Traffic
                  </span>
                </div>
                <div className="flex-grow flex items-end">
                  <svg className="w-full h-36" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="grad-green" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d="M 0,200 L 0,170 Q 120,110 240,60 T 400,15 L 400,200 Z" fill="url(#grad-green)" />
                    <path d="M 0,170 Q 120,110 240,60 T 400,15" fill="transparent" stroke="#10B981" strokeWidth="4" />
                    <circle cx="240" cy="60" r="5" fill="#10B981" />
                    <circle cx="400" cy="15" r="5" fill="#10B981" />
                  </svg>
                </div>
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 pt-4 border-t border-slate-900">
                  <span>Ad Spend: Optimized</span>
                  <span className="text-emerald-400">Conversions: 4.8%</span>
                </div>
              </div>

              {/* Slider Line handler */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              >
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg border border-white/20 select-none text-[10px] font-bold">
                  ↔
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
