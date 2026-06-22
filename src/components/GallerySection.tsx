import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { X } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { staggerContainer, fadeUpVariant } from "../animations";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  before: string;
  after: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Color Transformation",
    category: "Hair Coloring",
    before: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80",
    after: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500&q=80"
  },
  {
    id: 2,
    title: "Precision Cut",
    category: "Hair Styling",
    before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&q=80",
    after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&q=80"
  },
  {
    id: 3,
    title: "Bridal Makeover",
    category: "Bridal Makeup",
    before: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&q=80",
    after: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80"
  },
  {
    id: 4,
    title: "Hair Treatment",
    category: "Hair Treatment",
    before: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&q=80",
    after: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=500&q=80"
  },
  {
    id: 5,
    title: "Skin Revival",
    category: "Skin Care",
    before: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80",
    after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80"
  },
  {
    id: 6,
    title: "Complete Redesign",
    category: "Hair Styling",
    before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    after: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80"
  }
];

export const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-32 px-6 bg-soft-ivory">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Transformation Gallery"
          subtitle="Witness the artistry of our experts through stunning before and after transformations."
          align="center"
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUpVariant}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-sm overflow-hidden border border-soft-ivory shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer group"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] relative overflow-hidden bg-charcoal">
                {/* After Image (Visible by default) */}
                <img 
                  src={item.after} 
                  alt={`${item.title} After`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Before Image (Hover Reveal) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <img 
                    src={item.before} 
                    alt={`${item.title} Before`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-charcoal/70 text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1 backdrop-blur-sm">
                    BEFORE
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-10 group-hover:opacity-0 transition-opacity duration-500">
                  <span className="bg-dusty-mauve/80 text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1 backdrop-blur-sm">
                    AFTER
                  </span>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white/60 text-[8px] tracking-[0.4em] uppercase whitespace-nowrap">
                    Click to enlarge
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-dusty-mauve block mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading text-xl text-charcoal">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-1 bg-charcoal shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group/modal">
                <img src={selectedItem.before} alt="Before" className="w-full h-full object-cover aspect-[4/5]" />
                <div className="absolute top-4 left-4 bg-black/50 text-white text-[10px] tracking-[0.3em] uppercase px-4 py-1.5 backdrop-blur-md border border-white/10">
                  BEFORE
                </div>
              </div>
              <div className="relative group/modal">
                <img src={selectedItem.after} alt="After" className="w-full h-full object-cover aspect-[4/5]" />
                <div className="absolute top-4 right-4 bg-dusty-mauve/80 text-white text-[10px] tracking-[0.3em] uppercase px-4 py-1.5 backdrop-blur-md">
                  AFTER
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 bg-white p-8 text-center">
                <span className="font-body text-xs tracking-[0.3em] uppercase text-dusty-mauve block mb-2">
                  {selectedItem.category}
                </span>
                <h2 className="font-heading text-3xl text-charcoal">
                  {selectedItem.title}
                </h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
