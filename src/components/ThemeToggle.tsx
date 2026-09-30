"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="p-2.5 rounded-full border border-gray-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/85 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-primary transition-all duration-300 shadow-sm glass flex items-center justify-center cursor-pointer"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-slate-800" />
      ) : (
        <Sun className="w-5 h-5 text-amber-400" />
      )}
    </button>
  );
}
