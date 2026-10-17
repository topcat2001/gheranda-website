import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const trainingImages = [
  {
    url: "train1.png",
    caption: ""
  },
  {
    url: "train2.png",
    caption: ""
  },
  {
    url: "train3.png",
    caption: ""
  }
];

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
  const [trainingSlide, setTrainingSlide] = useState(0);
  const [tourSlide, setTourSlide] = useState(0);
  const [isTrainingAutoPlaying, setIsTrainingAutoPlaying] = useState(true);
  const [isTourAutoPlaying, setIsTourAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isTrainingAutoPlaying) return;
    const timer = setInterval(() => {
      setTrainingSlide((prev) => (prev + 1) % trainingImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isTrainingAutoPlaying]);

  useEffect(() => {
    if (!isTourAutoPlaying) return;
    const timer = setInterval(() => {
      setTourSlide((prev) => (prev + 1) % tourImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isTourAutoPlaying]);

  return (
    <section id="past-tours" className="px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Past Trainings */}
        <div>
          <h2 className="text-2xl font-serif text-yellow-600 mb-6 text-center">Past Trainings</h2>
          <div className="relative group">
            <div className="relative h-[500px] overflow-hidden rounded-lg bg-black">
              {trainingImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-1000 flex items-center justify-center ${
                    index === trainingSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.caption || "Past training"}
                    className="max-w-full max-h-full object-contain"
                  />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                      <p className="text-xl text-white font-serif">{image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => { setTrainingSlide((prev) => (prev - 1 + trainingImages.length) % trainingImages.length); setIsTrainingAutoPlaying(false); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous training"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => { setTrainingSlide((prev) => (prev + 1) % trainingImages.length); setIsTrainingAutoPlaying(false); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next training"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {trainingImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setTrainingSlide(index); setIsTrainingAutoPlaying(false); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === trainingSlide ? 'bg-yellow-600 w-4' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to training ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Past Tours */}
        <div>
          <h2 className="text-2xl font-serif text-yellow-600 mb-6 text-center">Past Tours</h2>
          <div className="relative group">
            <div className="relative h-[500px] overflow-hidden rounded-lg bg-black">
              {tourImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-1000 flex items-center justify-center ${
                    index === tourSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.caption || "Past tour"}
                    className="max-w-full max-h-full object-contain"
                  />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                      <p className="text-xl text-white font-serif">{image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() => { setTourSlide((prev) => (prev - 1 + tourImages.length) % tourImages.length); setIsTourAutoPlaying(false); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous tour"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => { setTourSlide((prev) => (prev + 1) % tourImages.length); setIsTourAutoPlaying(false); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next tour"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {tourImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setTourSlide(index); setIsTourAutoPlaying(false); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === tourSlide ? 'bg-yellow-600 w-4' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to tour ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};