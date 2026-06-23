import React from "react";
import { motion } from "motion/react";
import { HeroSection } from "../components/sections/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { AboutSection } from "../components/AboutSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { BookingSectionContent as BookingSection } from "../components/BookingSection";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />

    </motion.div>
  );
};

export default Home;
