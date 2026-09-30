"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 via-primary to-slate-900 text-white p-8 md:p-16 shadow-2xl text-center flex flex-col items-center gap-6">
          {/* Ambient overlays */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

          <span className="text-sm font-semibold uppercase tracking-widest text-primary/30 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            Partner With Us
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight max-w-2xl relative z-10">
            Let&apos;s Grow Your Business Together.
          </h2>

          <p className="text-sm sm:text-base text-indigo-100 max-w-lg leading-relaxed opacity-90 relative z-10">
            Ready to rank higher on search, optimize advertising spend, and build a high-performance, pixel-perfect website? Get in touch today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 relative z-10">
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary font-bold shadow-lg hover:bg-slate-50 transition cursor-pointer"
            >
              Book Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold transition cursor-pointer"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
