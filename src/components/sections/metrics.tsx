"use client";
import { CONTENT } from "@/data/landing-content";
import { motion } from "framer-motion";

export const Metrics = () => {
  return (
    <section className="py-32 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {CONTENT.metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center space-y-2"
            >
              <div className={`text-5xl md:text-7xl font-headline font-black ${idx === 0 || idx === 3 ? 'text-primary' : 'text-white'}`}>
                {metric.value}
              </div>
              <div className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};