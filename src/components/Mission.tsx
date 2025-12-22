import { Heart, Leaf, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Organic Ingredients',
    description: 'We use only organic, wild & pesticide-free ingredients in all our tea blends.',
  },
  {
    icon: Heart,
    title: 'Holistic Healing',
    description: 'Our teas are crafted to support your body\'s natural healing processes.',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'We partner with WAM Alliance to provide resources for those in need.',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Every batch is tested to ensure the highest quality and effectiveness.',
  },
];

export function Mission() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
            Love Me Tea is dedicated to providing alternative healing solutions through 
            high-quality, organic herbal teas. We believe in empowering individuals to take 
            control of their health naturally.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-600 transition-colors">
                  <Icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-purple-600 text-white rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl mb-4">
            Join Our Healing Journey
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Experience the power of natural healing with our carefully crafted herbal tea blends. 
            Each cup is a step towards better health and independence.
          </p>
          <a
            href="#store"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Explore Our Teas
          </a>
        </div>
      </div>
    </section>
  );
}
