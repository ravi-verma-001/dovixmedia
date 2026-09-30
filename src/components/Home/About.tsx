"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
            Grow Your Visibility & Scale Leads Online
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Dovix Media is a results-focused digital marketing agency. We combine creative brand storytelling with data-backed search strategies to bring you real conversions.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-heading font-semibold text-2xl text-slate-800 dark:text-white">
              Who We Are
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We are a team of passionate developers, conversion strategists, and advertising specialists. We don&apos;t just chase impressions; we optimize campaigns for revenue and client growth.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We have successfully managed **100+ Meta Ads campaigns** and worked with businesses across multiple industries, helping them generate high-quality leads, improve local search visibility, and scale online operations.
            </p>
            
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-4 mt-2">
              <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading font-semibold text-slate-800 dark:text-white mb-1">
                  Why Clients Trust Us
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  We maintain full transparency with clear dashboard reports. You always know exactly where your marketing budget goes and what ROI it produces.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Mission & Vision Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-slate-800 dark:text-white">
                Our Mission
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                To build digital-first solutions that help businesses convert visits into sales, scale client acquisition, and achieve sustainable ROI.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-semibold text-lg text-slate-800 dark:text-white">
                Our Vision
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                To be the industry standard for high-converting websites and scalable search and social media advertising strategies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
