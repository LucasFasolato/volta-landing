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

  const smoothX = useSpring(pointerX, { stiffness: 58, damping: 24, mass: 0.52 });
  const smoothY = useSpring(pointerY, { stiffness: 58, damping: 24, mass: 0.52 });

  const centerLeft = useTransform(smoothX, (value) => `${(0.5 + (value - 0.5) * 0.18) * 100}%`);
  const centerTop = useTransform(smoothY, (value) => `${(0.46 + (value - 0.5) * 0.14) * 100}%`);

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
          "absolute h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[132px]",
          variant === "cta" && "h-[19rem] w-[19rem] blur-[112px]",
        )}
        style={{
          left: centerLeft,
          top: centerTop,
          background:
            "radial-gradient(circle at center, rgba(0,245,138,0.12) 0%, rgba(0,245,138,0.065) 22%, rgba(112,255,191,0.028) 44%, rgba(7,9,13,0.02) 58%, transparent 76%)",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8 bg-white/[0.02]" />
      <div className="absolute inset-x-[18%] top-[20%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-[16%] right-[10%] h-40 w-40 rounded-full bg-primary/3 blur-[170px]" />
      <div className="absolute left-[8%] top-[52%] h-52 w-52 rounded-full bg-accent-blue/3 blur-[200px]" />
    </div>
  );
};
