import { Heart, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">LOVE</span>
              <Heart className="w-4 h-4 fill-purple-400 text-purple-400" />
              <span className="text-xl">ME TEA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Providing alternative healing solutions through high-quality, organic herbal teas.
            </p>
            <div className="space-y-1">
              <p className="text-gray-400 text-sm">
                Love Me Tea is a registered Trademark.
              </p>
              <p className="text-gray-400 text-sm">
                Pavilion Registered Trademark 702358
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#history" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  History & Legends
                </a>
              </li>
              <li>
                <a href="#store" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Store
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                📧 lovemeteaa@gmail.com
              </li>
              <li className="text-gray-400 text-sm">
                📱 Phone: (555) 123-4567
              </li>
              <li className="text-gray-400 text-sm">
                🕐 Hours: Mon-Fri 9AM-5PM EST
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-purple-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-purple-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-purple-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:lovemeteaa@gmail.com"
                className="bg-gray-800 p-2 rounded-lg hover:bg-purple-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} LOVE ME TEA. All rights reserved. | Independently Healthy
          </p>
        </div>
      </div>
    </footer>
  );
}