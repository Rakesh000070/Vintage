import React from "react";
import { motion } from "motion/react";
import { ExpertsSection } from "../components/ui/ExpertsSection";
import { PageHero } from "../components/PageHero";

const Experts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <PageHero 
        title="The Artisans" 
        subtitle="Meet the master barbers behind the craft"
        backgroundImage="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=2070"
      />
      <ExpertsSection />
    </motion.div>
  );
};

export default Experts;
