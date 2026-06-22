import { motion } from "motion/react";
import React from "react";
import { Users, Award, Sparkles } from "lucide-react";
import { Button } from "./Button";
import { FloatingCard } from "./FloatingCard";
import { textRevealVariant, fadeUpVariant, fadeInVariant } from "../animations";

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-deep-charcoal via-charcoal to-dusty-mauve"
    >
      {/* Video Background */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074"
        >
          <source 
            src="https://cdn.pixabay.com/vimeo/459200000/barber-51347.mp4?width=1280&hash=85040e9496695286466795447a964344e78e6c8b" 
            type="video/mp4" 
          />
        </video>
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="overflow-hidden">
          <motion.h1
            variants={textRevealVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-white tracking-wide leading-tight"
          >
            Beauty Crafted <br />
            <span className="text-gold italic">With Precision</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="w-16 h-0.5 bg-dusty-mauve mx-auto mt-8 origin-center"
        />

        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto mt-8 font-light leading-relaxed"
        >
          Experience luxury salon services designed to enhance your confidence and style.
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <Button 
              variant="secondary" 
              size="lg"
              href="/booking"
              className="bg-white text-charcoal px-10 py-4 text-xs tracking-[0.2em] hover:bg-soft-ivory"
            >
              Book Appointment
            </Button>
          </motion.div>
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              href="/services"
              className="border border-white/50 text-white px-10 py-4 text-xs tracking-[0.2em] hover:bg-white/10"
            >
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Metric Cards */}
      <div className="absolute bottom-24 left-0 right-0 z-20">
        <div className="max-w-5xl mx-auto flex justify-center gap-6 flex-wrap px-6">
          <FloatingCard 
            icon={<Users className="text-white" />} 
            value="5000+" 
            label="Happy Clients" 
            delay={1.4} 
            light
          />
          <FloatingCard 
            icon={<Award className="text-white" />} 
            value="10+" 
            label="Years Experience" 
            delay={1.6} 
            light
          />
          <FloatingCard 
            icon={<Sparkles className="text-white" />} 
            value="Premium" 
            label="Beauty Experts" 
            delay={1.8} 
            light
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <div className="w-px h-16 bg-white/30 relative overflow-hidden">
          <motion.div
            animate={{ 
              y: [-16, 64],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1 h-2 bg-gold absolute top-0 -left-[1.5px]"
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium">Scroll</span>
      </motion.div>
    </section>
  );
};
