import React from "react";
import { PageHero } from "../components/PageHero";
import { ServicesSection } from "../components/ServicesSection";
import { PricingSection } from "../components/PricingSection";

const Services = () => {
  return (
    <>
      <PageHero 
        title="Our Services" 
        subtitle="A choreographed ritual of transformation"
        backgroundImage="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=2070"
      />
      <ServicesSection />
      <PricingSection />
    </>
  );
};

export default Services;
