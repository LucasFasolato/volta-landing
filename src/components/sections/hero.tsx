"use client";
import { CONTENT } from "@/data/landing-content";
import { Button } from "@/components/ui/button";
import { MockPhone } from "@/components/ui/mock-phone";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Ambient Lights - The Kinetic Void */}
      <div className="glow-ambient bg-primary w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-surface-container-low ghost-border">
            <span className="flex h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_#00FF88]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              {CONTENT.hero.badge}
            </span>
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] text-white">
            {CONTENT.hero.title} <br/>
            <span className="text-primary text-glow italic">{CONTENT.hero.titleHighlight}</span>
          </h1>
          
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-lg font-body">
            {CONTENT.hero.subtitle}
          </p>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">{CONTENT.hero.ctaPrimary}</Button>
              <Button variant="secondary">{CONTENT.hero.ctaSecondary}</Button>
            </div>
            <p className="text-xs text-on-surface-variant/60 font-medium tracking-wide">
              {CONTENT.hero.microcopy}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <MockPhone />
        </motion.div>
      </div>
    </section>
  );
};