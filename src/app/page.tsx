"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import TrustedBy from "@/components/Home/TrustedBy";
import About from "@/components/Home/About";
import FounderNote from "@/components/Home/FounderNote";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Portfolio from "@/components/Home/Portfolio";
import Results from "@/components/Home/Results";
import Process from "@/components/Home/Process";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/Home/FAQ";
import CTASection from "@/components/Home/CTASection";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import MouseGlow from "@/components/MouseGlow";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Interactive mouse background glow spotlight */}
      <MouseGlow />

      {/* Primary Sticky Header navigation */}
      <Navbar />

      <main>
        {/* Full-screen conversion hero */}
        <Hero />

        {/* Counter accomplishments section */}
        <TrustedBy />

        {/* Brand context and vision */}
        <About />

        {/* Authentic Founder's letter & guarantee */}
        <FounderNote />

        {/* Bento Grid services overview */}
        <Services />

        {/* Side-by-side agency comparison matrix */}
        <WhyChooseUs />

        {/* Project grid with category filtering */}
        <Portfolio />

        {/* Interactive KPI traffic before/after comparison tool */}
        <Results />

        {/* Detailed 5-step roadmap flow */}
        <Process />

        {/* Realistic WhatsApp & Slack chat reviews */}
        <Testimonials />

        {/* Animated accordions */}
        <FAQ />

        {/* High-conversion banner */}
        <CTASection />

        {/* Complete validation fields form */}
        <Contact />
      </main>

      {/* Rich navigation footer */}
      <Footer />

      {/* Floating CTA features */}
      <FloatingWhatsApp />
      <BackToTop />
      <CookieConsent />
    </div>
  );
}
