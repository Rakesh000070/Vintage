import React from "react";
import { motion } from "motion/react";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { PageHero } from "../components/PageHero";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <PageHero 
        title="Client Voices" 
        subtitle="What gentlemen say about the Vintage experience"
        backgroundImage="public/images/testimonials-bg.jpg"
      />
      <TestimonialsSection />
    </motion.div>
  );
};

export default Testimonials;
