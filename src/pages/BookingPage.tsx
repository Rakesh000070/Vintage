import React from "react";
import { motion } from "motion/react";
import { BookingSectionContent as BookingSection } from "../components/BookingSection";
import { PageHero } from "../components/PageHero";

const BookingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <PageHero 
        title="Reserve Your Session" 
        subtitle="Book your appointment at the pinnacle of elegance"
        backgroundImage="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070"
      />
      <BookingSection />
    </motion.div>
  );
};

export default BookingPage;
