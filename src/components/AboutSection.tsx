import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";
import { Button } from "./Button";
import { slideInLeft, slideInRight, fadeUpVariant, staggerContainer } from "../animations";
import { GlowCard } from "./ui/spotlight-card";

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const numericPart = parseInt(number);
  const suffix = number.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericPart, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, numericPart]);

  return (
    <div ref={ref} className="flex flex-col">
      <div className="font-heading text-4xl text-charcoal flex items-baseline">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <span className="font-body text-xs tracking-[0.2em] uppercase text-mushroom-taupe mt-2">
        {label}
      </span>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="py-32 px-6 bg-white relative overflow-hidden"
    >
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none transition-opacity duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Subtle Texture/Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-soft-ivory/30 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Visual Storytelling (5 cols) */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-sm overflow-hidden shadow-[30px_30px_0px_0px_rgba(184,175,173,0.1)] transition-transform duration-700 group-hover:shadow-[40px_40px_0px_0px_rgba(184,175,173,0.15)]">
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070" 
                  alt="Vintage Barber Mastercourse"
                  className="w-full h-[600px] object-cover scale-105 transition-transform duration-1000 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-deep-charcoal/10" />
              </div>

              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-10 -right-10 md:right-10 z-20 bg-white p-8 shadow-2xl border border-soft-ivory max-w-[240px]"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-heading text-5xl text-gold">1892</span>
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase text-mushroom-taupe/80 leading-relaxed">
                    Established Excellence in the Heart of Brahmapur
                  </span>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l border-t border-gold/30" />
            </div>
          </motion.div>

          {/* Right Column: Narrative (7 cols) */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 lg:pl-16 flex flex-col"
          >
            <div className="space-y-12">
              <div className="space-y-6">
                <motion.span 
                  className="font-body text-xs tracking-[0.3em] uppercase text-gold font-semibold flex items-center gap-4"
                >
                  <span className="w-8 h-px bg-gold/30" />
                  THE SANCTUARY OF STYLE
                </motion.span>
                
                <h2 className="font-heading text-4xl md:text-6xl text-deep-charcoal leading-[1.1] tracking-tight">
                  Where Heritage <br />
                  <span className="text-mushroom-taupe italic">Meets Modern Artistry</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                <motion.div variants={fadeUpVariant} className="space-y-4">
                  <h3 className="font-heading text-xl text-deep-charcoal tracking-wide uppercase">Our Heritage</h3>
                  <p className="font-body text-mushroom-taupe leading-relaxed text-sm font-light">
                    Founded in 1892, Vintage Barber has served generations of gentlemen with a commitment to precision. We carry the soul of traditional grooming into the modern age.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariant} className="space-y-4 text-deep-charcoal">
                  <h3 className="font-heading text-xl tracking-wide uppercase">Our Philosophy</h3>
                  <p className="font-body text-mushroom-taupe leading-relaxed text-sm font-light">
                    We don't just cut hair; we curate identities. Every stroke of the blade and every custom blend is a tribute to the individual refinement of our clients.
                  </p>
                </motion.div>
              </div>

              <motion.div 
                variants={staggerContainer}
                className="flex flex-wrap items-center gap-10 pt-8"
              >
                <div className="flex flex-col">
                  <span className="font-heading text-3xl text-deep-charcoal">30k+</span>
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-mushroom-taupe/60">Grooming Mastered</span>
                </div>
                <div className="w-px h-12 bg-soft-ivory hidden sm:block" />
                <div className="flex flex-col">
                  <span className="font-heading text-3xl text-deep-charcoal">15</span>
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-mushroom-taupe/60">Master Artisans</span>
                </div>
                <div className="w-px h-12 bg-soft-ivory hidden sm:block" />
                <div className="flex flex-col">
                  <span className="font-heading text-3xl text-deep-charcoal">9+</span>
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-mushroom-taupe/60">Decades of Legacy</span>
                </div>
              </motion.div>

              <div className="pt-10 flex flex-col sm:flex-row items-center gap-8">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-deep-charcoal/10 text-deep-charcoal hover:bg-deep-charcoal hover:text-white transition-all duration-700 uppercase tracking-widest text-[10px] w-full sm:w-auto"
                >
                  The Full Experience
                </Button>
                
                <div className="flex items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                  <span className="font-heading text-lg tracking-widest text-deep-charcoal">Vintage Barber</span>
                  <span className="font-body text-[10px] uppercase tracking-tighter text-mushroom-taupe italic">Signature Selection</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
