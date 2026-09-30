"use client";

import React, { useState } from "react";
import { Layout, Search, Megaphone, Target, MapPin, Share2, ArrowRight, X, Gauge, TrendingUp, Star, Zap } from "lucide-react";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
}

const servicesList: Service[] = [
  {
    id: "web-design",
    icon: <Layout className="w-5 h-5" />,
    title: "High-Converting Web Design",
    desc: "Bespoke, ultra-fast websites built from scratch in Next.js & Tailwind. We design funnels optimized to convert visitors into paying clients.",
    features: ["Responsive Web Design", "Landing Pages", "Business Sites", "E-commerce Stores", "UI/UX Figma Design", "Website Redesign"],
  },
  {
    id: "seo",
    icon: <Search className="w-5 h-5" />,
    title: "Search Engine Optimization (SEO)",
    desc: "Dominate Google search results and drive high-intent organic traffic that compounds over time without paying per click.",
    features: ["Technical SEO Audits", "On-Page Keyword Optimization", "High-Authority Link Building", "Content Strategy", "SEO Audits"],
  },
  {
    id: "meta-ads",
    icon: <Target className="w-5 h-5" />,
    title: "Meta Ads (Facebook & Instagram)",
    desc: "Scale brand awareness and drive targeted lead generation campaigns with high-converting creative ad copy and custom pixel retargeting.",
    features: ["Facebook & Instagram Ads", "Lead Generation Funnels", "Custom Audience Retargeting", "Creative Ad Design", "A/B Copy Testing"],
  },
  {
    id: "google-ads",
    icon: <Megaphone className="w-5 h-5" />,
    title: "Google PPC Ads",
    desc: "Capture active buyers at the exact second they search for your service on Google with optimized Search & Performance Max campaigns.",
    features: ["Search Ads", "Display Retargeting", "Performance Max", "Conversion Tracking", "Negative Keyword Filtering"],
  },
  {
    id: "local-seo",
    icon: <MapPin className="w-5 h-5" />,
    title: "Local SEO & Google Maps",
    desc: "Be the top-rated local business in your city for Google Maps searches and local directory queries.",
    features: ["Google Business Profile", "Maps Ranking #1", "Local Citations", "Reviews System", "Local Landing Pages"],
  },
  {
    id: "social-media",
    icon: <Share2 className="w-5 h-5" />,
    title: "Social Media Growth",
    desc: "Build a highly engaged audience, produce high-performing Reels, and execute monthly brand growth strategies.",
    features: ["Instagram & FB Management", "Reels & Creative Design", "Content Strategy", "Monthly Growth Tracking"],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 bg-white dark:bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            What We Do
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mt-4 mb-4">
            Capabilities That Drive <span className="text-gradient">Real Revenue.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            We don&apos;t do generic marketing. Every service is built around a single target: increasing your profit margin.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Web Design (Featured Wide 8 Cols) */}
          <div className="md:col-span-8 rounded-3xl bento-card p-8 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 text-white border-slate-800">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-primary/20 text-primary flex items-center justify-center border border-primary/30">
                  <Layout className="w-5 h-5" />
                </div>
                {/* Speed Meter Widget */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-xs text-emerald-400 font-mono">
                  <Gauge className="w-4 h-4 text-emerald-400" />
                  <span>99/100 Speed Score</span>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  High-Converting Web Design
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                  Bespoke, ultra-fast websites built from scratch in Next.js & Tailwind. We design funnels optimized to convert visitors into paying clients.
                </p>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 my-6 relative z-10">
              {["Next.js", "Figma UI/UX", "Landing Pages", "E-commerce", "0.4s Load Time"].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium border border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
              <button
                onClick={() => setSelectedService(servicesList[0])}
                className="text-xs font-semibold text-primary hover:text-white flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                Explore Web Capabilities <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Meta Ads (4 Cols) */}
          <div className="md:col-span-4 rounded-3xl bento-card p-8 flex flex-col justify-between group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                  3.4x ROAS
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2">
                  Meta Ads Campaigns
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  Scale lead generation and customer sales across Facebook & Instagram with high-converting creative ad copy.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-slate-800/80 mt-6">
              <button
                onClick={() => setSelectedService(servicesList[2])}
                className="text-xs font-semibold text-primary flex items-center gap-1 cursor-pointer"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: SEO (4 Cols) */}
          <div className="md:col-span-4 rounded-3xl bento-card p-8 flex flex-col justify-between group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-xs text-primary font-bold">
                  <TrendingUp className="w-3.5 h-3.5" /> #1 Rank
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2">
                  Organic SEO & Ranking
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  Dominate Google search queries and capture high-intent buyers without paying per click.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-slate-800/80 mt-6">
              <button
                onClick={() => setSelectedService(servicesList[1])}
                className="text-xs font-semibold text-primary flex items-center gap-1 cursor-pointer"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Google PPC (4 Cols) */}
          <div className="md:col-span-4 rounded-3xl bento-card p-8 flex flex-col justify-between group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Megaphone className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold">
                  High-Intent PPC
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2">
                  Google Search Ads
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  Target active buyers looking for your specific service with high-converting search campaigns.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-slate-800/80 mt-6">
              <button
                onClick={() => setSelectedService(servicesList[3])}
                className="text-xs font-semibold text-primary flex items-center gap-1 cursor-pointer"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 5: Local SEO & Social (4 Cols) */}
          <div className="md:col-span-4 rounded-3xl bento-card p-8 flex flex-col justify-between group">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" /> 5-Star Local
                </div>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2">
                  Local SEO & Maps
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                  Be the top local choice in your city for Google Maps searches and customer directory listings.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-slate-800/80 mt-6">
              <button
                onClick={() => setSelectedService(servicesList[4])}
                className="text-xs font-semibold text-primary flex items-center gap-1 cursor-pointer"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/70 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                {selectedService.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                {selectedService.title}
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.desc}
            </p>
            <div className="border-t border-gray-100 dark:border-slate-800 pt-6">
              <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-400 mb-4">
                What We Deliver:
              </h4>
              <ul className="grid grid-cols-2 gap-3">
                {selectedService.features.map((feature, i) => (
                  <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex justify-end">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="px-6 py-3 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-md shadow-primary/20 cursor-pointer"
              >
                Inquire About Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
