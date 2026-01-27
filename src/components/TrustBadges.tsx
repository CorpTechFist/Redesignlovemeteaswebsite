import { Leaf, Package } from 'lucide-react';

const badges = [
  {
    icon: Leaf,
    title: '100% Organic',
    description: 'Certified organic ingredients',
  },
  {
    icon: Package,
    title: '100% Recyclable / Compostable',
    description: 'Eco-friendly packaging',
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-16 md:gap-24">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="bg-white p-4 rounded-full shadow-lg mb-3 group-hover:shadow-xl group-hover:scale-110 transition-all">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-sm mb-1">{badge.title}</h3>
                <p className="text-xs text-gray-600">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}