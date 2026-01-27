import { useState } from 'react';
import { Send } from 'lucide-react';
import heartHandImage from 'figma:asset/c7749bf452952e6988dc9f099a143b053f9ebd6f.png';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    yourEmail: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-100 via-purple-200 to-purple-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Info */}
            <div className="bg-purple-600 text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src={heartHandImage} 
                  alt="" 
                  className="absolute top-10 right-10 w-32 h-32 object-contain"
                />
                <img 
                  src={heartHandImage} 
                  alt="" 
                  className="absolute bottom-10 left-10 w-24 h-24 object-contain"
                />
              </div>
              
              <div className="relative z-10 mb-8">
                <img 
                  src={heartHandImage} 
                  alt="Love Me Tea Heart Hand" 
                  className="w-16 h-16 mb-6"
                />
                <h2 className="text-3xl md:text-4xl mb-4 tracking-wider">
                  CONTACT US
                </h2>
                <p className="text-lg mb-4 opacity-90">
                  If you have questions, want to order a custom tea, or if you are 
                  affected by one of our other teas, please let us know.
                </p>
                <p className="text-xl tracking-wide">
                  DRINK IN YOUR HEALTH & BE INDEPENDENTLY HEALTHY!
                </p>
              </div>

              <div className="relative z-10 space-y-4 text-sm opacity-90">
                <p>📧 Email: lovemeteas@gmail.com</p>
                <p>🕐 Hours: Monday – Friday | 9:00 AM – 4:00 PM PST</p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-8 md:p-12 bg-purple-50">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm mb-2 text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm mb-2 text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="yourEmail" className="block text-sm mb-2 text-gray-700">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="yourEmail"
                    name="yourEmail"
                    value={formData.yourEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 w-4 h-4 text-purple-600 rounded focus:ring-purple-600"
                  />
                  <label htmlFor="consent" className="text-xs text-gray-600">
                    By checking this box and submitting your information, you are granting
                    Love Me Tea permission to email you.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}