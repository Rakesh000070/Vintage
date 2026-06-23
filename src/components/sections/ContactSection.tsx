import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { 
  MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube, 
  Star, Coffee, Car, Scissors, MessageSquare, ExternalLink,
  ChevronRight
} from "lucide-react";
import { GlowCard } from "../ui/spotlight-card";

const LUXURY_EASE_OUT = [0.25, 0.1, 0.25, 1];

// Magnetic Button Wrapper for that extra premium feel
const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ContactSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    const hour = currentTime.getHours();
    // Open 9:00 AM - 8:00 PM
    setIsOpen(hour >= 9 && hour < 20);
    return () => clearInterval(timer);
  }, [currentTime]);

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
    { icon: <Facebook size={20} />, href: "#", name: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", name: "Twitter" },
    { icon: <Youtube size={20} />, href: "#", name: "Youtube" },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-40 bg-deep-charcoal overflow-hidden selection:bg-gold selection:text-deep-charcoal scroll-mt-24">
      {/* LUXURY BACKGROUND TEXTURE & AMBIENT LIGHTING */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
        <div className="absolute top-[10%] left-[-10%] w-[60%] h-[60%] bg-gold/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-dusty-mauve/5 rounded-full blur-[140px]" />
        
        {/* Floating Golden Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/40 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [null, "-30%"],
              opacity: [0, 0.8, 0],
              scale: [null, 1.2, 0.8]
            }}
            transition={{ 
              duration: 10 + Math.random() * 15, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}

        {/* Subtle Barber Motif Outlines */}
        <div className="absolute top-20 right-10 opacity-5 rotate-12">
            <Scissors size={280} strokeWidth={0.5} className="text-white" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: LUXURY_EASE_OUT }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Get In Touch
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: LUXURY_EASE_OUT }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl text-white mb-10 leading-[0.85] tracking-tighter"
          >
            Visit <span className="text-gold italic font-light font-serif">Vintage</span> Barber
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE_OUT }}
            className="font-body text-warm-greige text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            Step into a world of timeless grooming, expert craftsmanship, and premium services. Your master sanctuary awaits.
          </motion.p>
        </div>

        {/* MAIN ASYMMETRICAL GRID */}
        <div className="grid grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LOCATION CARD (FEATURED - 60%+ Wide) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-8 group"
          >
            <div className="h-full relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden transition-all duration-700 hover:border-gold/40 shadow-2xl">
              {/* Dynamic Map Foundation */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.15] grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-1000">
                 <iframe
                    title="Heritage Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.32795349946045!2d84.78616775181271!3d19.31507422008191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d51da0f2723bb%3A0x7f6e8c65c245bedc!2sVintage%20Barber%20Shop!5e0!3m2!1sen!2sin!4v1782141309621!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="scale-125 group-hover:scale-100 transition-transform duration-[3000ms]"
                  />
              </div>

              {/* Animated Gold Border Accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="relative h-full p-10 md:p-14 flex flex-col justify-between z-10 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/30 to-transparent">
                <div>
                  <div className="flex flex-wrap items-center gap-5 mb-10">
                    <div className="flex items-center gap-2 bg-gold px-4 py-1.5 rounded-sm text-deep-charcoal text-[11px] font-black uppercase tracking-widest shadow-lg">
                      <Star size={14} fill="currentColor" />
                      4.9 Rating
                    </div>
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Signature Establishment</span>
                  </div>
                  
                  <h3 className="font-heading text-4xl md:text-6xl text-white mb-8 group-hover:text-gold transition-colors duration-700 leading-tight">
                    The Heritage <span className="italic font-light">Sanctuary</span>
                  </h3>
                  
                  <div className="flex flex-col gap-6 max-w-md">
                    <div className="flex items-start gap-6 group/item">
                      <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center text-gold bg-white/5 transition-all duration-500 group-hover/item:bg-gold group-hover/item:text-deep-charcoal group-hover/item:scale-110">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="font-body text-white/90 text-xl font-light leading-relaxed">
                          SNT Road, Panabika Street, Baidiya Nath Pur, Brahmapur, Odisha 760001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-14">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                     {[
                       { icon: <Car size={20} />, title: "Valet Parking", desc: "Private Access" },
                       { icon: <Coffee size={20} />, title: "Heritage Lounge", desc: "Craft Drinks" },
                       { icon: <Scissors size={20} />, title: "Master Cuts", desc: "Expert Artisans" },
                       { icon: <Star size={20} />, title: "Elite Care", desc: "Luxury Standard" }
                     ].map((amenity, i) => (
                       <div key={i} className="flex flex-col gap-3 group/amenity">
                          <div className="text-gold/50 group-hover/amenity:text-gold transition-colors">{amenity.icon}</div>
                          <div>
                            <p className="text-white/90 text-[11px] font-bold uppercase tracking-widest mb-1">{amenity.title}</p>
                            <p className="text-white/30 text-[9px] uppercase tracking-widest">{amenity.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>

                  <MagneticButton className="inline-block group/btn">
                    <a 
                      href="https://maps.google.com/?q=Vintage+Barber+Shop+Brahmapur" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-5 px-12 py-6 bg-gold text-deep-charcoal font-black uppercase tracking-[0.3em] text-[12px] rounded-full hover:bg-white hover:shadow-[0_0_50px_rgba(198,164,106,0.5)] transition-all duration-500"
                    >
                      Get Directions
                      <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>

          {/* UTILITY CLUSTER (Right Column) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
            
            {/* PHONE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: LUXURY_EASE_OUT }}
              className="group"
            >
              <div className="p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] hover:border-gold/40 hover:bg-white/[0.08] transition-all duration-700 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-150 transition-transform duration-1000">
                  <Phone size={120} strokeWidth={0.5} className="text-white" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-deep-charcoal transition-all duration-500">
                        <Phone size={24} className="group-hover:animate-bounce" />
                      </div>
                      <span className="text-gold text-[10px] font-black uppercase tracking-widest">Connect</span>
                    </div>
                    <h4 className="font-heading text-3xl text-white mb-6">Concierge <span className="italic text-gold">Line</span></h4>
                    <div className="space-y-4 mb-10">
                      <a href="tel:+918328995970" className="block text-2xl font-light text-white/90 hover:text-gold hover:tracking-tighter transition-all">+91 83289 95970</a>
                      <a href="tel:+919668648737" className="block text-2xl font-light text-white/90 hover:text-gold hover:tracking-tighter transition-all">+91 96686 48737</a>
                    </div>
                  </div>
                  
                  <MagneticButton>
                    <a href="tel:+918328995970" className="flex items-center justify-center gap-4 w-full py-5 rounded-2xl bg-white/5 text-white/70 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-deep-charcoal transition-all duration-500 border border-white/5">
                      Call Now
                      <ChevronRight size={16} />
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>

            {/* EMAIL CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: LUXURY_EASE_OUT }}
              className="group"
            >
              <div className="p-10 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] hover:border-gold/40 hover:bg-white/[0.08] transition-all duration-700 relative overflow-hidden">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:rotate-12 transition-transform duration-500">
                    <Mail size={24} />
                  </div>
                  <div className="px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] uppercase tracking-[0.2em] font-black group-hover:bg-gold group-hover:text-deep-charcoal transition-all">
                    Replies &lt; 24h
                  </div>
                </div>
                
                <h4 className="font-heading text-3xl text-white mb-6">Digital <span className="italic text-gold">Inquiry</span></h4>
                <a href="mailto:hello@vintagebarber.com" className="block text-xl font-light text-white/80 hover:text-gold transition-colors break-all mb-10">
                  hello@vintagebarber.com
                </a>
                
                <MagneticButton>
                  <button className="flex items-center justify-center gap-4 w-full py-5 rounded-2xl bg-gold text-deep-charcoal text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 border border-gold hover:bg-white hover:border-white">
                    Submit Inquiry
                    <MessageSquare size={16} />
                  </button>
                </MagneticButton>
              </div>
            </motion.div>
          </div>

          {/* HOURS CARD (Luxury Chronostat) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: LUXURY_EASE_OUT }}
            className="col-span-12"
          >
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[44px] p-12 md:p-16 hover:border-gold/40 transition-all duration-1000 group relative overflow-hidden shadow-2xl">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                <div className="lg:col-span-4">
                   <div className="flex flex-col gap-6 mb-10">
                      <div className="flex items-center gap-3">
                         <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.7)]' : 'bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.7)]'} animate-pulse`} />
                         <span className={`text-[11px] font-black uppercase tracking-[0.4em] ${isOpen ? 'text-emerald-400' : 'text-rose-400'}`}>
                           {isOpen ? 'Operative Now' : 'Currently Retired'}
                         </span>
                      </div>
                      <h4 className="font-heading text-5xl md:text-7xl text-white leading-none">The <span className="text-gold italic font-light">Heritage</span> Schedule</h4>
                   </div>
                   <p className="font-body text-warm-greige text-lg leading-relaxed font-light mb-10 opacity-70">
                     We operate with meticulous precision. For a true luxury experience, we invite you to book your preference in advance.
                   </p>
                   
                   <div className="w-16 h-1 bg-gold rounded-full" />
                </div>
                
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-6">
                  {[
                    { day: "Mon – Fri", time: "09:00 AM – 08:00 PM", status: "Gold Standard" },
                    { day: "Saturday", time: "09:00 AM – 08:00 PM", status: "Premium Flex" },
                    { day: "Sunday", time: "10:00 AM – 06:00 PM", status: "Elegant Rest" },
                    { day: "Holidays", time: "Hours May Vary", status: "Inquiry Only" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex flex-col py-6 border-b border-white/5 group/time transition-all duration-500"
                    >
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-heading text-2xl text-white group-hover/time:text-gold transition-colors">{item.day}</span>
                        <span className="text-gold/40 text-[9px] font-black uppercase tracking-widest">{item.status}</span>
                      </div>
                      <span className="font-body text-sm tracking-[0.25em] text-white/40 font-light group-hover/time:text-white transition-colors uppercase">
                        {item.time}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

       

        {/* ELEGANT FOOTER LINKS */}
        <div className="mt-32 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="flex flex-col gap-8 md:gap-4 items-center md:items-start w-full md:w-auto">
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-gold" />
                  <span className="text-gold text-[10px] font-black uppercase tracking-[0.6em]">Heritage Connection</span>
                  <div className="w-8 h-px bg-gold" />
               </div>
               <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.15, rotate: -5, backgroundColor: '#D4AF37', color: '#1E1E1E' }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                    className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 transition-all duration-700 shadow-xl"
                  >
                    {social.icon}
                  </motion.a>
                ))}
               </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-10">
                <div className="flex items-center gap-12 text-center md:text-right">
                   <div>
                      <p className="text-[10px] uppercase font-black tracking-[0.5em] text-gold/40 mb-3">Legacy Since</p>
                      <p className="font-heading text-4xl text-white">2018</p>
                   </div>
                   <div className="w-px h-16 bg-white/10" />
                   <div>
                      <p className="text-[10px] uppercase font-black tracking-[0.5em] text-gold/40 mb-3">Location</p>
                      <p className="font-heading text-4xl text-white">Brahmapur</p>
                   </div>
                </div>
                <div className="flex flex-col items-center md:items-end gap-1 opacity-20">
                   <p className="font-body text-[10px] text-white uppercase tracking-[0.5em]">
                      Crafted for Excellence
                   </p>
                   <p className="font-body text-[8px] text-white uppercase tracking-[0.5em]">
                      © 2026 Vintage Barber. The Luxury Standard.
                   </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
