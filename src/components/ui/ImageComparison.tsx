import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { cn } from '../../lib/utils';

interface ImageComparisonProps {
  before: string;
  after: string;
  className?: string;
  aspectRatio?: number;
}

export const ImageComparison: React.FC<ImageComparisonProps> = ({
  before,
  after,
  className,
  aspectRatio = 4 / 5,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // slider position in percentage (0 to 100)
  const sliderPos = useMotionValue(50);
  const smoothSliderPos = useSpring(sliderPos, {
    damping: 30,
    stiffness: 300,
    mass: 0.5
  });

  const clipPath = useTransform(smoothSliderPos, (v) => `inset(0 ${100 - v}% 0 0)`);
  const left = useTransform(smoothSliderPos, (v) => `${v}%`);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    
    sliderPos.set(percent);
  }, [sliderPos]);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  };

  const onMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  }, [isDragging, handleMove]);

  const onEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchmove', onMove, { passive: false });
      window.addEventListener('touchend', onEnd);
    } else {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    }
    
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isDragging, onMove, onEnd]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden cursor-ew-resize select-none touch-pan-y",
        className
      )}
      style={{ aspectRatio }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 z-10">
        <img 
          src={after} 
          alt="After" 
          className="w-full h-full object-cover"
          draggable={false}
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-dusty-mauve/80 text-white text-[10px] tracking-[0.3em] uppercase px-4 py-1.5 backdrop-blur-md z-20 pointer-events-none">
          AFTER
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <motion.div 
        className="absolute inset-0 z-20 overflow-hidden"
        style={{ clipPath }}
      >
        <img 
          src={before} 
          alt="Before" 
          className="w-full h-full object-cover"
          draggable={false}
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-black/50 text-white text-[10px] tracking-[0.3em] uppercase px-4 py-1.5 backdrop-blur-md border border-white/10 z-20 pointer-events-none">
          BEFORE
        </div>
      </motion.div>

      {/* Slider Handle */}
      <motion.div 
        className="absolute inset-y-0 z-30 w-1 flex items-center justify-center pointer-events-none"
        style={{ left }}
      >
        <div className="absolute h-full w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
        
        {/* Handle Button - Increased touch area */}
        <div className="absolute h-12 w-12 flex items-center justify-center">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white border-2 border-white shadow-xl pointer-events-auto">
                <div className="flex gap-1">
                    <div className="w-0.5 h-3 bg-charcoal/30 rounded-full" />
                    <div className="w-0.5 h-4 bg-charcoal/60 rounded-full" />
                    <div className="w-0.5 h-3 bg-charcoal/30 rounded-full" />
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};
