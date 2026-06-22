import React from "react";
import { PageHero } from "../components/PageHero";
import { PricingSection } from "../components/PricingSection";

const Pricing = () => {
  return (
    <>
      <PageHero 
        title="Grooming Investment" 
        subtitle="Transparent value for unparalleled excellence"
        backgroundImage="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=2070"
      />
      <PricingSection />
    </>
  );
};

export default Pricing;
