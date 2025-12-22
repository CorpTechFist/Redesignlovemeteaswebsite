import { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs border-2 border-purple-600 animate-in slide-in-from-right">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <h3 className="text-lg mb-2 pr-6">Start Your Healing Journey!</h3>
          <p className="text-sm text-gray-600 mb-3">
            Discover our organic teas crafted for your wellness
          </p>
          <a
            href="#store"
            className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Shop Now
          </a>
        </div>
      )}

      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 group"
          aria-label="Shop now"
        >
          <ShoppingBag className="w-6 h-6 group-hover:animate-pulse" />
        </button>
      )}
    </div>
  );
}
