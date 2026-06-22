import React from "react";
import { PageHero } from "../components/PageHero";
import { TestimonialsSection } from "../components/TestimonialsSection";

const Testimonials = () => {
  return (
    <>
      <PageHero 
        title="Client Voices" 
        subtitle="Trusted by the discerning gentleman"
        backgroundImage="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=2070"
      />
      <TestimonialsSection />
    </>
  );
};

export default Testimonials;
