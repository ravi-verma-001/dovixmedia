"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";

interface Job {
  title: string;
  department: string;
  type: string;
  location: string;
  desc: string;
  perks: string[];
}

const jobs: Job[] = [
  {
    title: "Senior SEO Specialist",
    department: "Marketing Strategy",
    type: "Full-Time",
    location: "Noida (Hybrid) / Remote",
    desc: "Oversee on-page structures, technical audits, and content roadmaps for enterprise clients.",
    perks: ["Competitive salary + KPI performance bonus", "Health insurance", "Annual learning stipend"],
  },
  {
    title: "Paid Media Lead (Google & Meta)",
    department: "Advertising & Performance",
    type: "Full-Time",
    location: "Noida (Hybrid)",
    desc: "Scale lead acquisition campaigns and direct pixel event optimization structures.",
    perks: ["Profit sharing bonus", "Flexible work hours", "Modern office environment"],
  },
  {
    title: "Full-Stack Web Developer",
    department: "Development & Conversion",
    type: "Full-Time",
    location: "Remote / Hybrid",
    desc: "Build highly responsive conversion pages in Next.js and Tailwind CSS.",
    perks: ["Remote choice option", "Hardware stipend", "Wellness budget"],
  },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applied, setApplied] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      setSelectedJob(null);
      setApplied(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen">
      <MouseGlow />
      <Navbar />

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Careers</span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-900 dark:text-white mt-2 mb-4">
            Join the Dovix Media Team.
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Work with a results-oriented team of developers and search marketers. We value autonomy, clean metrics, and career development.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-gray-150 dark:border-slate-800/80">
            <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">Remote Choices</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Work from our high-end tech park hub in Noida, completely remote, or a combination of both.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-gray-150 dark:border-slate-800/80">
            <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">Continuous Learning</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              We cover courses, books, and conference tickets to support your personal growth.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-gray-150 dark:border-slate-800/80">
            <h3 className="font-heading font-semibold text-lg text-slate-800 dark:text-white mb-2">High Autonomy</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              We focus entirely on performance targets and campaign ROI rather than monitoring hours.
            </p>
          </div>
        </div>

        {/* Job Listings */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4">Open Positions</h2>
          
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md transition"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">
                  {job.department}
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-800 dark:text-white">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" /> {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {job.location}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover flex items-center gap-1 cursor-pointer"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Application Dialog Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer"
            >
              ✕
            </button>

            {applied ? (
              <div className="py-12 text-center flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mt-2">Application Submitted!</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
                  Thank you for applying. Our talent acquisition lead will review your resume and contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="flex flex-col gap-5">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-primary">{selectedJob.department}</span>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mt-1">
                    Apply for {selectedJob.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-300" htmlFor="career-name">Full Name</label>
                  <input
                    id="career-name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-300" htmlFor="career-email">Email Address</label>
                  <input
                    id="career-email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-300" htmlFor="career-resume">Resume URL / Link</label>
                  <input
                    id="career-resume"
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/username or drive link"
                    className="px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover shadow-md shadow-primary/20 transition cursor-pointer"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
