import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'ABOUT OUR MISSION',
    content: [
      'LOVE ME TEA IS A NOMAD-ONSITE SMALL BUSINESS BASED IN NASHVILLE LEGAL WE ARE DEDICATED TO ACHIEVING COMPLETE SUSTAINABILITY BY ALL OUR PRACTICES. OUR PRODUCTS ARE 99% ORGANIC AND SOURCED ETHICALLY/ORGANICALLY THROUGH EARTHLY SOURCES!',
      'AT LOVE ME TEA, WE ENCOURAGE INDIVIDUALS BOTH IN THE COMMUNITY & THOSE ABROAD, TO LEARN MORE ABOUT THEIR HEALTH & HERBAL CARE. WE BELIEVE THAT EVERY ACTION COUNTS, NO MATTER HOW SMALL, TO FURTHER OUR MISSION, WE HAVE PARTNERED WITH A LOCAL (NON-PROFIT) ORGANIZATION TO SUPPORT THOSE FACING MEDICAL & MENTAL TRAUMA.',
      'WE ADVOCATE THE USE OF A NON-TOXIC NON-INVASIVE TREATMENT METHODS AND SPREAD AWARENESS ABOUT MENTAL AND PHYSICAL HEALTH--THERE ARE ALWAYS ALTERNATIVES EVEN TO WELLNESS!',
      'OUR MISSION IS TO PROVIDE A SANCTUARY OF HEALING AND COMFORT THROUGH OUR TEAS, SKINCARE, AND CANDLES. EVERYONE DESERVES A HOLISTIC APPROACH TO HEALTH THAT HONORS THE WISDOM OF NATURE. WE BELIEVE IN THE POWER OF THESE TIME-HONORED HERBS TO BRING BALANCE AND VITALITY TO YOUR LIFE AND YOUR JOURNEY TO WELLNESS STARTS HERE WITH US.',
      'BE INDEPENDENTLY HEALTHY!'
    ]
  }
];

export function AboutMission() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="history" className="relative py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-red-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl text-center mb-12 tracking-wider">
              {slide.title}
            </h2>
            
            <div className="space-y-6 text-center">
              {slide.content.map((paragraph, idx) => (
                <p key={idx} className="text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {slides.length > 1 && (
          <div className="flex justify-center gap-3 mt-12">
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
        )}
      </div>
    </section>
  );
}