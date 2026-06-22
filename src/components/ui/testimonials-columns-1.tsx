"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import { GlowCard } from "./spotlight-card";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  className,
  testimonials,
  duration = 10,
}) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <GlowCard 
                key={`${index}-${i}`}
                glowColor="blue" 
                customSize 
                className="p-8 rounded-sm border border-mushroom-taupe/20 bg-white shadow-sm hover:shadow-xl transition-all duration-500 max-w-xs w-full group"
              >
                <div className="text-mushroom-taupe font-body text-sm leading-relaxed italic mb-6">
                  "{text}"
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative h-10 w-10">
                    <img
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-gold/30"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="font-heading text-charcoal text-sm font-semibold tracking-tight">
                      {name}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-dusty-mauve font-medium">
                      {role}
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
