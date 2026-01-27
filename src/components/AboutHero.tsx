import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'DRINK IN YOUR HEALTH!',
    description: 'Follow & Find us Online - Instagram, Shopify & Threads',
    subtitle: 'Locally Water Wellness - SLC, UT',
    longText: 'Our teas are specially designed to support the finest organic ingredients, sourced from environmentally safe and fair-trade campaigns. They are designed to improve health and heal our bodies naturally. We use only organic, wild & pesticide-free ingredients.',
    extraText: 'Our teas are formulated to provide relief from a variety of ailments without side effects, toxins, or harmful synthetic ingredients. They promote overall well-being, our small batches ensure quality and freshness.',
    callout: 'Look for our new Premium Essential Oil & CBD Bath Bombs - COMING SOON!',
    footer: 'NO artificial sweeteners/flavoring.',
    note: 'LOVE ME TEA NEW TEA PACKAGING 100% compostable!',
    image: 'https://images.unsplash.com/photo-1741599900547-bc5885bdf600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHRlYSUyMHNwaWNlcyUyMGJvd2xzfGVufDF8fHx8MTc2NjEyMjI4NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'HOLISTIC NEWS',
    description: 'Our quarterly holistic healing newsletter provides current information of alternative methods and news.',
    longText: 'It aims to be independently healthy. We give tips on how to support our bodies through progressive methods to healing. Discern and repeat healthy healing news about cancer, hepatitis, diabetes, heart disease, kidney dialysis, asthma, back pain, and mental health. Learn a feel-good life!!!',
    image: 'https://images.unsplash.com/photo-1752724411364-77c30c7ac1b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBjZXJlbW9ueSUyMHBlYWNlZnVsfGVufDF8fHx8MTc2NjEyMjI4NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'THE CEO',
    description: 'I founded Love Me Tea with a mission to provide alternative healing solutions for common ailments.',
    longText: 'Our goal is to create a space where people can find high quality teas that truly work and learn about the herbs they are consuming. We are dedicated to supporting independence, health without relying on big Pharma. We use only organic, wild & pesticide-free ingredients concoctions to support healing and health.',
    image: 'https://images.unsplash.com/photo-1762328868620-76572366d607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjB0ZWElMjBpbmdyZWRpZW50c3xlbnwxfHx8fDE3NjYwODk3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function AboutHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-wider">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto">
                {slide.description}
              </p>
              {slide.subtitle && (
                <p className="text-base md:text-lg mb-4 opacity-90">
                  {slide.subtitle}
                </p>
              )}
              <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed opacity-90 mb-3">
                {slide.longText}
              </p>
              {slide.extraText && (
                <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed opacity-90 mb-3">
                  {slide.extraText}
                </p>
              )}
              {slide.callout && (
                <p className="text-base md:text-lg mb-3 opacity-95">
                  {slide.callout}
                </p>
              )}
              {slide.footer && (
                <p className="text-sm opacity-90 mb-2">
                  {slide.footer}
                </p>
              )}
              {slide.note && (
                <p className="text-xs md:text-sm italic opacity-80">
                  {slide.note}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
