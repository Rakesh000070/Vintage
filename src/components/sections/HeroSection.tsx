import { motion, useReducedMotion } from "motion/react";
import React, { useState, useEffect } from "react";
import { Users, Award, Sparkles, Scissors, Crown, Compass, ArrowRight } from "lucide-react";
import { Button } from "../Button";
import { BorderRotate } from "../ui/animated-gradient-border";

const LUXURY_EASE_OUT = [0.25, 0.1, 0.25, 1];
const LUXURY_EASE_ELASTIC = [0.22, 1, 0.36, 1];

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const revealVariant = (delay: number, duration: number = 0.8, y: number = 20) => ({
    hidden: { opacity: 0, y },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: shouldReduceMotion ? 0 : delay, 
        duration: shouldReduceMotion ? 0.01 : duration, 
        ease: LUXURY_EASE_OUT 
      }
    }
  });

  const headlineVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : 0.4 + i * 0.1,
        duration: shouldReduceMotion ? 0.01 : 1.2,
        ease: LUXURY_EASE_ELASTIC,
      },
    }),
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 1. Fullscreen Video Hero */}
      <section 
        id="home" 
        className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-deep-charcoal scroll-mt-24"
      >
        {/* Video Background */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "alternate" }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2400"
          >
            <source 
              src="https://cdn.pixabay.com/vimeo/459200000/barber-51347.mp4?width=1280&hash=85040e9496695286466795447a964344e78e6c8b" 
              type="video/mp4" 
            />
          </video>
        </motion.div>

        {/* Multi-stop Gradient Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: LUXURY_EASE_OUT }}
          className="absolute inset-0 z-10 bg-gradient-to-b from-[#141310]/50 via-[#141310]/55 via-[#141310]/60 to-[#141310]/55" 
        />

        {/* Content Container */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow Label */}
          <motion.div
            variants={revealVariant(0.2, 0.7, -20)}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="text-gold">✦</span>
            <span className="text-white text-[11px] md:text-[13px] tracking-[0.4em] uppercase font-body font-normal">
              Luxury Salon
            </span>
            <span className="text-gold">✦</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-heading text-white leading-[1.05] tracking-tight mb-8">
            {["Beauty", "Crafted", "With", "Precision"].map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={headlineVariant}
                initial="hidden"
                animate="visible"
                className="inline-block break-words mx-[0.15em] text-[clamp(2.5rem,10vw,4rem)] lg:text-[clamp(3rem,8vw,6.5rem)]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Gold Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: LUXURY_EASE_OUT }}
            className="w-24 md:w-32 h-px bg-gold mx-auto mb-8 origin-center"
          />

          {/* Subheadline */}
          <motion.p
            variants={revealVariant(1.0, 0.9, 30)}
            initial="hidden"
            animate="visible"
            className="font-body text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed text-[clamp(0.9rem,2vw,1rem)] lg:text-[clamp(1rem,1.8vw,1.25rem)]"
          >
            Experience luxury salon services designed to enhance your confidence and style.
          </motion.p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-12">
            <motion.div
              variants={revealVariant(1.4, 0.7, 20)}
              initial="hidden"
              animate="visible"
              whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
              className="w-full sm:w-auto"
            >
              <Button 
                variant="secondary" 
                href="/booking"
                className="bg-white text-charcoal w-full sm:w-auto h-[52px] md:h-[60px] px-8 md:px-12 text-[12px] md:text-[13px] tracking-[0.2em] uppercase rounded-sm font-semibold hover:bg-[#F5F3F0] transition-colors shadow-lg shadow-white/5 border border-transparent"
              >
                Book Appointment
              </Button>
            </motion.div>
            <motion.div
              variants={revealVariant(1.6, 0.7, 20)}
              initial="hidden"
              animate="visible"
              whileHover={!shouldReduceMotion ? { scale: 1.03 } : {}}
              whileTap={!shouldReduceMotion ? { scale: 0.97 } : {}}
              className="w-full sm:w-auto"
            >
              <Button 
                variant="outline" 
                href="/services"
                className="border border-white/40 text-white w-full sm:w-auto h-[52px] md:h-[60px] px-8 md:px-12 text-[12px] md:text-[13px] tracking-[0.2em] uppercase rounded-sm font-semibold hover:bg-white/10 hover:border-white transition-all ml-0"
              >
                Explore Services
              </Button>
            </motion.div>
          </div>
        </div>

        

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.6, ease: LUXURY_EASE_OUT }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        >
          <div className="w-[1px] h-12 md:h-16 bg-white/30 relative overflow-hidden">
            <motion.div
              animate={{ 
                top: ["-10%", "100%"],
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: LUXURY_EASE_OUT 
              }}
              className="w-[1px] h-4 bg-white/80 absolute left-0"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-body">Scroll To Explore</span>
        </motion.div>
      </section>

      {/* 2. Brand Introduction */}
      <section className="py-32 bg-soft-ivory text-center px-6 relative border-b border-charcoal/5">
        <div className="max-w-4xl mx-auto space-y-10 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.4em] text-xs font-semibold block"
          >
            Welcome to the Sanctuary
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading text-charcoal leading-tight"
          >
            The Pinnacle of <br /> vintage Barber
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-mushroom-taupe leading-relaxed text-xl font-light max-w-3xl mx-auto"
          >
            Located in the heart of Brahmapur since 1892, Vintage Barber has served 
            generations of gentlemen with a commitment to precision, tradition, 
            and modern artistry. We don't just cut hair; we curate identities.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-8"
          >
             <div className="w-12 h-0.5 bg-gold/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* 3. Featured Highlights */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
             {[
               { icon: <Scissors className="text-gold w-6 h-6" />, title: "Master Artistry", desc: "Our barbers are masters of their craft, blending traditional techniques with contemporary vision." },
               { icon: <Crown className="text-gold w-6 h-6" />, title: "Premium Comfort", desc: "Relax in our hand-stitched leather chairs and enjoy a curated selection of fine whiskey." },
               { icon: <Compass className="text-gold w-6 h-6" />, title: "Global Standards", desc: "From London to Tokyo, we bring the world's most refined grooming standards to your doorstep." }
             ].map((highlight, i) => (
              <BorderRotate
                key={i}
                animationSpeed={8}
                borderRadius={2}
                borderWidth={1}
                backgroundColor="#ffffff"
                gradientColors={{
                  primary: '#C6A46A',
                  secondary: '#D8D4D1',
                  accent: '#B8AFAD'
                }}
                className="group w-full h-full"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-6 p-8"
                >
                  <div className="w-12 h-12 bg-soft-ivory flex items-center justify-center rounded-sm">
                    {highlight.icon}
                  </div>
                  <h3 className="text-2xl font-heading text-charcoal">{highlight.title}</h3>
                  <p className="text-mushroom-taupe font-light leading-relaxed">
                    {highlight.desc}
                  </p>
                </motion.div>
              </BorderRotate>
            ))}
          </div>
        </div>
      </section>
    
      {/* 4. Showcase Content */}
      <section className="py-32 bg-deep-charcoal text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
             >
                <div className="aspect-[4/5] rounded-sm overflow-hidden relative z-10 shadow-2xl">
                   <img 
                     src="/images/Homepage.jpeg" 
                     alt="Craftsmanship" 
                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                     referrerPolicy="no-referrer"
                   />
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 border border-gold/20 -z-0" />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/5 -z-0 rounded-full blur-3xl" />
             </motion.div>

             <div className="space-y-8">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-gold uppercase tracking-[0.4em] text-xs font-semibold"
                >
                  The Experience
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl font-heading leading-tight"
                >
                  More Than a Haircut. <br /> A Ritual of Refinement.
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-white/60 font-light leading-relaxed text-lg"
                >
                  Step into a space where time slows down. Every appointment is a 
                  bespoke experience tailored to your unique features and lifestyle. 
                  Our masters of grooming bridge the gap between historic excellence 
                  and modern sophistication.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Button variant="outline" href="/about" className="border-white/20 text-white hover:bg-white hover:text-charcoal uppercase tracking-widest text-xs py-4 px-8">
                    Learn the History <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};


