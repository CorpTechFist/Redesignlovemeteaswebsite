import { useState } from 'react';
import { ShoppingCart, Check, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { products, Product } from '../data/products';

export function Store() {
  const categories = ['All', 'HERBAL TEAS', 'ESSENTIAL OILS', '100% BEESWAX CANDLES', 'Bath & Body'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedScent, setSelectedScent] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
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

  const handleProductClick = (product: Product) => {
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
