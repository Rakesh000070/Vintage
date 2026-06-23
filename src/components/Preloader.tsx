import { motion, AnimatePresence } from "motion/react";
import React from "react";

interface PreloaderProps {
  loading: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ loading }) => {
  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-[#1A1A1A] flex flex-col items-center justify-center pointer-events-auto overflow-hidden"
        >
          {/* Ambient Background Glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-gold/5 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-gold/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <div className="flex flex-col items-center z-10">
            {/* Logo Wrapper with Halo */}
            <div className="relative mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -10, 0]
                }}
                transition={{ 
                  opacity: { duration: 1, ease: "easeOut" },
                  scale: { duration: 1, ease: "easeOut" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative z-10"
              >
                {/* Visual Halo */}
                <div className="absolute inset-0 bg-gold/20 blur-[40px] rounded-full scale-125 animate-pulse" />
                
                <img 
                  src="/images/logo.png" 
                  alt="Vintage Barber Logo" 
                  className="w-[120px] sm:w-[150px] md:w-[200px] h-auto relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                />
              </motion.div>
            </div>

            {/* Loading Components */}
            <div className="flex flex-col items-center gap-6 w-[200px]">
              {/* Progress Bar Container */}
              <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 4, 
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gold shadow-[0_0_8px_#D4AF37]"
                />
              </div>

              {/* Loading Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="text-center"
              >
                <span className="font-body text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-white/70 font-light leading-none">
                  Preparing Your Experience
                </span>
              </motion.div>
            </div>
          </div>
          
          {/* Corner Decors */}
          <div className="absolute top-12 left-12 w-12 h-12 border-l border-t border-gold/20" />
          <div className="absolute bottom-12 right-12 w-12 h-12 border-r border-b border-gold/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
