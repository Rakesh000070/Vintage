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
      {/* Subtle Texture/Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-soft-ivory/50 to-transparent pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-dusty-mauve mb-6 block">
              OUR STORY
            </span>
            
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal leading-tight">
              Where Timeless Craftsmanship <br className="hidden md:block" /> Meets Modern Beauty
            </h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="w-16 h-0.5 bg-dusty-mauve mt-8 origin-left"
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 space-y-8"
            >
              <motion.p
                variants={fadeUpVariant}
                className="font-body text-mushroom-taupe text-lg leading-relaxed font-light"
              >
                Founded with a passion for excellence, Vintage Barber is more than a salon — 
                it's a sanctuary where artistry and precision converge. We believe that true 
                beauty lies in the details, and every service we offer reflects our 
                unwavering commitment to quality.
              </motion.p>
              
              <motion.p
                variants={fadeUpVariant}
                className="font-body text-mushroom-taupe text-lg leading-relaxed font-light"
              >
                Our team of seasoned professionals brings years of international experience 
                to every appointment, ensuring that each visit is a personalized journey 
                toward looking and feeling your absolute best.
              </motion.p>
            </motion.div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-12 mt-12">
              <StatItem number="10+" label="Years" />
              <StatItem number="5000+" label="Clients" />
              <StatItem number="15+" label="Experts" />
            </div>

            <div className="mt-12">
              <Button 
                variant="outline" 
                size="lg"
                className="border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white transition-all uppercase tracking-widest text-[10px]"
              >
                Discover Our Story
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Images */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image with GlowCard */}
            <div className="relative z-10">
              <GlowCard 
                glowColor="purple" 
                customSize 
                className="bg-transparent border-0 rounded-sm overflow-hidden shadow-2xl shadow-mushroom-taupe/20 inline-block p-0"
              >
                <div className="aspect-[3/4] w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=2070" 
                    alt="Luxury Salon Interior"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </GlowCard>
            </div>

            {/* Accent Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-12 -right-12 z-20 w-40 md:w-48 aspect-square rounded-sm overflow-hidden border-4 border-white shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1553521042-880643206e94?auto=format&fit=crop&q=80&w=1000" 
                alt="Salon Detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Decorative Gold Border */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-dusty-mauve/30 -z-10 translate-x-3 translate-y-3" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
