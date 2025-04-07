import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const yogaPoses = [
  {
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    caption: ""
  },
  {
    url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
    caption: ""
  },
  {
    url: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80",
    caption: ""
  },
  {
    url: "/padmasana.jpeg",
    caption: ""
  }
];

export const Teaching = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % yogaPoses.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % yogaPoses.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + yogaPoses.length) % yogaPoses.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-serif text-yellow-600 mb-6">Ashtanga</h2>
            <div className="prose">
              <p className="text-gray-700 mb-8">
                Ashtanga yoga is a dynamic and physically demanding practice that synchronizes breath with 
                movement in a specific sequence of postures. This practice builds strength, flexibility, 
                and concentration while purifying the body and mind.
              </p>
            </div>

            <h3 className="text-2xl font-serif text-yellow-600 mb-4">Classes</h3>
            <div className="bg-white/80 rounded-lg p-6 mb-8">
              <p className="text-gray-700">
                Ashtanga yoga led Primary Series<br />
                Sundays at 10:30am<br />
                Samarya Center<br />
                1806 E. Yesler Way
              </p>
            </div>

            <h3 className="text-2xl font-serif text-yellow-600 mb-4">Yoga Sutras Chanting</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-700">
                <button className="bg-yellow-600 p-2 rounded-full">
                  <Play className="h-4 w-4 text-white" />
                </button>
                <span>Track 1 - Patanjali Dhyana</span>
              </div>
              <div className="flex items-center gap-4 text-gray-500">
                <button className="bg-yellow-600/50 p-2 rounded-full cursor-not-allowed">
                  <Play className="h-4 w-4 text-white" />
                </button>
                <span>Track 2 - Samadhi Pada - Coming soon!</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              {yogaPoses.map((pose, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={pose.url}
                    alt={pose.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                    <p className="text-xl text-white font-serif">{pose.caption}</p>
                  </div>
                </div>
              ))}
            </div>

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

            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2">
              {yogaPoses.map((_, index) => (
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
      </div>
    </div>
  );
};