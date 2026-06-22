import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import React from "react";
import { SectionHeader } from "./SectionHeader";
import { motion } from "motion/react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-soft-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Get In Touch"
          subtitle="Whether you have a question about our services or would like to discuss a bespoke event, we're here to help."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          {/* Location */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 p-10 bg-pearl-grey/10 rounded-sm border border-pearl-grey/20"
          >
            <div className="w-12 h-12 bg-gold flex items-center justify-center rounded-full text-deep-charcoal">
              <MapPin size={24} />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-heading">Our Sanctuary</h3>
              <p className="text-sm text-mushroom-taupe leading-relaxed">
                123 Elegance Row, Mayfair district,<br />London W1S 2YJ, United Kingdom
              </p>
              <a href="#" className="inline-block text-xs uppercase tracking-widest text-gold font-bold hover:translate-x-2 transition-transform">
                Get Directions →
              </a>
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-8 p-10 bg-pearl-grey/10 rounded-sm border border-pearl-grey/20"
          >
            <div className="w-12 h-12 bg-gold flex items-center justify-center rounded-full text-deep-charcoal">
              <Phone size={24} />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-heading">Reach Out</h3>
              <div className="space-y-2">
                <p className="text-sm text-mushroom-taupe leading-relaxed flex items-center gap-3">
                  <Phone size={16} className="text-gold" /> +44 (0) 20 7123 4567
                </p>
                <p className="text-sm text-mushroom-taupe leading-relaxed flex items-center gap-3">
                  <Mail size={16} className="text-gold" /> concierge@vintagebarber.com
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="#" className="p-2 border border-pearl-grey rounded-full text-mushroom-taupe hover:bg-gold hover:border-gold hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="p-2 border border-pearl-grey rounded-full text-mushroom-taupe hover:bg-gold hover:border-gold hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="p-2 border border-pearl-grey rounded-full text-mushroom-taupe hover:bg-gold hover:border-gold hover:text-white transition-all">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8 p-10 bg-pearl-grey/10 rounded-sm border border-pearl-grey/20"
          >
            <div className="w-12 h-12 bg-gold flex items-center justify-center rounded-full text-deep-charcoal">
              <Clock size={24} />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-heading">Hours of Service</h3>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", hours: "09:00 - 20:00" },
                  { day: "Saturday", hours: "10:00 - 18:00" },
                  { day: "Sunday", hours: "11:00 - 17:00" }
                ].map((item) => (
                  <div key={item.day} className="flex justify-between text-sm">
                    <span className="text-mushroom-taupe font-medium">{item.day}</span>
                    <span className="text-charcoal font-bold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 w-full h-[400px] bg-mushroom-taupe/20 rounded-sm overflow-hidden relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074" 
            alt="Location Map Placeholder" 
            className="w-full h-full object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-sm shadow-xl text-center max-w-sm">
              <MapPin size={32} className="text-gold mx-auto mb-4" />
              <h4 className="font-heading text-xl mb-2">Our Mayfair Location</h4>
              <p className="text-xs text-mushroom-taupe uppercase tracking-widest leading-loose">
                Experience the heritage of London's most refined grooming sanctuary.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
