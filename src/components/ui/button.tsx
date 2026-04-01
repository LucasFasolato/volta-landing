"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export const Button = ({
  variant = "primary",
  className,
  children,
  href,
  type = "button",
  onClick,
  target,
  rel,
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-[-0.02em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants = {
    primary:
      "bg-gradient-cta text-[#062316] shadow-[0_14px_44px_rgba(0,245,138,0.18)] hover:-translate-y-0.5 hover:shadow-[0_18px_52px_rgba(0,245,138,0.22)]",
    secondary:
      "ghost-border bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]",
    ghost:
      "bg-transparent px-0 text-on-surface-variant hover:text-white",
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        whileTap={{ scale: 0.985 }}
        className={cn(baseStyles, variants[variant], className)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.985 }}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </motion.button>
  );
};
