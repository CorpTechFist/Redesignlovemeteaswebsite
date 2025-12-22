import { useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1736215900628-5802c4a23db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJiYWwlMjB0ZWElMjBibGVuZCUyMG9yZ2FuaWN8ZW58MXx8fHwxNzY2MTI0MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Organic Tea Blends',
    category: 'Products',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1721138569305-bb394cb28029?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBpbmdyZWRpZW50cyUyMHNwaWNlc3xlbnwxfHx8fDE3NjYxMjQwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Natural Ingredients',
    category: 'Ingredients',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1630942047135-0c65700df966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGFuZG1hZGUlMjBzb2FwfGVufDF8fHx8MTc2NjEyNDA0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Handcrafted Soaps',
    category: 'Products',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1748390101138-79cdaf434020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdGVhJTIwcGFja2FnaW5nfGVufDF8fHx8MTc2NjEyNDA0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Eco-Friendly Packaging',
    category: 'Products',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1627744514030-28d5c0170fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGhlcmJzJTIwbWVkaWNpbmFsfGVufDF8fHx8MTc2NjEyNDA0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Fresh Dried Herbs',
    category: 'Ingredients',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1752724411364-77c30c7ac1b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBjZXJlbW9ueSUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjYxMjQwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Tea Ceremony',
    category: 'Lifestyle',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1575833949203-ade5a03eb82c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVzd2F4JTIwY2FuZGxlcyUyMG5hdHVyYWx8ZW58MXx8fHwxNzY2MTI0MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Beeswax Candles',
    category: 'Products',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1491720731493-223f97d92c21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHRlYSUyMGN1cHxlbnwxfHx8fDE3NjYxMjQwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Wellness Journey',
    category: 'Lifestyle',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1639996113206-d9d1817c1aab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwc2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjYxMjQwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Natural Skincare',
    category: 'Products',
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Products', 'Ingredients', 'Lifestyle'];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore our organic products and natural healing ingredients
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group aspect-square"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl mb-1">{image.title}</h3>
                  <p className="text-sm text-purple-300">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl max-h-[90vh]">
            <ImageWithFallback
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl mb-2">{selectedImage.title}</h3>
              <p className="text-purple-300">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}