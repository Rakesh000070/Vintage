import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./Button";
import { Check } from "lucide-react";
import { motion } from "motion/react";

export const PricingSection = () => {
  const tiers = [
    {
      name: "The Essential",
      price: "45",
      description: "Fundamental grooming for the busy man.",
      features: [
        "Signature Haircut",
        "Scissor Finish",
        "Wash & Condition",
        "Professional Styling",
        "Single Beverage Choice"
      ]
    },
    {
      name: "The Signature",
      price: "85",
      description: "Our most popular ritual of transformation.",
      featured: true,
      features: [
        "Everything in Essential",
        "Hot Towel Shave",
        "Beard Sculpting",
        "Scalp Massage",
        "Nose/Ear Grooming",
        "Premium Beverage Selection"
      ]
    },
    {
      name: "The Executive",
      price: "150",
      description: "The ultimate indulgence for true refined luxury.",
      features: [
        "Everything in Signature",
        "Scalp Therapy Treatment",
        "Express Facial",
        "Hand & Nail Grooming",
        "Priority Booking",
        "Private Suite Access"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-soft-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          title="Refined Packages"
          subtitle="Choose the depth of your transformation with our curated, tiered services."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-sm border transition-all duration-500 flex flex-col h-full ${
                tier.featured 
                ? "bg-white border-gold shadow-gold/20 shadow-2xl scale-105 z-10" 
                : "bg-pearl-grey/10 border-pearl-grey/30 hover:border-gold/50"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-deep-charcoal text-[10px] uppercase tracking-[0.2em] font-bold px-6 py-2 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-heading mb-2">{tier.name}</h3>
                <p className="text-sm text-mushroom-taupe font-light italic">{tier.description}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-gold text-xl font-bold">£</span>
                <span className="text-6xl font-heading font-bold text-charcoal">{tier.price}</span>
                <span className="text-xs uppercase tracking-widest text-mushroom-taupe ml-2">Starting from</span>
              </div>

              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-charcoal/80">
                    <Check size={16} className="text-gold shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.featured ? "primary" : "outline"} 
                className="w-full"
              >
                Select Package
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
