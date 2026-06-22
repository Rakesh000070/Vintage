import React from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { GlowCard } from "./ui/spotlight-card";

const menuCategories = [
  {
    category: "Hair Styling",
    items: [
      { service: "Classic Haircut", price: "₹500" },
      { service: "Premium Haircut", price: "₹800" },
      { service: "Hair Wash & Blow Dry", price: "₹600" },
      { service: "Hair Styling", price: "₹700" },
      { service: "Beard Styling", price: "₹300" },
    ],
  },
  {
    category: "Hair Coloring",
    items: [
      { service: "Global Color", price: "₹2,500" },
      { service: "Highlights", price: "₹3,500" },
      { service: "Balayage", price: "₹5,000" },
      { service: "Root Touch Up", price: "₹1,800" },
    ],
  },
  {
    category: "Hair Treatments",
    items: [
      { service: "Keratin Treatment", price: "₹3,000" },
      { service: "Deep Conditioning", price: "₹1,500" },
      { service: "Scalp Treatment", price: "₹1,200" },
      { service: "Hair Spa", price: "₹2,000" },
    ],
  },
  {
    category: "Skin Care",
    items: [
      { service: "Classic Facial", price: "₹1,000" },
      { service: "Gold Facial", price: "₹2,500" },
      { service: "HydraFacial", price: "₹3,500" },
      { service: "Skin Brightening", price: "₹2,000" },
    ],
  },
  {
    category: "Bridal Services",
    items: [
      { service: "Bridal Makeup", price: "₹5,000" },
      { service: "HD Makeup", price: "₹8,000" },
      { service: "Airbrush Makeup", price: "₹12,000" },
      { service: "Complete Bridal Package", price: "₹20,000" },
    ],
  },
  {
    category: "Spa & Wellness",
    items: [
      { service: "Body Massage", price: "₹2,000" },
      { service: "Aromatherapy", price: "₹2,500" },
      { service: "Full Body Spa", price: "₹5,000" },
      { service: "Couple Spa", price: "₹8,000" },
    ],
  },
];

const LUXURY_EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: LUXURY_EASE,
    },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: LUXURY_EASE,
    },
  },
};

const ServiceRow: React.FC<{ service: string; price: string }> = ({ service, price }) => {
  return (
    <motion.div
      variants={rowVariants}
      whileHover={{ x: 6, transition: { duration: 0.3 } }}
      className="group flex justify-between items-center py-5 border-b border-mushroom-taupe/20 cursor-default"
    >
      <span className="font-body text-lg text-charcoal">{service}</span>
      <span 
        className="flex-1 mx-4 h-px bg-no-repeat bg-bottom opacity-40 group-hover:opacity-100 transition-opacity duration-300" 
        style={{ 
          backgroundImage: "radial-gradient(circle, #B8AFAD 1px, transparent 1px)", 
          backgroundSize: "4px 4px" 
        }} 
      />
      <span className="font-heading text-lg text-charcoal tabular-nums group-hover:text-dusty-mauve transition-colors">
        {price}
      </span>
    </motion.div>
  );
};

export const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-32 px-6 bg-soft-ivory overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="Service Menu"
          subtitle="Luxury treatments crafted to elevate your style, confidence, and self‑care experience."
          align="center"
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              className="mb-0"
            >
              <GlowCard 
                glowColor="purple" 
                customSize 
                className="bg-white/40 backdrop-blur-sm border-0 rounded-sm p-8 shadow-sm h-full"
              >
                <div className="mb-10">
                  <h3 className="font-heading text-3xl md:text-4xl text-charcoal uppercase tracking-[0.2em] mb-4">
                    {category.category}
                  </h3>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.4 }}
                    className="w-16 h-px bg-dusty-mauve origin-left"
                  />
                </div>

                <motion.div variants={staggerContainer} className="space-y-1">
                  {category.items.map((item) => (
                    <ServiceRow 
                      key={item.service} 
                      service={item.service} 
                      price={item.price} 
                    />
                  ))}
                </motion.div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dusty-mauve/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dusty-mauve/20 to-transparent" />
    </section>
  );
};
