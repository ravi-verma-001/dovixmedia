"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

interface Post {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  color: string;
  svgIcon: React.ReactNode;
}

const blogPosts: Post[] = [
  {
    title: "5 SEO Strategies to Rank Higher on Google in 2026",
    category: "SEO",
    excerpt: "Discover the latest core updates and search algorithm enhancements. Learn how search intent, page structure, and schema optimization drive organic results.",
    date: "July 20, 2026",
    author: "Amit Kumar",
    readTime: "6 min read",
    color: "from-blue-600 to-indigo-650",
    svgIcon: (
      <svg className="w-8 h-8 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "How We Scaled a Dental Clinic's ROI by 200% with Meta Ads",
    category: "Paid Ads",
    excerpt: "A deep dive case study explaining lead generation campaigns, custom pixel retargeting, and copy frameworks that cut cost per lead in half.",
    date: "June 15, 2026",
    author: "Rohan Sen",
    readTime: "8 min read",
    color: "from-purple-600 to-pink-500",
    svgIcon: (
      <svg className="w-8 h-8 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    title: "The Impact of Fast Loading Next.js Web design on Conversion Rates",
    category: "Web Design",
    excerpt: "Why browser page speed remains a top factor for customer bounce rate. Read about App Router rendering models and visual structure best practices.",
    date: "May 28, 2026",
    author: "Vikram Malhotra",
    readTime: "5 min read",
    color: "from-emerald-600 to-teal-500",
    svgIcon: (
      <svg className="w-8 h-8 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen">
      <MouseGlow />
      <Navbar />

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Resources</span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2 mb-4">
            Dovix Media Blog
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Insights, tutorials, and deep-dive audits from our search marketers and conversion engineers.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-16 relative">
          <input
            type="text"
            placeholder="Search articles or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 focus:outline-none focus:border-primary text-sm"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <article
              key={idx}
              className="group rounded-3xl bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* SVG Visual Header Banner */}
                <div className={`aspect-video bg-gradient-to-br ${post.color} flex items-center justify-center relative`}>
                  {post.svgIcon}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full text-[10px] font-semibold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" /> {post.author}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-800 dark:text-white mt-1 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-gray-100 dark:border-slate-800/60">
                <span className="text-xs text-slate-400 font-mono">{post.readTime}</span>
                <a
                  href="#contact"
                  className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-hover group-hover:translate-x-0.5 transition-transform"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
