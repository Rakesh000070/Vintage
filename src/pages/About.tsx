import React from "react";
import { motion } from "motion/react";
import { AboutSection } from "../components/AboutSection";
import { PageHero } from "../components/PageHero";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <PageHero 
        title="Our Story" 
        subtitle="A heritage of excellence since 1892"
        backgroundImage="public/images/about-bg.jpg"
      />
      <AboutSection />
    </motion.div>
  );
};

export default About;
