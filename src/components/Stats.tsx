import { useEffect, useState, useRef } from 'react';

const stats = [
  {
    number: 25,
    suffix: '+',
    label: 'Herbal Blends',
    description: 'Carefully crafted formulas',
  },
  {
    number: 1000,
    suffix: '+',
    label: 'Happy Customers',
    description: 'Across the country',
  },
  {
    number: 99,
    suffix: '%',
    label: 'Organic',
    description: 'Pure natural ingredients',
  },
  {
    number: 15,
    suffix: '+',
    label: 'Years Experience',
    description: 'In holistic healing',
  },
];

function CountUpNumber({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <div ref={ref}>{count}</div>;
}

export function Stats() {
  return (
    <section className="py-20 bg-purple-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-purple-100">
            Making a difference in holistic health, one cup at a time
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl mb-2 flex items-center justify-center">
                <CountUpNumber end={stat.number} />
                <span>{stat.suffix}</span>
              </div>
              <h3 className="text-xl md:text-2xl mb-2">{stat.label}</h3>
              <p className="text-sm text-purple-100">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
