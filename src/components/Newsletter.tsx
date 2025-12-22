import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-600 via-purple-700 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative border at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Subscribe Form */}
          <div className="relative z-10">
            <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl mb-6 text-center tracking-wider">
                SUBSCRIBE
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg transition-colors text-lg"
                >
                  Subscribe
                </button>
                
                <p className="text-sm text-center leading-relaxed opacity-90">
                  By subscribing you grant permission for Love Me Tea to email you.
                  You may unsubscribe at any time by emailing our team.
                </p>
              </form>
              
              <div className="mt-8 pt-8 border-t border-white/20 text-center">
                <p className="text-xl mb-2 tracking-widest">
                  AND
                </p>
                <p className="text-2xl tracking-wider">
                  BE INDEPENDENTLY HEALTHY!
                </p>
                <div className="mt-6 flex justify-center gap-4 text-3xl tracking-widest">
                  <span>L</span>
                  <span>|</span>
                  <span>M</span>
                  <span>|</span>
                  <span>T</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-400 rounded-full blur-3xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1758749949406-001a4c65210a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsdWUlMjBkcmVzcyUyMG15c3RpY2FsfGVufDF8fHx8MTc2NjEyMjcwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mystical Woman"
                className="relative rounded-full w-80 h-80 object-cover border-4 border-purple-400 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
