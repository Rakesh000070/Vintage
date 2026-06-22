import React from "react";
import { SectionHeader } from "./SectionHeader";
import { motion } from "motion/react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";

const testimonials = [
  {
    text: "The level of attention to detail at Vintage Barber is simply unmatched. It's the only place where I feel the artisan truly understands the architecture of a silhouette.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    name: "Edward Harrington",
    role: "Client since 2018",
  },
  {
    text: "For my wedding day, I needed something exceptional. The master artisans delivered a look that was timeless, sophisticated, and perfectly executed.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    name: "Sebastian Vane",
    role: "Bridal Client",
  },
  {
    text: "The atmosphere alone is worth the visit. It's a true sanctuary where you can disconnect and emerge feeling refreshed and sharp. A masterclass in luxury service.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    name: "William Thorne",
    role: "Executive Member",
  },
  {
    text: "Every visit is a ritual. The precision, the ambiance, and the sheer talent of the barbers here sets a new global standard for grooming.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    name: "Alexander Sterling",
    role: "Creative Director",
  },
  {
    text: "A sanctuary for the modern gentleman. The spa treatments paired with the heritage grooming techniques provide an unparalleled experience.",
    image: "https://images.unsplash.com/photo-1506794778242-91f21bc273ca?w=200&q=80",
    name: "Julian Moretti",
    role: "Fashion Curator",
  },
  {
    text: "The commitment to the craft is visible in every movement. I've never felt more confident leaving a barber shop. Simply exquisite.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&q=80",
    name: "Marcus Vance",
    role: "Hotelier",
  },
  {
    text: "Luxury is in the details, and they have mastered every single one. From the straight razor finish to the post-service care.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=200&q=80",
    name: "Robert Blackwood",
    role: "Managing Director",
  },
  {
    text: "Transcends the traditional barber experience. It's a club where craftsmanship and heritage meet modern lifestyle and wellness.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    name: "David Sterling",
    role: "Entrepreneur",
  },
  {
    text: "The master barbers here are artists. They don't just cut hair; they sculpt your identity with incredible precision and care.",
    image: "https://images.unsplash.com/photo-1542343633-ce3256525ee3?w=200&q=80",
    name: "Jonathan Wright",
    role: "Wellness Consultant",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-32 bg-soft-ivory overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <SectionHeader 
            title="Voices of Radiance"
            subtitle="Discover what the modern gentleman has to say about the Vintage Barber experience."
            align="center"
          />
        </motion.div>

        <div className="flex justify-center gap-8 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[800px] pointer-events-none md:pointer-events-auto">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block" 
            duration={32} 
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block" 
            duration={28} 
          />
        </div>
      </div>

      {/* Subtle Noise Texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    </section>
  );
};
