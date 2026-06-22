import { Instagram, Twitter } from "lucide-react";
import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Card } from "./Card";

export const ExpertsSection = () => {
  const experts = [
    {
      name: "Marcus Thorne",
      role: "Master Barber",
      image: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&q=80&w=683",
      specialty: "Precision Fades & Straight Razor"
    },
    {
      name: "Julian Vane",
      role: "Stylist Director",
      image: "https://images.unsplash.com/photo-1506794778242-91f21bc273ca?auto=format&fit=crop&q=80&w=687",
      specialty: "Creative Color & Sculpting"
    },
    {
      name: "Thomas Reed",
      role: "Grooming Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=687",
      specialty: "Beard Architecture & Therapy"
    },
    {
      name: "Arthur Sterling",
      role: "Senior Barber",
      image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=880",
      specialty: "Continental Styles & Texture"
    }
  ];

  return (
    <section id="experts" className="py-24 bg-deep-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          light
          title="Master Craftsmen"
          subtitle="A elite collective of talent, globally recognized for their contributions to the art of grooming."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <Card 
              key={expert.name} 
              delay={index * 0.1}
              className="bg-white/5 border-white/10 hover:border-gold/30 hover:bg-white/10"
            >
              <div className="space-y-6">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={expert.image} 
                    alt={expert.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-heading text-soft-ivory">{expert.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-gold font-medium">{expert.role}</p>
                  <p className="text-xs text-soft-ivory/40 italic">{expert.specialty}</p>
                </div>
                <div className="flex justify-center gap-4 pt-4 border-t border-white/5">
                  <a href="#" className="text-soft-ivory/40 hover:text-gold transition-colors">
                    <Instagram size={16} />
                  </a>
                  <a href="#" className="text-soft-ivory/40 hover:text-gold transition-colors">
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
