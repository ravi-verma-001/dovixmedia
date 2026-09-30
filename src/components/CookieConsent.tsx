"use client";

import React, { useEffect, useState } from "react";

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const isConsentSaved = localStorage.getItem("cookieConsent");
    if (!isConsentSaved) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-50 p-5 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 glass shadow-2xl flex flex-col gap-4">
      <div>
        <h4 className="font-heading font-semibold text-lg text-slate-800 dark:text-white">Cookie Preferences</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          We use cookies to improve your browsing experience, serve personalized ads, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
        </p>
      </div>
      <div className="flex gap-3 justify-end">
        <button
          onClick={handleAccept}
          className="px-4 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium transition cursor-pointer"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-2 text-xs rounded-xl bg-primary text-white hover:bg-primary-hover font-semibold shadow-md shadow-primary/20 transition cursor-pointer"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
