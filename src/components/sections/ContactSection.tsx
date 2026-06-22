import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { GlowCard } from "../ui/spotlight-card";

const LUXURY_EASE_OUT = [0.25, 0.1, 0.25, 1];

const contactDetails = [
  {
    icon: <MapPin className="text-dusty-mauve" size={24} />,
    title: "Our Location",
    content: (
      <div className="space-y-1">
        <p className="font-body text-mushroom-taupe leading-relaxed">
          SNT Road, Panabika Sahi, Giri Market, Near Biju Patnaik Park
        </p>
        <a 
          href="https://maps.google.com/?q=SNT+Road,+Panabika+Sahi,+Giri+Market,+Near+Biju+Patnaik+Park" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-[0.2em] text-gold hover:text-dusty-mauve transition-colors font-medium inline-block mt-2"
        >
          View on Google Maps →
        </a>
      </div>
    ),
  },
  {
    icon: <Phone className="text-dusty-mauve" size={24} />,
    title: "Call Us",
    content: (
      <div className="flex flex-col gap-1">
        <a href="tel:+918328995970" className="font-body text-mushroom-taupe hover:text-gold transition-colors">+91 8328995970</a>
        <a href="tel:+919668648737" className="font-body text-mushroom-taupe hover:text-gold transition-colors">+91 9668648737</a>
      </div>
    ),
  },
  {
    icon: <Mail className="text-dusty-mauve" size={24} />,
    title: "Email Us",
    content: (
      <a href="mailto:hello@vintagebarber.com" className="font-body text-mushroom-taupe hover:text-gold transition-colors">
        hello@vintagebarber.com
      </a>
    ),
  },
  {
    icon: <Clock className="text-dusty-mauve" size={24} />,
    title: "Opening Hours",
    content: (
      <div className="font-body text-mushroom-taupe leading-relaxed text-sm">
        <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
        <p>Sunday: 10:00 AM - 6:00 PM</p>
      </div>
    ),
  },
];

const socialLinks = [
  { icon: <Instagram size={20} />, href: "#" },
  { icon: <Facebook size={20} />, href: "#" },
  { icon: <Twitter size={20} />, href: "#" },
  { icon: <Youtube size={20} />, href: "#" },
];

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN — Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: LUXURY_EASE_OUT }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-dusty-mauve block mb-4">
              GET IN TOUCH
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-charcoal leading-[1.1]">
              Visit Us Today
            </h2>
            <div className="w-16 h-0.5 bg-dusty-mauve mt-6" />
            
            <p className="font-body text-mushroom-taupe text-lg leading-relaxed mt-8 max-w-lg">
              We'd love to welcome you to Vintage Barber. Whether you have a question, need advice, or simply want to book your next appointment, our team is here to help.
            </p>

            <div className="mt-12 space-y-8">
              {contactDetails.map((detail, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.8, ease: LUXURY_EASE_OUT }}
                >
                  <GlowCard 
                    glowColor="blue" 
                    customSize 
                    className="p-6 bg-soft-ivory/30 border border-soft-ivory rounded-sm flex gap-6 items-start group"
                  >
                    <div className="p-3 bg-white shadow-sm border border-soft-ivory rounded-sm transition-transform duration-500 group-hover:scale-110">
                      {detail.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg text-charcoal mb-2">{detail.title}</h3>
                      {detail.content}
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-12">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                  className="w-12 h-12 border border-mushroom-taupe/30 flex items-center justify-center text-mushroom-taupe hover:bg-charcoal hover:text-white hover:border-charcoal transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN — Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: LUXURY_EASE_OUT }}
            className="lg:sticky lg:top-32"
          >
            <GlowCard 
              glowColor="purple" 
              customSize 
              className="bg-soft-ivory rounded-sm overflow-hidden border border-soft-ivory aspect-square lg:h-[600px] p-0"
            >
              <div className="w-full h-full relative">
                {/* Google Map Implementation */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.478832103444!2d84.8475!3d22.2525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE1JzA5LjAiTiA4NMKwNTAnNTEuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Fallback Placeholder (Hidden if iframe works) */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-soft-ivory to-warm-greige flex flex-col items-center justify-center p-8 text-center">
                  <MapPin size={48} className="text-dusty-mauve mb-4" />
                  <span className="font-heading text-xl text-charcoal">Map Location</span>
                  <p className="font-body text-sm text-mushroom-taupe mt-2">Loading our master sanctuary location...</p>
                </div>
              </div>
            </GlowCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
