import { Quote } from "lucide-react";
import React, { useState, useEffect } from "react";
import { SectionHeader } from "./SectionHeader";
import { motion, AnimatePresence } from "motion/react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Edward Harrington",
      role: "Client since 2018",
      content: "The level of attention to detail at Vintage Barber is simply unmatched. It's the only place where I feel the artisan truly understands the architecture of a silhouette.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Sebastian Vane",
      role: "Bridal Client",
      content: "For my wedding day, I needed something exceptional. The master artisans delivered a look that was timeless, sophisticated, and perfectly executed.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "William Thorne",
      role: "Executive Member",
      content: "The atmosphere alone is worth the visit. It's a true sanctuary where you can disconnect and emerge feeling refreshed and sharp. A masterclass in luxury service.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-deep-charcoal relative overflow-hidden">
      {/* Background Icon Decoration */}
      <Quote size={400} className="absolute -top-20 -left-20 text-white/5 rotate-12 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          light
          title="Words of Radiance"
          subtitle="Discover what the modern gentleman has to say about the Vintage Barber experience."
        />

        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-8">
                <Quote size={48} className="text-gold opacity-50" />
              </div>
              
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading text-soft-ivory leading-relaxed italic mb-12">
                "{testimonials[index].content}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonials[index].image} 
                  alt={testimonials[index].name} 
                  className="w-16 h-16 rounded-full border-2 border-gold object-cover"
                />
                <div className="text-left">
                  <div className="text-gold font-bold text-lg">{testimonials[index].name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-soft-ivory/40">{testimonials[index].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 transition-all duration-500 rounded-full ${
                i === index ? "w-12 bg-gold" : "w-6 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
