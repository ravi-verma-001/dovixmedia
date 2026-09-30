"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 100, suffix: "+", label: "Successful Campaigns" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "M+", label: "Impressions Generated" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, Math.max(incrementTime, 15));

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading font-extrabold text-4xl sm:text-5xl text-primary">
      {count}
      {suffix}
    </span>
  );
}

export default function TrustedBy() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/40 border-y border-gray-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-2"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
