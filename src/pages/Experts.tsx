import React from "react";
import { PageHero } from "../components/PageHero";
import { ExpertsSection } from "../components/ExpertsSection";

const Experts = () => {
  return (
    <>
      <PageHero 
        title="Master Artisans" 
        subtitle="The hands behind the transformation"
        backgroundImage="https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?auto=format&fit=crop&q=80&w=2074"
      />
      <ExpertsSection />
    </>
  );
};

export default Experts;
