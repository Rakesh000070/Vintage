import { motion } from "motion/react";
import React, { ReactNode } from "react";
import { floatVariant, fadeUpVariant } from "../animations";

interface FloatingCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  delay?: number;
  light?: boolean;
}

export const FloatingCard: React.FC<FloatingCardProps> = ({ 
  icon, 
  value, 
  label, 
  delay = 0,
  light = false
}) => {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <motion.div
        variants={floatVariant}
        animate="animate"
        className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-none shadow-2xl shadow-deep-charcoal/10 flex items-center gap-4 min-w-[200px]"
      >
        <div className={`${light ? "text-white" : "text-dusty-mauve"} shrink-0`}>
          {React.cloneElement(icon as React.ReactElement, { size: 32 })}
        </div>
        <div className="flex flex-col">
          <span className={`font-heading text-3xl ${light ? "text-white" : "text-charcoal"}`}>{value}</span>
          <span className={`font-body text-sm uppercase tracking-wider ${light ? "text-white/70" : "text-mushroom-taupe"}`}>
            {label}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};
