import React from "react";
import { motion } from "motion/react";
import { GallerySection } from "../components/GallerySection";
import { PageHero } from "../components/PageHero";

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <PageHero 
        title="Gallery" 
        subtitle="Visual proof of our master artistry"
        backgroundImage="/images/gallery.png"
      />
      <GallerySection />
    </motion.div>
  );
};

export default Gallery;
