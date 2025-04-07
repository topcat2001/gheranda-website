import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tourImages = [
  {
    url: "tour1.jpeg",
    caption: "Chidambaram Nataraja temple visit with priest"
  },
  {
    url: "tour2.jpeg",
    caption: ""
  },
  {
    url: "tour3.jpeg",
    caption: ""
  },
  {
    url: "tour4.jpeg",
    caption: ""
  },
  {
    url: "tour5.jpeg",
    caption: "Morning yoga practice by the seashore"
  }
];

export const PastTours = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % tourImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tourImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tourImages.length) % tourImages.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="past-tours" className="px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="relative group">
          {/* Main Image */}
          <div className="relative h-[600px] overflow-hidden rounded-lg">
            {tourImages.map((image, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-xl text-white font-serif">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2">
            {tourImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-yellow-600 w-4'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};