"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-800/50 shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/logo.jpg"
            alt="Dovix Media Logo"
            className="w-9 h-9 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300 border border-slate-200 dark:border-slate-800"
          />
          <span className="font-heading font-bold text-xl tracking-tight text-slate-800 dark:text-white group-hover:text-primary transition-colors">
            Dovix<span className="text-primary">Media</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => handleLinkClick(item.href)}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors relative group py-1"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA & Theme */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/#contact"
            onClick={() => handleLinkClick("/#contact")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/35 hover:bg-primary-hover hover:scale-102 transition-all duration-300 group cursor-pointer"
          >
            Book Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-800 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-slate-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white dark:bg-dark-bg z-30 p-6 flex flex-col justify-between border-t border-gray-100 dark:border-slate-800 transition-all duration-300">
          <div className="flex flex-col gap-6 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className="text-lg font-heading font-medium text-slate-800 dark:text-slate-200 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <Link
              href="/#contact"
              onClick={() => handleLinkClick("/#contact")}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/20 text-center"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
