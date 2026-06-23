import { Scissors, Palette, Crown, Droplets, Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";
import { staggerContainer } from "../animations";

const services = [
  {
    title: "Hair Styling",
    description: "Expert cuts and styling tailored to your unique features and personal aesthetic.",
    icon: Scissors,
    image: "public/images/hairstyle.34.37 PM.jpeg",
    price: "Starting at ₹500"
  },
  {
    title: "Hair Coloring",
    description: "From subtle highlights to bold transformations, our color specialists create stunning results.",
    icon: Palette,
    image: "public/images/haircoloring.34.37 PM.jpeg",
    price: "Starting at ₹1500"
  },
  {
    title: "Bridal Makeup",
    description: "Complete bridal beauty packages ensuring you look flawless on your special day.",
    icon: Crown,
    image: "public/images/Bridal-Makeup.jfif.jpeg",
    price: "Starting at ₹5000"
  },
  {
    title: "Hair Treatments",
    description: "Deep conditioning, keratin, and restorative treatments for healthier, shinier hair.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
    price: "Starting at ₹800"
  },
  {
    title: "Skin Care",
    description: "Professional facials and skin treatments using premium products for radiant skin.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    price: "Starting at ₹1000"
  },
  {
    title: "Spa Services",
    description: "Relaxing spa rituals combining luxury treatments with ultimate pampering experiences.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80",
    price: "Starting at ₹2000"
  }
];

export const ServicesSection = () => {
  return (
    <section 
      id="services" 
      className="py-32 px-6 bg-soft-ivory relative overflow-hidden"
    >
      {/* Subtle Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="Signature Services"
          subtitle="Indulge in our curated collection of premium beauty and grooming services, each designed to deliver an exceptional experience."
          align="center"
          accent={true}
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group !p-0 overflow-hidden flex flex-col h-full rounded-none"
                variant="glass"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md flex items-center justify-center text-dusty-mauve">
                    <Icon size={24} />
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-heading text-2xl text-charcoal mb-4 group-hover:text-dusty-mauve transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-mushroom-taupe leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="pt-6 border-t border-soft-ivory flex justify-between items-center">
                    <span className="font-body text-charcoal font-medium">
                      {service.price}
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-dusty-mauve font-heading text-sm uppercase tracking-widest cursor-pointer"
                    >
                      Book Now →
                    </motion.div>
                  </div>
                </div>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};