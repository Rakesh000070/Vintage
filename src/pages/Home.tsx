import React from "react";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { AboutSection } from "../components/AboutSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { BookingSection } from "../components/BookingSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="py-20 bg-soft-ivory text-center px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-semibold">Welcome to the Sanctuary</span>
          <h2 className="text-4xl md:text-5xl font-heading text-charcoal">The Pinnacle of Masculine Elegance</h2>
          <p className="text-mushroom-taupe leading-relaxed text-lg font-light">
            Located in the heart of London since 1892, Vintage Barber has served 
            generations of gentlemen with a commitment to precision, tradition, 
            and modern artistry.
          </p>
        </div>
      </div>
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <BookingSection />
    </>
  );
};

export default Home;
