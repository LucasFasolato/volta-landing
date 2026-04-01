"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CONTENT } from "@/data/landing-content";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="container-shell"
      >
        <div className="glass-panel ghost-border ambient-shadow rounded-2xl px-4 py-3 md:px-6 md:py-4">
          <nav className="flex items-center justify-between gap-4">
            <Link
              href="#top"
              className="font-headline text-lg md:text-xl font-extrabold tracking-[-0.04em] text-primary"
            >
              VOLTA
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {CONTENT.nav.links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.12em] font-bold text-on-surface-variant transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="hidden md:inline text-sm text-on-surface-variant hover:text-white transition-colors"
              >
                Login
              </Link>
              <Button variant="primary" className="px-5 py-3 text-xs md:text-sm">
                {CONTENT.nav.cta}
              </Button>
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};