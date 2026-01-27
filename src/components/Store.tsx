import { useState } from 'react';
import { ShoppingCart, Check, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

const products = [
  // Tea Products
  {
    id: 1,
    name: 'Anxiety Buster',
    category: 'HERBAL TEAS',
    description: 'Natural blend to support mental clarity and reduce anxiety',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1659200735264-955ed8519cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwcm9kdWN0cyUyMGJvdHRsZXN8ZW58MXx8fHwxNzY2MTIyNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'POPULAR',
  },
  {
    id: 2,
    name: 'BP Reducer',
    category: 'HERBAL TEAS',
    description: 'Herbal blend to support healthy blood pressure levels',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1733287041570-0d28af17bf83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdGVhJTIwYmFncyUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NjYxMjI1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'WELLNESS',
  },
  {
    id: 3,
    name: 'Cold Cough Crusher',
    category: 'HERBAL TEAS',
    description: 'Year-round relief for respiratory health and congestion',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1733287041570-0d28af17bf83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdGVhJTIwYmFncyUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NjYxMjI1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'ALL YEAR RELIEF',
  },
  {
    id: 4,
    name: 'Sleep Sound',
    category: 'HERBAL TEAS',
    description: 'Promotes restful sleep and reduces anxiety naturally',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1733287041570-0d28af17bf83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdGVhJTIwYmFncyUyMHBhY2thZ2luZ3xlbnwxfHx8fDE3NjYxMjI1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'INSOMNIA RELIEF',
  },
  // Essential Oils
  {
    id: 5,
    name: 'Bergamot Lavender Essential Oil',
    category: 'ESSENTIAL OILS',
    description: 'Calming blend of bergamot and lavender for aromatherapy and relaxation',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3NlbnRpYWwlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzY2MTIyNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'AROMATHERAPY',
  },
  {
    id: 6,
    name: 'Eucalyptus Essential Oil',
    category: 'ESSENTIAL OILS',
    description: 'Pure eucalyptus oil for respiratory support and clarity',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3NlbnRpYWwlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzY2MTIyNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'RESPIRATORY',
  },
  {
    id: 7,
    name: 'CBD Tincture Oil',
    category: 'ESSENTIAL OILS',
    description: 'Premium CBD oil for wellness and balance',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3NlbnRpYWwlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzY2MTIyNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'COMING SOON',
    comingSoon: true,
  },
  // Other Products
  {
    id: 8,
    name: '100% Beeswax Candles',
    category: '100% BEESWAX CANDLES',
    description: '100% Premium Organic Beeswax Love Me Candles',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1610858631039-61b9fd88cf22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjB0ZWElMjBjYW5kbGVzfGVufDF8fHx8MTc2NjEyMjU2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'More options',
  },
  {
    id: 9,
    name: 'Love Me Lotion Body Butter',
    category: 'Bath & Body',
    description: 'Support, sustain, & protect with essential nutrients',
    price: 19.00,
    image: 'https://images.unsplash.com/photo-1730378616989-499041edc37a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc29hcCUyMGJhcnN8ZW58MXx8fHwxNzY2MDYxOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'More options',
  },
  {
    id: 10,
    name: 'Love Me Salts – Bath Salts',
    category: 'Bath & Body',
    description: 'Luxurious bath salts for relaxation and rejuvenation',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3NlbnRpYWwlMjBvaWwlMjBib3R0bGV8ZW58MXx8fHwxNzY2MTIyNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'More options',
    options: {
      scents: ['Bergamot Lavender', 'Eucalyptus'],
      sizes: ['Small', 'Large']
    }
  },
];

export function Store() {
  const categories = ['All', 'HERBAL TEAS', 'ESSENTIAL OILS', '100% BEESWAX CANDLES', 'Bath & Body'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [selectedScent, setSelectedScent] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
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

  const handleProductClick = (product: typeof products[0]) => {
    if (!product.comingSoon) {
      setSelectedProduct(product);
      if (product.options?.scents) {
        setSelectedScent(product.options.scents[0]);
      }
      if (product.options?.sizes) {
        setSelectedSize(product.options.sizes[0]);
      }
    }
  };

  const handleCloseDialog = () => {
    setSelectedProduct(null);
    setSelectedScent('');
    setSelectedSize('');
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
              onClick={() => handleProductClick(product)}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all group ${
                product.comingSoon 
                  ? 'opacity-60 cursor-not-allowed' 
                  : 'hover:shadow-xl hover:-translate-y-2 cursor-pointer'
              }`}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    product.comingSoon ? 'grayscale' : 'group-hover:scale-110'
                  }`}
                />
                {product.tag && (
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm ${
                    product.comingSoon 
                      ? 'bg-gray-500 text-white' 
                      : 'bg-purple-600 text-white'
                  }`}>
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
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!product.comingSoon) handleAddToCart(product);
                    }}
                    disabled={product.comingSoon}
                    className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
                      product.comingSoon
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : addedToCart === product.id
                        ? 'bg-green-500 text-white'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    {product.comingSoon ? (
                      'Coming Soon'
                    ) : addedToCart === product.id ? (
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

        {/* Product Details Dialog */}
        {selectedProduct && (
          <Dialog open={true} onOpenChange={handleCloseDialog}>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl">{selectedProduct.name}</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="relative overflow-hidden h-64 rounded-lg">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedProduct.tag && (
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm ${
                      selectedProduct.comingSoon 
                        ? 'bg-gray-500 text-white' 
                        : 'bg-purple-600 text-white'
                    }`}>
                      {selectedProduct.tag}
                    </span>
                  )}
                </div>
                
                <div>
                  <div className="text-xs text-purple-600 mb-2 uppercase tracking-wide">
                    {selectedProduct.category}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {selectedProduct.description}
                  </p>
                  
                  <div className="text-3xl text-purple-600 mb-4">
                    ${selectedProduct.price}
                  </div>

                  {/* Options */}
                  {selectedProduct.options?.scents && (
                    <div className="mb-4">
                      <Label className="text-sm mb-2 block">Scent</Label>
                      <RadioGroup
                        value={selectedScent}
                        onValueChange={setSelectedScent}
                        className="flex flex-col space-y-2"
                      >
                        {selectedProduct.options.scents.map(scent => (
                          <div key={scent} className="flex items-center space-x-2">
                            <RadioGroupItem value={scent} id={`scent-${scent}`} />
                            <Label htmlFor={`scent-${scent}`} className="cursor-pointer">
                              {scent}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}

                  {selectedProduct.options?.sizes && (
                    <div className="mb-4">
                      <Label className="text-sm mb-2 block">Size</Label>
                      <RadioGroup
                        value={selectedSize}
                        onValueChange={setSelectedSize}
                        className="flex flex-col space-y-2"
                      >
                        {selectedProduct.options.sizes.map(size => (
                          <div key={size} className="flex items-center space-x-2">
                            <RadioGroupItem value={size} id={`size-${size}`} />
                            <Label htmlFor={`size-${size}`} className="cursor-pointer">
                              {size}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}

                  <button
                    onClick={() => {
                      handleAddToCart(selectedProduct);
                      handleCloseDialog();
                    }}
                    className="w-full px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}