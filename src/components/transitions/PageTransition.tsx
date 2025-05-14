"use client";

import React, { useState, useEffect } from "react";
import { RevealFx } from "@/once-ui/components";

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reset the animation state when the route changes
    setIsLoaded(false);
    
    // Trigger the animation after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <RevealFx 
      translateY="8" 
      speed="fast" 
      style={{ opacity: isLoaded ? 1 : 0 }}
      trigger={isLoaded}
    >
      {children}
    </RevealFx>
  );
};