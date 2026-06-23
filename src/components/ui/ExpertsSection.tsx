import React from "react";
import { motion } from "motion/react";
import { Instagram, Linkedin } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { cn } from "../../lib/utils";
import { GlowCard } from "./spotlight-card";

const LUXURY_EASE_OUT = [0.25, 0.1, 0.25, 1];

interface Expert {
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
  bio: string;
}

const experts: Expert[] = [
  {
    name: "Priya Sharma",
    role: "Master Hair Stylist",
    experience: "12 years",
    specialty: "Color Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
    bio: "Award-winning colorist with expertise in balayage and creative coloring."
  },
  {
    name: "Rahul Verma",
    role: "Senior Stylist",
    experience: "10 years",
    specialty: "Precision Cuts",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    bio: "Trained in London, specializing in modern and classic cuts."
  },
  {
    name: "Ananya Patel",
    role: "Bridal Makeup Artist",
    experience: "8 years",
    specialty: "Bridal & Editorial",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80",
    bio: "Celebrity makeup artist known for flawless bridal transformations."
  },
  {
    name: "Vikram Singh",
    role: "Spa Therapist",
    experience: "9 years",
    specialty: "Wellness & Recovery",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80",
    bio: "Certified wellness expert delivering rejuvenating spa experiences."
  }
];

const ExpertCard: React.FC<{ expert: Expert; delay: number }> = ({ expert, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: LUXURY_EASE_OUT, delay }}
      className="group"
    >
      <GlowCard 
        glowColor="orange" 
        customSize 
        className="bg-white border-0 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(43,43,43,0.1)] p-0"
      >
        {/* Gold Accent Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: LUXURY_EASE_OUT }}
          className="absolute top-0 left-0 right-0 h-1 bg-gold z-10 origin-center"
        />

        {/* Image Section */}
        <div className="aspect-[3/4] overflow-hidden relative">
          <img
            src={expert.image}
            alt={expert.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          
          {/* Experience Badge */}
          <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm text-white text-[10px] tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-white/10">
            {expert.experience}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h3 className="font-heading text-2xl text-charcoal">{expert.name}</h3>
          <p className="font-body text-sm text-dusty-mauve tracking-[0.1em] uppercase mt-2">
            {expert.role}
          </p>
          
          <div className="flex items-center gap-2 mt-3">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <p className="font-body text-xs text-mushroom-taupe tracking-wide">
              {expert.specialty}
            </p>
          </div>

          <p className="font-body text-sm text-mushroom-taupe leading-relaxed mt-4 line-clamp-2">
            {expert.bio}
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-soft-ivory">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: "#958A90" }}
              className="text-mushroom-taupe transition-colors"
            >
              <Instagram size={18} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, color: "#958A90" }}
              className="text-mushroom-taupe transition-colors"
            >
              <Linkedin size={18} />
            </motion.a>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
};

export const ExpertsSection = () => {
  return (
    <section id="experts" className="py-32 bg-white px-6 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Meet Our Experts"
          subtitle="Our team of world-class professionals brings passion, precision, and years of expertise to every appointment."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {experts.map((expert, index) => (
            <ExpertCard key={expert.name} expert={expert} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
