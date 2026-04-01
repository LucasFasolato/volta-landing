"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl px-8 py-4 font-bold transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-cta text-[#003919] hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,136,0.22)]",
    secondary:
      "bg-surface-container-high text-on-surface ghost-border hover:bg-surface-container-highest",
    ghost:
      "bg-transparent text-primary uppercase tracking-[0.12em] text-xs hover:text-white",
  };

  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.985 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};