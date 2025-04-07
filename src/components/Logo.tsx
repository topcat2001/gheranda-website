import React from 'react';

export const Logo = ({ className = "h-20" }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src="/gheranda-logo.png"
      alt="Gheranda - The essence of yoga"
      className="h-full w-auto object-contain [filter:invert(30%)_sepia(10%)_saturate(1500%)_hue-rotate(346deg)_brightness(85%)_contrast(80%)]"
    />
  </div>
);