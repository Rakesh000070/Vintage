import { motion } from "motion/react";
import React from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1512690196162-458d9bc08891?auto=format&fit=crop&q=80&w=2070" 
}) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center bg-deep-charcoal overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt={title} 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/80 via-transparent to-deep-charcoal" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading text-white mb-6 uppercase tracking-tight">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-gold italic ml-4" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>
          {subtitle && (
            <p className="text-soft-ivory/60 text-lg max-w-2xl mx-auto font-light uppercase tracking-[0.2em]">
              {subtitle}
            </p>
          )}
          <div className="mt-8 h-px w-20 bg-gold mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};
