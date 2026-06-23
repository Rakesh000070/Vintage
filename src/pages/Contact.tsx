import React from "react";
import { motion } from "motion/react";
import { ContactSection } from "../components/sections/ContactSection";
import { PageHero } from "../components/PageHero";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <PageHero 
        title="Get In Touch" 
        subtitle="Visit the sanctuary or reach out for inquiries"
        backgroundImage="/images/contact-bg.jpg"
      />
      <ContactSection />
    </motion.div>
  );
};

export default Contact;
