import React, { useEffect, useRef, useState, useCallback } from 'react';
import './GooeyTextMorph.css';

/**
 * GooeyTextMorph - Text morphing animation that cycles through words
 * Simplified version without complex SVG filters for better compatibility
 */
const GooeyTextMorph = ({
  texts = ["Fresh", "Artisan", "Handmade", "Daily"],
  interval = 2500,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const nextWord = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      setIsAnimating(false);
    }, 400); // Half of transition time
  }, [texts.length]);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const timer = setInterval(nextWord, interval);

    return () => clearInterval(timer);
  }, [interval, nextWord]);

  return (
    <div ref={containerRef} className={`text-morph-container ${className}`}>
      <span
        className={`text-morph-word ${isAnimating ? 'text-morph-exit' : 'text-morph-enter'}`}
      >
        {texts[currentIndex]}
      </span>
    </div>
  );
};

export default GooeyTextMorph;
