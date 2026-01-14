'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CardCarouselProps {
  items: React.ReactNode[];
  itemsPerView?: number;
}

export default function CardCarousel({ items, itemsPerView = 3 }: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportItems, setViewportItems] = useState(itemsPerView);

  useEffect(() => {
    const updateViewport = () => {
      if (window.innerWidth < 640) {
        setViewportItems(1);
      } else if (window.innerWidth < 1024) {
        setViewportItems(2);
      } else {
        setViewportItems(itemsPerView);
      }
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, items.length - viewportItems);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  const cardWidth = 100 / viewportItems;

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: `-${currentIndex * cardWidth}%`,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2 md:px-3 lg:px-4"
              style={{
                width: `${cardWidth}%`,
              }}
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      {items.length > viewportItems && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 lg:-translate-x-8 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 border border-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Anterior"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 lg:translate-x-8 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 border border-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Siguiente"
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {items.length > viewportItems && (
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? 'w-8 bg-purple-400'
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
