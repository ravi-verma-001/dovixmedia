"use client";

import React, { useState } from "react";
import { ArrowUpRight, Eye } from "lucide-react";

interface Project {
  title: string;
  category: string;
  tech: string[];
  result: string;
  color: string;
  imageUrl?: string;
  svgGraphic?: React.ReactNode;
}

const projects: Project[] = [
  {
    title: "Meta Ads Scale — 2,767 Messaging Conversions",
    category: "Meta Ads",
    tech: ["Facebook Ads Manager", "Lead Generation", "Retargeting"],
    result: "2,767 Leads @ ₹23.52",
    color: "from-blue-900 to-slate-950",
    imageUrl: "/case-studies/meta-ads-1.jpg",
  },
  {
    title: "High-Reach Campaign — 149,759 Audience Reach",
    category: "Meta Ads",
    tech: ["Custom Audience", "Cost Per Result Optim", "Highest Volume"],
    result: "149K+ Reach @ ₹1.84",
    color: "from-indigo-900 to-slate-950",
    imageUrl: "/case-studies/meta-ads-3.jpg",
  },
  {
    title: "Engagement & Conversions Scaling Campaign",
    category: "Meta Ads",
    tech: ["Performance Ads", "Retargeting Pixel", "Daily Budget Optim"],
    result: "1,417 Conversions @ ₹7.66",
    color: "from-purple-900 to-slate-950",
    imageUrl: "/case-studies/meta-ads-2.jpg",
  },
  {
    title: "High-Converting Website & Funnel Redesign",
    category: "Web Design",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    result: "+240% Signups",
    color: "from-indigo-600 to-primary",
    imageUrl: "/case-studies/meta-ads-4.jpg",
  },
];

const categories = ["All", "Meta Ads", "Web Design", "SEO", "Google Ads"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
              Verified Case Studies
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mt-4">
              Live Ads Manager <span className="text-gradient">Results & Campaigns</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition cursor-pointer ${
                  filter === cat
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-gray-100 dark:border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image / Graphic Preview Block */}
              <div
                className={`aspect-video w-full bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center cursor-pointer`}
                onClick={() => project.imageUrl && setPreviewImage(project.imageUrl)}
              >
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  project.svgGraphic
                )}

                <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-full border border-white/10 text-white text-[10px] uppercase font-semibold tracking-wider">
                  {project.category}
                </div>
                <div className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-emerald-500 text-white font-heading font-bold text-xs rounded-xl shadow-lg">
                  {project.result}
                </div>
                {project.imageUrl && (
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-xs backdrop-blur-[2px]">
                    <Eye className="w-5 h-5" /> Click to Enlarge Dashboard
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover group-hover:translate-x-0.5 transition-transform w-fit"
                >
                  Request Campaign Case Study <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full Image View */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md cursor-pointer"
          onClick={() => setPreviewImage(null)}
        >
          <div className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img src={previewImage} alt="Ads Manager Dashboard Full View" className="w-full h-auto max-h-[85vh] object-contain" />
            <div className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-slate-900/80 text-white text-xs font-bold">
              Click anywhere to close ✕
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
