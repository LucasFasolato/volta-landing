"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CONTENT } from "@/data/landing-content";

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="container-shell"
      >
        <div className="glass-panel ambient-shadow rounded-[1.45rem] border border-white/10 px-4 py-3 md:px-6">
          <nav className="flex items-center justify-between gap-4">
            <Link
              href="#top"
              className="flex items-center gap-3 text-white transition-opacity hover:opacity-90"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[0.72rem] font-bold tracking-[0.24em] text-primary">
                V
              </span>
              <span className="font-headline text-lg font-bold tracking-[-0.05em] md:text-xl">
                VOLTA
              </span>
            </Link>

            <div className="hidden items-center gap-7 lg:flex">
              {CONTENT.nav.links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-on-surface-variant transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Button href="#demo" variant="primary" className="px-5 py-3 text-xs md:text-sm">
              {CONTENT.nav.cta}
            </Button>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};
