import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I think I've finally been able to process the whole trip or at least most of it. Just wanted to say thanks so much for an awesome experience. There were a lot of moments from it that I will never forget.",
    author: "Ashley",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80"
  },
  {
    quote: "I truly had such an amazing time in India. Thank you for all your hard work, patience and thoughtfulness. I am already starting to think about going back next year.",
    author: "Laura",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&q=80"
  },
  {
    quote: "The yoga tour was transformative. The combination of daily practice, cultural immersion, and spiritual guidance created an unforgettable experience that continues to influence my practice.",
    author: "Michael",
    location: "Vancouver, BC",
    image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&q=80"
  }
];

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen pt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative group min-h-[600px] mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-1000 ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div className="relative bg-white/80 p-8 rounded-lg">
                  <div className="absolute -top-4 -left-4 text-yellow-600">
                    <Quote className="h-12 w-12" />
                  </div>
                  <blockquote className="pt-12 text-2xl md:text-3xl font-serif text-gray-700 italic mb-8">
                    {testimonial.quote}
                  </blockquote>
                  <div className="text-yellow-600">
                    <p className="font-serif text-xl">{testimonial.author}</p>
                    <p className="text-sm text-yellow-600/70">{testimonial.location}</p>
                  </div>
                </div>
                <div className="relative h-[400px] md:h-[500px]">
                  <img
                    src={testimonial.image}
                    alt={`Yoga tour with ${testimonial.author}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute -left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-yellow-600 w-8'
                    : 'bg-yellow-600/30 hover:bg-yellow-600/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};