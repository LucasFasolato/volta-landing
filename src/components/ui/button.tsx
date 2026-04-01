import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
}

export const Button = ({ variant = "primary", className, children, ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl px-8 py-4";
  
  const variants = {
    primary: "bg-gradient-cta text-[#003919] hover:shadow-[0_0_40px_rgba(0,255,136,0.3)] hover:scale-[1.02]",
    secondary: "bg-surface-container-highest ghost-border text-on-surface hover:bg-surface-container-highest/80",
    ghost: "text-primary tracking-widest uppercase text-xs hover:text-white"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};