import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, Phone, MapPin, ArrowRight } from "lucide-react";

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Experts", href: "/experts" },
    { name: "Pricing", href: "/pricing" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Hair Styling", href: "/services" },
    { name: "Hair Coloring", href: "/services" },
    { name: "Bridal Makeup", href: "/services" },
    { name: "Hair Treatments", href: "/services" },
    { name: "Skin Care", href: "/services" },
    { name: "Spa Services", href: "/services" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-[#1E1E1E] text-white pt-20 pb-8 px-6 overflow-hidden">
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
        >
          {/* COLUMN 1 — Brand */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="font-heading text-xl tracking-[0.2em] uppercase">VINTAGE BARBER</h2>
              <p className="font-body text-sm text-white/40 mt-3 italic">Beauty Crafted With Precision</p>
              <div className="w-10 h-0.5 bg-[#958A90] mt-4" />
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed max-w-xs">
              Premium unisex salon offering luxury beauty and grooming experiences. Dedicated to the art of craftsmanship and heritage stylings.
            </p>
          </motion.div>

          {/* COLUMN 2 — Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-white mb-8">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-body text-sm text-white/50 hover:text-[#958A90] transition-colors duration-300 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 3 — Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-white mb-8">Our Services</h3>
            <div className="grid grid-cols-1 gap-3">
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="font-body text-sm text-white/50 hover:text-[#958A90] transition-colors duration-300 w-fit"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 4 — Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-white mb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="text-[#958A90] shrink-0 mt-1" />
                <p className="font-body text-sm text-white/50 leading-relaxed">
                  SNT Road, Panabika Sahi, Giri Market, Near Biju Patnaik Park
                </p>
              </div>
              <div className="flex gap-3">
                <Phone size={16} className="text-[#958A90] shrink-0 mt-1" />
                <div className="space-y-1">
                  <a href="tel:+918328995970" className="font-body text-sm text-white/50 hover:text-[#958A90] block transition-colors">+91 8328995970</a>
                  <a href="tel:+919668648737" className="font-body text-sm text-white/50 hover:text-[#958A90] block transition-colors">+91 9668648737</a>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              {[
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-[#958A90] hover:text-[#958A90] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

       

        {/* BOTTOM BAR */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-16"
        >
          <div className="w-full h-px bg-white/10 mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-body text-xs text-white/30 text-center md:text-left">
              © 2024 VINTAGE BARBER. All rights reserved. Crafted by Excellence.
            </p>
            <div className="flex gap-8">
              <Link to="/privacy" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest">Privacy Policy</Link>
              <Link to="/terms" className="font-body text-xs text-white/30 hover:text-white/60 transition-colors uppercase tracking-widest">Terms of Service</Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#958A90]/30 to-transparent" />
    </footer>
  );
};
