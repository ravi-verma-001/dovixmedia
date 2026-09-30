"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  // Circle progress styling
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 p-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-primary hover:text-white hover:bg-primary rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center cursor-pointer"
    >
      <svg className="w-10 h-10 transform -rotate-90">
        <circle
          cx="20"
          cy="20"
          r={radius}
          className="stroke-gray-200 dark:stroke-slate-800"
          strokeWidth="3"
          fill="transparent"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          className="stroke-primary"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute flex items-center justify-center">
        <ArrowUp className="w-4 h-4" />
      </div>
    </button>
  );
}
