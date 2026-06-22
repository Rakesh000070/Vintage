import { motion, AnimatePresence, useInView } from "motion/react";
import React, { useState, useRef } from "react";
import { X } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn } from "../lib/utils";
import { GlowCard } from "./ui/spotlight-card";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  before: string;
  after: string;
  isPortrait: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Precision Fade",
    category: "Haircut",
    before: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    after: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&q=80",
    isPortrait: true,
  },
  {
    id: 2,
    title: "Classic Pompadour",
    category: "Styling",
    before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80",
    isPortrait: false,
  },
  {
    id: 3,
    title: "Editorial Grooming",
    category: "Grooming",
    before: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
    after: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    isPortrait: true,
  },
  {
    id: 4,
    title: "Beard Sculpture",
    category: "Beard Trim",
    before: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    after: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&q=80",
    isPortrait: false,
  },
  {
    id: 5,
    title: "Signature Revival",
    category: "Treatment",
    before: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    isPortrait: true,
  },
  {
    id: 6,
    title: "Modern Quiff",
    category: "Haircut",
    before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    after: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    isPortrait: false,
  }
];

const LUXURY_EASE = [0.22, 1, 0.36, 1];

const AnimatedGalleryCard = ({ item, onClick }: { item: GalleryItem; onClick: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.2, ease: LUXURY_EASE }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      <GlowCard 
        glowColor="blue" 
        customSize 
        className="overflow-hidden bg-soft-ivory rounded-sm shadow-sm hover:shadow-2xl transition-all duration-700 p-0 border-0"
      >
        <AspectRatio ratio={item.isPortrait ? 4/5 : 16/10}>
          <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* After Image */}
          <img
            src={item.after}
            alt={item.title}
            className={cn(
              "h-full w-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-105",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            onLoad={() => setIsLoading(false)}
            referrerPolicy="no-referrer"
          />

          {/* Before Image (Hover reveal) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
            <img
              src={item.before}
              alt={`${item.title} Before`}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-charcoal/70 text-white text-[10px] tracking-[0.3em] uppercase px-4 py-2 backdrop-blur-sm border border-white/10">
                BEFORE
              </span>
            </div>
          </div>

          {/* Labels Always visible on desktop for luxury feel or dynamic */}
          <div className="absolute bottom-6 left-6 right-6 z-30 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
             <div className="h-px bg-gold/50 mb-3 w-12 group-hover:w-20 transition-all duration-700" />
             <span className="text-white text-[10px] tracking-[0.3em] uppercase block mb-1 drop-shadow-md">
               {item.category}
             </span>
             <h3 className="text-white text-xl md:text-2xl font-heading leading-tight drop-shadow-md">
               {item.title}
             </h3>
          </div>
          
          {/* Border Overlay */}
          <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-700 pointer-events-none z-30" />
        </AspectRatio>
      </GlowCard>
    </motion.div>
  );
};

export const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Transformation Gallery"
          subtitle="Explore our curated collection of artisanal transformations and precision grooming."
          align="center"
        />

        <div className="mt-20">
          {/* Custom Masonry-like Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              <AnimatedGalleryCard item={galleryItems[0]} onClick={() => setSelectedItem(galleryItems[0])} />
              <AnimatedGalleryCard item={galleryItems[3]} onClick={() => setSelectedItem(galleryItems[3])} />
            </div>

            {/* Column 2 - Offset slightly for editorial feel */}
            <div className="flex flex-col gap-8 lg:mt-16">
              <AnimatedGalleryCard item={galleryItems[1]} onClick={() => setSelectedItem(galleryItems[1])} />
              <AnimatedGalleryCard item={galleryItems[4]} onClick={() => setSelectedItem(galleryItems[4])} />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-8">
              <AnimatedGalleryCard item={galleryItems[2]} onClick={() => setSelectedItem(galleryItems[2])} />
              <AnimatedGalleryCard item={galleryItems[5]} onClick={() => setSelectedItem(galleryItems[5])} />
            </div>

          </div>
        </div>
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
              initial={{ scale: 0.94, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: LUXURY_EASE }}
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

              <div className="col-span-1 md:col-span-2 bg-white p-8 text-center border-t border-soft-ivory">
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
