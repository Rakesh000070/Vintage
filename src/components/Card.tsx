import { motion } from "motion/react";
import React, { ReactNode } from "react";
import { fadeInVariant } from "../animations";
import { GlowCard } from "./ui/spotlight-card";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "elevated";
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = "", 
  variant = "default",
  delay = 0 
}) => {
  const variants = {
    default: "bg-white border-mushroom-taupe/20",
    glass: "bg-white/60 backdrop-blur-xl border-white/30",
    elevated: "bg-white shadow-lg shadow-mushroom-taupe/10 border-mushroom-taupe/10",
  };

  return (
    <motion.div
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(184, 175, 173, 0.2)" }}
      className={`transition-all duration-500 rounded-none h-full ${className}`}
    >
      <GlowCard 
        glowColor="blue" 
        customSize 
        className={`p-8 h-full rounded-none border !bg-transparent ${variants[variant]}`}
      >
        {children}
      </GlowCard>
    </motion.div>
  );
};
