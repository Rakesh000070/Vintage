import React from "react";
import { PageHero } from "../components/PageHero";
import { AboutSection } from "../components/AboutSection";

const About = () => {
  return (
    <>
      <PageHero 
        title="Our Story" 
        subtitle="Heritage, Precision, and the Art of Grooming"
        backgroundImage="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070"
      />
      <AboutSection />
      <div className="py-24 bg-soft-ivory">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <h2 className="text-4xl font-heading text-charcoal">The Philosophy of Slow Grooming</h2>
                <p className="text-mushroom-taupe leading-relaxed font-light">
                    In a world that prizes speed, we stand for the unhurried. 
                    Every cut, every shave, and every consultation is given the time it 
                    rightfully deserves. We believe that true luxury is found in the detail.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <span className="text-sm uppercase tracking-widest text-charcoal font-medium">Timeless Techniques</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <span className="text-sm uppercase tracking-widest text-charcoal font-medium">Modern Aesthetic</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                        <span className="text-sm uppercase tracking-widest text-charcoal font-medium">Bespoke Guidance</span>
                    </div>
                </div>
            </div>
            <div className="aspect-square rounded-sm overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=1287" 
                    alt="Barber Detail" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
