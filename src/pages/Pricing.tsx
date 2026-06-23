import React from "react";
import { motion } from "motion/react";
import { PricingSection } from "../components/PricingSection";
import { PageHero } from "../components/PageHero";

const Pricing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <PageHero 
        title="Grooming Investment" 
        subtitle="Transparent value for unparalleled excellence"
        backgroundImage="/images/pricing-bg.jpg"
      />
      <PricingSection />
    </motion.div>
  );
};

export default Pricing;
