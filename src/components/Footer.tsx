import { Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer bg-gray-900 text-white">
      <div className="footer-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              <div className="brand">
                <img
                  src="/logo.png"
                  alt="Love Me Teas logo"
                  className="brand-logo"
                />
                <span className="brand-text">Love Me Teas</span>
              </div>
              <p className="brand-description text-gray-400 text-sm leading-relaxed">
                Providing alternative healing solutions through high-quality, organic herbal teas.
              </p>
            </div>
            <div className="space-y-1 mt-4">
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
                📧 lovemeteas@gmail.com
              </li>
              <li className="text-gray-400 text-sm">
                🕐 Monday – Friday | 9:00 AM – 4:00 PM PST
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://instagram.com/love_me_teas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-purple-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://threads.net/love_me_teas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-purple-600 transition-colors"
                aria-label="Threads"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 3.094c-1.368 0-2.656.308-3.786.858-.858.42-1.584 1.002-2.142 1.716-.564.72-1.002 1.578-1.296 2.526l2.004.654c.234-.78.57-1.446 1.002-1.968.438-.528.972-.942 1.584-1.224.762-.348 1.632-.54 2.634-.54 1.14 0 2.082.252 2.808.756.522.366.942.858 1.254 1.458.312.6.468 1.296.468 2.082 0 .672-.12 1.26-.36 1.758-.24.498-.576.918-.996 1.254-.42.336-.906.594-1.452.78v.048c.672.168 1.266.438 1.776.798.51.36.912.828 1.206 1.398.294.57.444 1.242.444 2.016 0 .882-.174 1.65-.522 2.298-.348.648-.822 1.17-1.416 1.56-.594.39-1.272.678-2.034.858-.762.18-1.572.27-2.424.27-1.41 0-2.634-.228-3.672-.69-1.038-.456-1.842-1.122-2.418-1.998-.576-.876-.924-1.944-1.044-3.204l2.04-.3c.09.954.324 1.764.696 2.43.372.666.882 1.176 1.53 1.53.648.354 1.416.528 2.31.528.78 0 1.47-.102 2.076-.312.606-.21 1.086-.516 1.434-.918.348-.402.522-.888.522-1.458 0-.648-.174-1.17-.522-1.566-.348-.396-.822-.684-1.416-.864-.594-.18-1.266-.27-2.016-.27h-1.266v-1.872h1.266c.69 0 1.308-.09 1.854-.27.546-.18.978-.456 1.296-.822.318-.366.48-.834.48-1.404 0-.522-.144-.96-.432-1.314-.288-.354-.678-.618-1.164-.792-.486-.174-1.032-.258-1.638-.258z"/>
                </svg>
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
