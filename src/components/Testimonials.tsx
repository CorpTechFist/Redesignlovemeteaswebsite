import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'CHRISTINE ALEXANDRIA',
    date: '08-10-2023',
    rating: 5,
    text: 'What a Beautiful and thoughtful line of teas to boost and yet calm your mind, body and soul. Really loving the anxiety buster. Me & so much better with it in my life!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Christine',
  },
  {
    name: 'ASTARA JANE',
    date: '08-06-2023',
    rating: 4,
    text: 'I received the Love Me Tea package the other day and was so happy to dive in! The beeswax candles are so cute on my altar, and the soothing the Blood Pressure reducer helped a ton. This is a beautiful package of self-care items to brighten your day! Treat yourself!!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Astara',
  },
  {
    name: 'ASTARA JANE',
    date: '04-06-2023',
    rating: 5,
    text: 'I received the Love Me Tea package the other day and was so happy to dive in! The beeswax candles are so cute on my altar, and the soothing the Blood Pressure reducer helped a ton. This is a beautiful package of self-care items to brighten your day! The packaging is beautiful and I love that they\'re tea/oil-free packaging which is rare. The soap is lovely and the soap is sweetener is DIVINE... it represents working! Together, Harmony, Nourishing QUEEN/S who is using Love Me Tea products! - xoxo Astara',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Astara2',
  },
  {
    name: 'SANDRA CORCORAN',
    date: '04-20-2023',
    rating: 5,
    text: 'Wonderful products from Love Me Tea, a woman owned business with a focus towards healing and natural ingredients! I enjoyed the congratulations card and beautiful soap product that await. The packaging shows tender loving care, is environmentally friendly and all with a beautiful rose, and the instructions were so added bonus. Many thanks and may your company attract the right & well true you\'re conscious and into your products.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sandra',
  },
  {
    name: 'MIRIAM',
    date: '03-15-2023',
    rating: 5,
    text: 'It was a wonderful surprise when I got the Love Me Tea package! It was so special as beautifully put together. I\'ve been battling a persistent cough for a while. The Cough & Cold Control has helped me tremendously! I\'m really in awe more. Thank you 😊!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Miriam',
  },
  {
    name: 'Candace',
    date: '04-14-2025',
    rating: 5,
    text: 'I tried the BP Reducer tea & drank it first thing in the morning - it surprisingly lowered my blood pressure without medication. However, I recommend the Micha Essence, as the teas are not sweetened at all. Thank you for delivering a great tea that works!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Candace',
  },
  {
    name: 'Grandma',
    date: '03-20-2025',
    rating: 5,
    text: 'Love Me Tea helped with my insomnia & anxiety. The teas worked! I would recommend to anyone looking for natural ways to heal with common ailments. Thank you for the quality!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Grandma',
  },
  {
    name: 'Mark',
    date: '02-15-2025',
    rating: 5,
    text: 'After drinking the BP Reducer tea, I literally felt calmer, & my blood pressure went down as much as when I take my medications, except I didn\'t take the medications! You will need the Micha Essence or some other sweetener. The teas are natural so there is no taste or lightness/bitterness with the tea, that\'s a win for me!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark',
  },
  {
    name: 'Chantelle',
    date: '01-28-2025',
    rating: 5,
    text: 'The soap lathers well & is soft. It smells good & leaves my skin smooth & hydrated. It helped my dry skin just after one wash! Love My Tea Soaps!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chantelle',
  },
  {
    name: 'Kelso',
    date: '02-05-2025',
    rating: 5,
    text: 'After trying Love Me Tea Soap, my eczema immediately began to clear up! It made my hands so soft. Me (I quit) I found an all organic, natural way to stop itching & help my eczema! I recommend to anyone with skin conditions or dermatitis!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kelso',
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-purple-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-4 border-white rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-white tracking-wider">
            REVIEWS & TESTIMONIALS
          </h2>
          <p className="text-lg text-purple-100 italic">
            READ WHAT OUR CUSTOMERS OUR SAYING ABOUT OUR PRODUCTS!
          </p>
        </div>

        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
            >
              {/* Verified badge */}
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full bg-purple-100 flex-shrink-0 ring-4 ring-purple-100"
                />
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg text-purple-600">{testimonial.name}</h3>
                    <span className="text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}