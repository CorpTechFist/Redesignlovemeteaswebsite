import { Search, ShoppingCart, Package, Heart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover Your Needs',
    description: 'Browse our collection of organic teas and natural products designed for specific health concerns.',
  },
  {
    icon: ShoppingCart,
    number: '02',
    title: 'Choose Your Blend',
    description: 'Select the perfect tea blend or product that addresses your wellness goals.',
  },
  {
    icon: Package,
    number: '03',
    title: 'Receive & Enjoy',
    description: 'Get your order delivered in eco-friendly, 100% compostable packaging.',
  },
  {
    icon: Heart,
    number: '04',
    title: 'Experience Healing',
    description: 'Drink in your health and feel the natural benefits of our time-honored herbal remedies.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-700">
            Your journey to natural healing in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-purple-200 -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 text-center z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-4 relative">
                    <Icon className="w-10 h-10 text-white" />
                    <span className="absolute -top-2 -right-2 bg-white text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-lg">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#store"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Healing Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
