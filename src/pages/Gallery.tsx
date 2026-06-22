import React from "react";
import { PageHero } from "../components/PageHero";
import { GallerySection } from "../components/GallerySection";

const Gallery = () => {
  return (
    <>
      <PageHero 
        title="Visual Journal" 
        subtitle="A showcase of precision and aesthetic"
        backgroundImage="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=2070"
      />
      <GallerySection />
    </>
  );
};

export default Gallery;
