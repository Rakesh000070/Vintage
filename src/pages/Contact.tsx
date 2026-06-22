import React from "react";
import { PageHero } from "../components/PageHero";
import { ContactSection } from "../components/sections/ContactSection";

const Contact = () => {
  return (
    <>
      <PageHero 
        title="Connect" 
        subtitle="Our concierge team is at your disposal"
        backgroundImage="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074"
      />
      <ContactSection />
    </>
  );
};

export default Contact;
