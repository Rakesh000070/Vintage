import { motion } from "motion/react";
import React from "react";
import { fadeUpVariant } from "../animations";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  accent?: boolean;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  align = "center",
  accent = true,
  light = false
}) => {
  const alignmentStyles = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-col mb-16 px-4 ${alignmentStyles[align]}`}
    >
      <h2 className={`font-heading text-4xl md:text-5xl lg:text-6xl leading-tight ${light ? "text-white" : "text-charcoal"}`}>
        {title}
      </h2>
      
      {accent && (
        <div className={`h-[2px] w-[60px] bg-dusty-mauve mt-6 ${align === "center" ? "mx-auto" : ""}`} />
      )}

      {subtitle && (
        <p className={`font-body text-lg max-w-2xl mt-6 leading-relaxed ${light ? "text-soft-ivory/80" : "text-mushroom-taupe"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
