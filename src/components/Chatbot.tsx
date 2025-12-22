import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { productsData, herbsData, faqData, healthConcerns } from '../utils/chatbotData';
import { useCart } from '../context/CartContext';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  productRecommendations?: number[];
  timestamp: Date;
}

const quickReplies = [
  'Help me find a tea',
  'What are your products?',
  'Tell me about herbs',
  'FAQ',
  'Contact information',
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! 💜 Welcome to Love Me Tea. I'm here to help you start your healing journey. What health concern would you like to address today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateBotResponse = (userMessage: string): { content: string; productRecommendations?: number[] } => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for greetings
    if (/^(hi|hello|hey|greetings|good morning|good afternoon)/.test(lowerMessage)) {
      return {
        content: "Hello! 👋 I'm your Love Me Tea Healing Guide. I have extensive knowledge about:\n\n• **Natural remedies** for 20+ health conditions\n• **20 medicinal herbs** and their healing properties\n• **Product recommendations** tailored to your needs\n• **30+ FAQs** about herbal medicine\n• **Safety information** and usage guidelines\n\nJust tell me what you're struggling with or what health concern you'd like to address! I can help with anxiety, sleep, pain, digestion, immunity, and much more. 🌿"
      };
    }

    // Check for health concerns - Enhanced matching
    for (const concern of healthConcerns) {
      if (concern.keywords.some(keyword => lowerMessage.includes(keyword))) {
        const products = concern.recommendedProducts.map(id => 
          productsData.find(p => p.id === id)
        ).filter(Boolean);
        
        const herbs = concern.recommendedHerbs.map(name =>
          herbsData.find(h => h.name === name)
        ).filter(Boolean);
        
        let response = `**${concern.concern.toUpperCase()} SUPPORT** 🌿\n\n${concern.advice}\n\n`;
        
        if (herbs.length > 0) {
          response += "**Recommended Herbs:**\n";
          herbs.slice(0, 3).forEach(herb => {
            if (herb) {
              response += `\n🌿 **${herb.name}**\n`;
              response += `   • ${herb.benefits.slice(0, 2).join('\n   • ')}\n`;
              if (herb.precautions) {
                response += `   ⚠️ ${herb.precautions}\n`;
              }
            }
          });
          response += "\n";
        }
        
        if (products.length > 0) {
          response += "**Recommended Products:**\n\n";
          products.forEach(product => {
            if (product) {
              response += `💜 **${product.name}** - $${product.price}\n`;
              response += `   ${product.benefits.slice(0, 2).join(', ')}\n\n`;
            }
          });
          response += "Would you like to add any of these to your cart? Or would you like to know more about specific herbs?";
        }
        
        return {
          content: response,
          productRecommendations: concern.recommendedProducts
        };
      }
    }

    // Check for specific herb queries - Enhanced
    const mentionedHerb = herbsData.find(herb => 
      lowerMessage.includes(herb.name.toLowerCase())
    );
    
    if (mentionedHerb) {
      return {
        content: `🌿 **${mentionedHerb.name.toUpperCase()}**\n\n` +
                `**Benefits:**\n${mentionedHerb.benefits.map(b => `• ${b}`).join('\n')}\n\n` +
                `**Traditional Uses:**\n${mentionedHerb.usedFor.map(u => `• ${u}`).join('\n')}\n\n` +
                `**Historical Significance:**\n${mentionedHerb.history}\n\n` +
                (mentionedHerb.precautions ? `⚠️ **Precautions:** ${mentionedHerb.precautions}\n\n` : '') +
                `This herb is included in several of our tea blends. Would you like to know which products contain ${mentionedHerb.name}?`
      };
    }

    // Check for herb information in general
    if (/herb|ingredient|plant|botanical|medicinal plant/.test(lowerMessage)) {
      return {
        content: "🌿 **Our Healing Herbs Library** 🌿\n\nWe work with 20+ time-honored medicinal herbs:\n\n" +
                "**For Relaxation & Sleep:**\n• Valerian Root, Chamomile, Lavender, Passionflower\n\n" +
                "**For Stress & Anxiety:**\n• Ashwagandha, Holy Basil, Lemon Balm\n\n" +
                "**For Digestion:**\n• Peppermint, Ginger, Fennel, Licorice Root\n\n" +
                "**For Immunity:**\n• Echinacea, Elderberry, Thyme\n\n" +
                "**For Inflammation & Pain:**\n• Turmeric, Ginger, Nettle Leaf\n\n" +
                "**For Detox & Liver:**\n• Milk Thistle, Dandelion Root\n\n" +
                "Ask me about any specific herb to learn its benefits, history, and uses!"
      };
    }

    // Check for FAQ - Enhanced matching
    const matchedFaq = faqData.find(faq => 
      faq.keywords.some(keyword => lowerMessage.includes(keyword))
    );
    
    if (matchedFaq) {
      return { 
        content: `**${matchedFaq.question}**\n\n${matchedFaq.answer}\n\n` +
                 `Have more questions? I can answer 30+ FAQs about safety, preparation, dosage, shipping, and more!`
      };
    }

    // Check for product queries
    if (/product|tea|what do you (have|sell)|shop|buy|store|available/.test(lowerMessage)) {
      let response = "🛍️ **Our Healing Products** 🛍️\n\n";
      productsData.forEach(product => {
        response += `💜 **${product.name}** - $${product.price}\n`;
        response += `   Category: ${product.category}\n`;
        response += `   Benefits: ${product.benefits.slice(0, 2).join(', ')}\n`;
        response += `   Uses: ${product.uses[0]}\n\n`;
      });
      response += "Ask me about your specific health concerns and I'll recommend the perfect products for you!";
      return { content: response };
    }

    // Check for contact/location
    if (/contact|email|phone|location|address|where|reach|call/.test(lowerMessage)) {
      return {
        content: "📧 **Contact Love Me Tea**\n\n" +
                "**Email:** lovemeteaa@gmail.com\n" +
                "**Phone:** (555) 123-4567\n" +
                "**Hours:** Mon-Fri 9AM-5PM EST\n" +
                "**Location:** Nashville, TN\n\n" +
                "**Also Available At:**\n• Water Wellness - SLC, UT\n• Other partner locations\n\n" +
                "**Follow Us:**\n• Instagram\n• Shopify\n• Threads\n\n" +
                "Feel free to reach out with custom tea requests, health consultations, or any questions! 💜"
      };
    }

    // Check for price queries
    if (/price|cost|how much|expensive|cheap|afford/.test(lowerMessage)) {
      return {
        content: "💰 **Our Pricing** 💰\n\n" +
                "🌿 **Herbal Teas:** $14.99 each\n" +
                "   • Calm & Clear Anxiety Relief\n" +
                "   • Congestion & Cough Relief\n" +
                "   • Insomnia Relief\n\n" +
                "🍯 **MiCha Essence:** $18.99\n" +
                "   • Natural sweetener for teas\n\n" +
                "🕯️ **Beeswax Candles:** $8.00\n" +
                "   • 100% pure, air purifying\n\n" +
                "🧴 **Whipped Butter:** $19.00\n" +
                "   • Natural skin nourishment\n\n" +
                "✨ All products are 99% organic, pesticide-free, and ethically sourced. Quality healing at fair prices!"
      };
    }

    // Check for shipping/delivery
    if (/ship|delivery|order|checkout|purchase|buy/.test(lowerMessage)) {
      return {
        content: "📦 **Ordering & Shipping** 📦\n\n" +
                "**How to Order:**\n" +
                "1. Browse our store section on this website\n" +
                "2. Add products to your cart (I can add them for you!)\n" +
                "3. Proceed to checkout\n\n" +
                "**Shipping:**\n" +
                "• We ship throughout the United States\n" +
                "• International shipping available upon request\n\n" +
                "**Sustainability:**\n" +
                "• 100% compostable packaging! 🌱\n" +
                "• Eco-friendly shipping materials\n\n" +
                "**Local Pickup:**\n" +
                "• Available at partner stores\n" +
                "• Water Wellness in SLC, UT\n\n" +
                "Would you like me to help you find the right products for your needs?"
      };
    }

    // Check for safety and side effects
    if (/safe|safety|side effect|harm|dangerous|risk/.test(lowerMessage)) {
      return {
        content: "⚕️ **Safety Information** ⚕️\n\n" +
                "Our teas are made from natural, organic ingredients with NO:\n" +
                "❌ Artificial sweeteners\n" +
                "❌ Artificial flavoring\n" +
                "❌ Harmful chemicals\n" +
                "❌ Pesticides\n\n" +
                "**Important Considerations:**\n\n" +
                "⚠️ **Consult your doctor if:**\n" +
                "• You are pregnant or nursing\n" +
                "• Taking medications (especially blood thinners, sedatives, heart meds)\n" +
                "• You have a serious medical condition\n" +
                "• You're scheduled for surgery\n\n" +
                "⚠️ **Allergies:**\n" +
                "• Some herbs may cause reactions in people allergic to ragweed\n" +
                "• Always read ingredient lists\n" +
                "• Start with small amounts\n\n" +
                "Our products are designed to support health naturally, but they complement—not replace—medical care. Which specific herb would you like safety information about?"
      };
    }

    // Check for effectiveness/results
    if (/work|effective|help|cure|heal|fix/.test(lowerMessage)) {
      return {
        content: "✨ **How Our Teas Work** ✨\n\n" +
                "Herbal medicine works holistically to support your body's natural healing:\n\n" +
                "**Immediate Effects (30-60 min):**\n" +
                "• Calming anxiety\n" +
                "• Soothing digestion\n" +
                "• Clearing congestion\n" +
                "• Promoting relaxation\n\n" +
                "**Gradual Benefits (2-4 weeks):**\n" +
                "• Reduced chronic inflammation\n" +
                "• Better sleep patterns\n" +
                "• Improved immune function\n" +
                "• Balanced hormones\n" +
                "• Enhanced energy\n\n" +
                "**Key Differences from Pharmaceuticals:**\n" +
                "• Works WITH your body, not against it\n" +
                "• Addresses root causes, not just symptoms\n" +
                "• Fewer side effects\n" +
                "• Builds long-term health\n\n" +
                "Everyone's body is different. Give it time and consistency for best results! What specific condition would you like help with?"
      };
    }

    // Check for dosage/how much
    if (/how much|dosage|amount|quantity|how many/.test(lowerMessage)) {
      return {
        content: "📏 **Dosage Guidelines** 📏\n\n" +
                "**Tea Preparation:**\n" +
                "• Use 1-2 teaspoons per cup\n" +
                "• Steep 5-10 minutes in hot (not boiling) water\n" +
                "• Drink 1-3 cups daily\n\n" +
                "**Best Times:**\n" +
                "🌙 Sleep teas: 30-60 min before bed\n" +
                "☀️ Anxiety/Wellness teas: Morning & afternoon\n" +
                "🍽️ Digestive teas: After meals\n" +
                "💪 Immune teas: At first signs of illness\n\n" +
                "**General Tips:**\n" +
                "• Start with 1 cup to test tolerance\n" +
                "• Increase gradually as needed\n" +
                "• Listen to your body\n" +
                "• Consistency is key!\n\n" +
                "For chronic conditions, daily use for 2-4 weeks shows best results. What health concern are you addressing?"
      };
    }

    // Check for combination/mixing
    if (/combine|mix|together|multiple|both/.test(lowerMessage)) {
      return {
        content: "🌿 **Combining Teas** 🌿\n\n" +
                "Yes! You can safely combine our teas:\n\n" +
                "**Popular Combinations:**\n" +
                "• Anxiety Relief (morning) + Insomnia Relief (night)\n" +
                "• Congestion Relief + Immune support\n" +
                "• Digestive support with any wellness tea\n\n" +
                "**How to Combine:**\n" +
                "1. **Time-based:** Different teas at different times\n" +
                "2. **Blend together:** Mix dry herbs before brewing\n" +
                "3. **Rotate:** Alternate days for variety\n\n" +
                "**Custom Blends:**\n" +
                "Contact us for personalized formulations tailored to your specific health needs!\n\n" +
                "Many herbs complement each other beautifully. What health concerns are you trying to address? I can suggest the perfect combination!"
      };
    }

    // Default response with helpful prompts
    return {
      content: "I'm here to guide your healing journey! 🌿💜\n\n" +
              "**I can help you with:**\n\n" +
              "**Health Conditions:**\n" +
              "• Anxiety, stress, depression\n" +
              "• Sleep issues & insomnia\n" +
              "• Digestive problems\n" +
              "• Pain & inflammation\n" +
              "• Respiratory issues\n" +
              "• Immune support\n" +
              "• Women's health\n" +
              "• Skin conditions\n" +
              "• Energy & fatigue\n" +
              "• And 10+ more!\n\n" +
              "**Herbal Knowledge:**\n" +
              "• 20+ medicinal herbs\n" +
              "• Benefits & traditional uses\n" +
              "• Safety & precautions\n\n" +
              "**Product Info:**\n" +
              "• Recommendations for your needs\n" +
              "• Pricing & ordering\n" +
              "• Preparation & dosage\n\n" +
              "**Just tell me:**\n" +
              "✨ What you're struggling with\n" +
              "✨ What herb interests you\n" +
              "✨ Or ask any question!\n\n" +
              "Example: \"I have anxiety\" or \"Tell me about lavender\" or \"How do I prepare the tea?\""
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateBotResponse(inputValue);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response.content,
        productRecommendations: response.productRecommendations,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  const handleAddToCart = (productId: number) => {
    const product = productsData.find(p => p.id === productId);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: 'https://images.unsplash.com/photo-1659200735264-955ed8519cd6?w=300',
        category: product.category,
      });

      const confirmMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: `✅ Added ${product.name} to your cart! Would you like to explore more products or proceed to checkout?`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, confirmMessage]);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 bg-purple-600 hover:bg-purple-700 text-white p-3 sm:p-4 rounded-full shadow-2xl transition-all hover:scale-110 group"
        aria-label="Open chatbot"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
      </button>
    );
  }

  return (
    <>
      {/* Mobile: Full screen overlay */}
      <div className="fixed inset-0 z-40 bg-white flex flex-col md:hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Sparkles className="w-7 h-7" />
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <div>
              <h3 className="text-lg">Healing Guide</h3>
              <p className="text-xs text-purple-200">Online • Here to help</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-purple-700 p-2 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-purple-50 to-white">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.type === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white shadow-md border border-purple-100'
                }`}
              >
                <p className="whitespace-pre-wrap text-sm leading-relaxed">
                  {message.content}
                </p>
                
                {message.productRecommendations && message.productRecommendations.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {message.productRecommendations.map(productId => {
                      const product = productsData.find(p => p.id === productId);
                      if (!product) return null;
                      return (
                        <button
                          key={productId}
                          onClick={() => handleAddToCart(productId)}
                          className="w-full text-left bg-purple-100 hover:bg-purple-200 active:bg-purple-300 text-purple-900 px-3 py-2.5 rounded-lg text-sm transition-colors"
                        >
                          🛒 Add {product.name} to cart
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white shadow-md border border-purple-100 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length <= 2 && (
          <div className="px-4 py-3 border-t border-purple-100 flex flex-wrap gap-2 bg-white">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleQuickReply(reply)}
                className="text-xs bg-purple-100 hover:bg-purple-200 active:bg-purple-300 text-purple-700 px-3 py-2 rounded-full transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-purple-100 bg-white safe-area-bottom">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about your health concerns..."
              className="flex-1 px-4 py-3 border border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 text-base"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 disabled:bg-gray-300 text-white p-3 rounded-full transition-colors flex-shrink-0"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tablet & Desktop: Floating chat window */}
      <div className="hidden md:flex fixed bottom-6 left-6 z-40 w-[420px] lg:w-[450px] max-w-[calc(100vw-3rem)] h-[650px] lg:h-[700px] max-h-[calc(100vh-3rem)] bg-white rounded-2xl shadow-2xl flex-col overflow-hidden border-2 border-purple-600">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Sparkles className="w-8 h-8" />
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            <div>
              <h3 className="text-lg">Healing Guide</h3>
              <p className="text-xs text-purple-200">Online • Here to help</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-purple-700 p-2 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-purple-50 to-white">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.type === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white shadow-md border border-purple-100'
                }`}
              >
                <p className="whitespace-pre-wrap text-sm leading-relaxed">
                  {message.content}
                </p>
                
                {message.productRecommendations && message.productRecommendations.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {message.productRecommendations.map(productId => {
                      const product = productsData.find(p => p.id === productId);
                      if (!product) return null;
                      return (
                        <button
                          key={productId}
                          onClick={() => handleAddToCart(productId)}
                          className="w-full text-left bg-purple-100 hover:bg-purple-200 text-purple-900 px-3 py-2 rounded-lg text-xs transition-colors"
                        >
                          🛒 Add {product.name} to cart
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white shadow-md border border-purple-100 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length <= 2 && (
          <div className="px-4 py-2 border-t border-purple-100 flex flex-wrap gap-2">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleQuickReply(reply)}
                className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1.5 rounded-full transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-purple-100 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about your health concerns..."
              className="flex-1 px-4 py-2 border border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white p-2 rounded-full transition-colors"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}