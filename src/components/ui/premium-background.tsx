"use client";

import { useEffect, useEffectEvent, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

type PremiumBackgroundProps = {
  className?: string;
  variant?: "hero" | "cta";
};

const INITIAL_POINTER = { x: 0.7, y: 0.28 };

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const PremiumBackground = ({
  className,
  variant = "hero",
}: PremiumBackgroundProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(INITIAL_POINTER.x);
  const pointerY = useMotionValue(INITIAL_POINTER.y);

  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 24, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 24, mass: 0.4 });

  const spotlightLeft = useTransform(smoothX, (value) => `${value * 100}%`);
  const spotlightTop = useTransform(smoothY, (value) => `${value * 100}%`);
  const centerLeft = useTransform(smoothX, (value) => `${(0.5 + (value - 0.5) * 0.22) * 100}%`);
  const centerTop = useTransform(smoothY, (value) => `${(0.46 + (value - 0.5) * 0.18) * 100}%`);

  const spotlightBackground = `radial-gradient(circle at center, rgba(0, 245, 138, ${
    variant === "hero" ? 0.12 : 0.1
  }) 0%, rgba(0, 245, 138, 0.05) 24%, rgba(255, 255, 255, 0.018) 42%, transparent 76%)`;

  const updatePointer = useEffectEvent((clientX: number, clientY: number) => {
    const rect = rootRef.current?.getBoundingClientRect();

    if (!rect || rect.width === 0 || rect.height === 0) {
      return;
    }

    const nextX = clamp((clientX - rect.left) / rect.width, 0, 1);
    const nextY = clamp((clientY - rect.top) / rect.height, 0, 1);

    pointerX.set(nextX);
    pointerY.set(nextY);
  });

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updatePointer(event.clientX, event.clientY);
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [pointerX, pointerY, reduceMotion]);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_38%),linear-gradient(180deg,rgba(8,10,14,0.1),rgba(8,10,14,0.82))]" />
      <div className="fine-grid absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(circle_at_center,black,transparent_92%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />

      <motion.div
        className={cn(
          "absolute h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]",
          variant === "cta" && "h-[30rem] w-[30rem]",
        )}
        style={{
          left: spotlightLeft,
          top: spotlightTop,
          background: spotlightBackground,
        }}
      />

      <motion.div
        className={cn(
          "absolute h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[170px]",
          variant === "cta" && "h-[21rem] w-[21rem]",
        )}
        style={{
          left: centerLeft,
          top: centerTop,
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 34%, transparent 72%)",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8 bg-white/[0.02]" />
      <div className="absolute inset-x-[18%] top-[20%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-[16%] right-[10%] h-40 w-40 rounded-full bg-primary/4 blur-[150px]" />
      <div className="absolute left-[8%] top-[52%] h-52 w-52 rounded-full bg-accent-blue/5 blur-[180px]" />
    </div>
  );
};
