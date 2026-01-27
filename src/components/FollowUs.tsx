import { Instagram, ShoppingBag, MessageCircle, MapPin } from 'lucide-react';

export function FollowUs() {
  return (
    <section className="py-20 bg-purple-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl mb-6 tracking-wider">
          FOLLOW & FIND US ONLINE
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          <a
            href="#"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>SHOPIFY</span>
          </a>
          <span className="text-2xl">|</span>
          <a
            href="#"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm transition-all"
          >
            <Instagram className="w-5 h-5" />
            <span>INSTAGRAM</span>
          </a>
          <span className="text-2xl">&</span>
          <a
            href="#"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>THREADS</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 mb-12 text-sm">
          <MapPin className="w-4 h-4" />
          <p>LOCALLY WATER WELLNESS - SLC, UT | JULES - TBA (GOOD EARTH - TBA</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl mb-6">
            WELCOME TO OUR WOMAN-OWNED SMALL BUSINESS
          </h3>
          
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            <p>
              We are deeply committed to the art of healing through premium natural medicinal herbs — many cherished for over a millennium. Our teas are thoughtfully crafted to support those paths toward wellness. Our commitment to healing extends far beyond the cup.
            </p>
            <p>
              We also offer:
            </p>
            <ul className="list-none space-y-2 pl-4">
              <li>• Beeswax air-purifying candles that cleanse your space and elevate your spirit</li>
              <li>• Soothing Love Me Salts to relax the body and release tension</li>
              <li>• Love Me Oils that nurture the skin and soothe the senses</li>
              <li>• Love Me Lotion for daily hydration, comfort, and self-care</li>
            </ul>
            <p>
              And because your healing journey continues to evolve, we're expanding our offerings with CBD tinctures and CBD bath salts — coming soon.
            </p>
          </div>

          <div className="mt-8 space-y-2">
            <p className="text-xl">
              DRINK IN YOUR HEALTH
            </p>
            <p className="text-lg">AND</p>
            <p className="text-xl">
              BE INDEPENDENTLY HEALTHY!
            </p>
          </div>

          <div className="mt-6 text-2xl tracking-widest">
            L | M | T
          </div>
        </div>
      </div>
    </section>
  );
}