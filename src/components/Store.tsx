import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: '100% Organic Calm & Clear Anxiety Relief Tea',
    category: 'HERBAL TEAS',
    description: 'Natural blend to support mental clarity and reduce anxiety',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1659200735264-955ed8519cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwcm9kdWN0cyUyMGJvdHRsZXN8ZW58MXx8fHwxNzY2MTIyNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'POPULAR',
  },
  {
    id: 2,
    name: '100% Organic Congestion & Cough Relief Tea',
    category: 'HERBAL TEAS',
    description: 'Year-round relief for respiratory health',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1733287041570-0d28af17bf83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdGVhJTIwYmFncyUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NjYxMjI1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'ALL YEAR RELIEF',
  },
  {
    id: 3,
    name: 'Insomnia Relief Tea',
    category: 'HERBAL TEAS',
    description: 'Promotes restful sleep and reduces anxiety naturally',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1733287041570-0d28af17bf83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdGVhJTIwYmFncyUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NjYxMjI1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'INSOMNIA RELIEF',
  },
  {
    id: 4,
    name: 'MiCha Essence',
    category: 'MiCha Essence',
    description: 'Natural sweetener to enhance your tea experience',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1659200735264-955ed8519cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwcm9kdWN0cyUyMGJvdHRsZXN8ZW58MXx8fHwxNzY2MTIyNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'New',
  },
  {
    id: 5,
    name: '100% Beeswax Heart Candles',
    category: '100% BEESWAX CANDLES',
    description: '100% Premium Organic Beeswax Love Me Candles',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1610858631039-61b9fd88cf22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjB0ZWElMjBjYW5kbGVzfGVufDF8fHx8MTc2NjEyMjU2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'More options',
  },
  {
    id: 6,
    name: 'Love Me Tea Whipped Butter',
    category: 'Skin Care',
    description: 'Support, sustain, & protect with essential nutrients',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1730378616989-499041edc37a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc29hcCUyMGJhcnN8ZW58MXx8fHwxNzY2MDYxOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'More options',
  },
];

export function Store() {
  const categories = ['All', 'HERBAL TEAS', 'MiCha Essence', '100% BEESWAX CANDLES', 'Skin Care'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <section id="store" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Our Store
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Discover our collection of organic teas, natural skincare, and healing products
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {product.tag}
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <div className="text-xs text-purple-600 mb-2 uppercase tracking-wide">
                  {product.category}
                </div>
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl text-purple-600">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
                      addedToCart === product.id
                        ? 'bg-green-500 text-white'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    {addedToCart === product.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        Added!
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}