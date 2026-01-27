export interface ProductData {
  id: number;
  name: string;
  category: string;
  price: number;
  benefits: string[];
  uses: string[];
}

export interface HerbData {
  name: string;
  benefits: string[];
  history: string;
  usedFor: string[];
  precautions?: string;
}

export const productsData: ProductData[] = [
  {
    id: 1,
    name: '100% Organic Calm & Clear Anxiety Relief Tea',
    category: 'HERBAL TEAS',
    price: 14.99,
    benefits: ['Reduces anxiety', 'Promotes mental clarity', 'Calms nervous system', 'Natural stress relief'],
    uses: ['Drink 1-2 cups daily', 'Best consumed in morning or afternoon', 'Can be sweetened with MiCha Essence']
  },
  {
    id: 2,
    name: '100% Organic Congestion & Cough Relief Tea',
    category: 'HERBAL TEAS',
    price: 14.99,
    benefits: ['Clears respiratory passages', 'Soothes throat', 'Reduces cough', 'Year-round relief'],
    uses: ['Drink 2-3 cups daily when symptomatic', 'Inhale steam for added benefit', 'Add honey for throat coating']
  },
  {
    id: 3,
    name: 'Insomnia Relief Tea',
    category: 'HERBAL TEAS',
    price: 14.99,
    benefits: ['Promotes restful sleep', 'Reduces nighttime anxiety', 'Calms the mind', 'Non-habit forming'],
    uses: ['Drink 30-60 minutes before bedtime', 'Create a bedtime ritual', 'Avoid screens after drinking']
  },
  {
    id: 4,
    name: 'MiCha Essence',
    category: 'MiCha Essence',
    price: 18.99,
    benefits: ['Natural sweetener', 'Enhances tea flavor', 'No artificial ingredients', 'Diabetic friendly'],
    uses: ['Add to any tea', 'Start with small amount', 'Adjust to taste preference']
  },
  {
    id: 5,
    name: '100% Beeswax Heart Candles',
    category: '100% BEESWAX CANDLES',
    price: 8.00,
    benefits: ['Air purifying', 'Natural light', 'Long burning', 'Non-toxic'],
    uses: ['Meditation', 'Creating ambiance', 'Aromatherapy sessions', 'Burns 6-8 hours']
  },
  {
    id: 6,
    name: 'Love Me Tea Whipped Butter',
    category: 'Skin Care',
    price: 19.00,
    benefits: ['Nourishes skin', 'All-natural ingredients', 'Protects skin barrier', 'Essential nutrients'],
    uses: ['Apply to damp skin', 'Use after bathing', 'Focus on dry areas', 'Safe for sensitive skin']
  }
];

export const herbsData: HerbData[] = [
  {
    name: 'Valerian Root',
    benefits: ['Sedative properties', 'Helps with insomnia', 'Reduces anxiety', 'Calms nervous system'],
    history: 'Used since ancient Greek times for medicinal purposes. Made up of over 150 components.',
    usedFor: ['insomnia', 'anxiety', 'stress', 'nervousness', 'tension', 'restlessness', 'sleep disorders'],
    precautions: 'May interact with sedatives. Consult doctor if pregnant or nursing.'
  },
  {
    name: 'Chamomile',
    benefits: ['Calming effects', 'Anti-inflammatory', 'Helps with sleep', 'Immune support', 'Digestive aid'],
    history: 'Known for its beautiful flowers and calming effects. Used in German medicine for nervous conditions.',
    usedFor: ['anxiety', 'insomnia', 'digestive issues', 'inflammation', 'menstrual cramps', 'skin irritation'],
    precautions: 'May cause allergic reactions in people allergic to ragweed.'
  },
  {
    name: 'Lavender',
    benefits: ['Relaxation', 'Aromatherapy', 'Stress relief', 'Sleep aid', 'Headache relief'],
    history: 'Name derived from Latin "to be washed". Used in ancient times to perfume bath water.',
    usedFor: ['anxiety', 'stress', 'insomnia', 'headaches', 'migraines', 'nervous tension', 'depression'],
    precautions: 'Generally safe. Use in moderation during pregnancy.'
  },
  {
    name: 'Peppermint',
    benefits: ['Digestive aid', 'Refreshing', 'Mental clarity', 'Respiratory support', 'Pain relief'],
    history: 'Long history of medicinal and flavoring use. Inhaling the aroma brightens mood.',
    usedFor: ['digestive issues', 'nausea', 'headaches', 'congestion', 'IBS', 'bloating', 'mental fog'],
    precautions: 'May worsen heartburn in some people. Avoid if you have GERD.'
  },
  {
    name: 'Licorice Root',
    benefits: ['Soothes stomach', 'Anti-inflammatory', 'Respiratory support', 'Natural sweetness', 'Adrenal support'],
    history: 'Used for stomach problems, ulcers, and as an expectorant. Known for flavoring properties.',
    usedFor: ['cough', 'sore throat', 'digestive issues', 'adrenal fatigue', 'ulcers', 'bronchitis'],
    precautions: 'May affect blood pressure. Limit use if you have hypertension or kidney disease.'
  },
  {
    name: 'Lemon Balm',
    benefits: ['Calming effect', 'Cognitive support', 'Antiviral properties', 'Mood enhancement'],
    history: 'Used since the Middle Ages to reduce stress and anxiety, promote sleep, and improve appetite.',
    usedFor: ['anxiety', 'stress', 'insomnia', 'digestive issues', 'cold sores', 'heart palpitations'],
    precautions: 'May interact with thyroid medications. Generally safe for most people.'
  },
  {
    name: 'Passionflower',
    benefits: ['Anxiety relief', 'Sleep aid', 'Nervousness reduction', 'Pain relief'],
    history: 'Native American remedy used for centuries to treat anxiety and insomnia.',
    usedFor: ['anxiety', 'insomnia', 'ADHD', 'nerve pain', 'hysteria', 'seizures'],
    precautions: 'May cause drowsiness. Avoid if pregnant or taking sedatives.'
  },
  {
    name: 'Ginger Root',
    benefits: ['Digestive aid', 'Anti-inflammatory', 'Nausea relief', 'Immune support', 'Pain reduction'],
    history: 'Used in Asian medicine for thousands of years for digestive and inflammatory conditions.',
    usedFor: ['nausea', 'vomiting', 'digestive issues', 'inflammation', 'arthritis', 'menstrual cramps'],
    precautions: 'May thin blood. Consult doctor if taking blood thinners.'
  },
  {
    name: 'Turmeric',
    benefits: ['Powerful anti-inflammatory', 'Antioxidant', 'Pain relief', 'Brain health', 'Joint support'],
    history: 'Sacred spice in Indian culture, used in Ayurvedic medicine for 4,000 years.',
    usedFor: ['inflammation', 'arthritis', 'pain', 'depression', 'digestive issues', 'liver health'],
    precautions: 'May interact with blood thinners. High doses may cause digestive upset.'
  },
  {
    name: 'Echinacea',
    benefits: ['Immune system support', 'Cold and flu prevention', 'Anti-inflammatory', 'Infection fighter'],
    history: 'Native American medicine used for infections and wounds for centuries.',
    usedFor: ['colds', 'flu', 'infections', 'immune support', 'upper respiratory infections', 'wounds'],
    precautions: 'May interact with immune-suppressing medications. Avoid if allergic to ragweed.'
  },
  {
    name: 'Elderberry',
    benefits: ['Immune boosting', 'Antiviral', 'Antioxidant-rich', 'Respiratory support'],
    history: 'Called "the medicine chest" by Hippocrates, used since ancient times.',
    usedFor: ['colds', 'flu', 'viral infections', 'sinus infections', 'respiratory issues', 'immune support'],
    precautions: 'Must be cooked before consumption. Raw elderberries are toxic.'
  },
  {
    name: 'Holy Basil (Tulsi)',
    benefits: ['Adaptogen', 'Stress relief', 'Immune support', 'Anti-inflammatory', 'Mental clarity'],
    history: 'Sacred plant in Hinduism, revered in Ayurvedic medicine for over 5,000 years.',
    usedFor: ['stress', 'anxiety', 'fatigue', 'immune support', 'blood sugar regulation', 'inflammation'],
    precautions: 'May affect blood sugar and blood clotting. Consult doctor if on medications.'
  },
  {
    name: 'Ashwagandha',
    benefits: ['Adaptogen', 'Stress reduction', 'Energy boost', 'Cognitive support', 'Hormone balance'],
    history: 'Ancient Ayurvedic herb used for over 3,000 years, known as "Indian ginseng".',
    usedFor: ['stress', 'anxiety', 'fatigue', 'insomnia', 'brain fog', 'thyroid support', 'adrenal fatigue'],
    precautions: 'May interact with thyroid and immune medications. Avoid during pregnancy.'
  },
  {
    name: 'Nettle Leaf',
    benefits: ['Anti-inflammatory', 'Allergy relief', 'Nutrient-rich', 'Detoxifying', 'Joint support'],
    history: 'Used since ancient Egypt for arthritis and back pain.',
    usedFor: ['allergies', 'hay fever', 'arthritis', 'urinary issues', 'anemia', 'eczema'],
    precautions: 'May interact with blood pressure and diabetes medications.'
  },
  {
    name: 'Hibiscus',
    benefits: ['Blood pressure support', 'Antioxidant-rich', 'Liver health', 'Cholesterol support'],
    history: 'Used in African and Asian folk medicine for cardiovascular health.',
    usedFor: ['high blood pressure', 'high cholesterol', 'liver health', 'weight management', 'immune support'],
    precautions: 'May lower blood pressure. Consult doctor if on blood pressure medication.'
  },
  {
    name: 'Milk Thistle',
    benefits: ['Liver support', 'Detoxification', 'Antioxidant', 'Anti-inflammatory'],
    history: 'Used for over 2,000 years to treat liver and gallbladder disorders.',
    usedFor: ['liver disease', 'detoxification', 'gallbladder issues', 'hepatitis', 'cirrhosis'],
    precautions: 'May interact with medications processed by the liver.'
  },
  {
    name: 'Rosemary',
    benefits: ['Cognitive enhancement', 'Memory support', 'Antioxidant', 'Anti-inflammatory', 'Circulation'],
    history: 'Symbol of remembrance since ancient Greece, used to improve memory and concentration.',
    usedFor: ['memory issues', 'brain fog', 'headaches', 'circulation problems', 'hair loss', 'digestion'],
    precautions: 'High doses may cause seizures. Use culinary amounts only during pregnancy.'
  },
  {
    name: 'Thyme',
    benefits: ['Respiratory support', 'Antimicrobial', 'Cough relief', 'Immune support'],
    history: 'Used by ancient Egyptians for embalming and by Greeks as incense.',
    usedFor: ['cough', 'bronchitis', 'respiratory infections', 'sore throat', 'digestive issues'],
    precautions: 'Generally safe. May slow blood clotting.'
  },
  {
    name: 'Fennel',
    benefits: ['Digestive aid', 'Bloating relief', 'Antispasmodic', 'Menstrual support'],
    history: 'Ancient Greeks and Romans used it for strength and courage.',
    usedFor: ['bloating', 'gas', 'IBS', 'colic', 'menstrual cramps', 'lactation support'],
    precautions: 'May have estrogen-like effects. Use cautiously with hormone-sensitive conditions.'
  },
  {
    name: 'Dandelion Root',
    benefits: ['Liver detox', 'Digestive support', 'Diuretic', 'Anti-inflammatory'],
    history: 'Traditional Chinese medicine has used it for over 1,000 years.',
    usedFor: ['liver health', 'digestion', 'water retention', 'bloating', 'detoxification', 'kidney support'],
    precautions: 'May interact with diuretics and diabetes medications.'
  }
];

export const faqData = [
  {
    question: 'What makes Love Me Tea different?',
    answer: 'Love Me Tea uses 99% organic ingredients sourced ethically and organically. Our products are pesticide-free, wild-harvested, and formulated with time-honored herbal wisdom. We are a woman-owned small business dedicated to holistic healing without relying on pharmaceuticals.',
    keywords: ['different', 'unique', 'special', 'why', 'organic', 'woman owned']
  },
  {
    question: 'Are your teas safe?',
    answer: 'Yes! Our teas are made from natural, organic ingredients with no artificial sweeteners, flavoring, or harmful chemicals. However, if you are pregnant, nursing, or taking medications, we recommend consulting your healthcare provider before use.',
    keywords: ['safe', 'safety', 'side effects', 'harmful', 'dangerous', 'pregnant', 'nursing', 'breastfeeding']
  },
  {
    question: 'How should I prepare the tea?',
    answer: 'Steep 1-2 teaspoons of tea in hot water (not boiling) for 5-10 minutes. You can sweeten with our MiCha Essence. The teas are naturally unsweetened to preserve their medicinal properties.',
    keywords: ['prepare', 'make', 'brew', 'steep', 'how to', 'instructions', 'temperature', 'hot water']
  },
  {
    question: 'How long until I see results?',
    answer: 'Many customers report feeling effects within 30-60 minutes for acute issues like anxiety or congestion. For chronic conditions, we recommend consistent use for 2-4 weeks to experience full benefits.',
    keywords: ['results', 'how long', 'when', 'effects', 'work', 'see benefits', 'timeline']
  },
  {
    question: 'What is your packaging made of?',
    answer: 'We use 100% compostable packaging! We are committed to sustainability and environmental responsibility in all our practices.',
    keywords: ['packaging', 'compostable', 'eco', 'sustainable', 'environment', 'biodegradable', 'plastic']
  },
  {
    question: 'Do you offer custom tea blends?',
    answer: 'Yes! We offer custom tea formulations. Please contact us through our contact form with your specific health concerns and preferences.',
    keywords: ['custom', 'personalized', 'blend', 'formulation', 'specific', 'tailored']
  },
  {
    question: 'What is WAM Alliance?',
    answer: 'WAM Alliance (We All Matter Alliance) is our non-profit partner dedicated to supporting individuals with food, trauma support, and alternative medicine services. We partner to provide holistic care for cancer survivors, caregivers, and anyone struggling with illness.',
    keywords: ['wam', 'alliance', 'non-profit', 'nonprofit', 'charity', 'cancer', 'trauma']
  },
  {
    question: 'How do I store my tea?',
    answer: 'Store in a cool, dry place away from direct sunlight. Keep sealed in the original packaging or an airtight container to preserve freshness and potency.',
    keywords: ['store', 'storage', 'keep', 'preserve', 'freshness', 'shelf life', 'expire']
  },
  {
    question: 'Can I take tea with medications?',
    answer: 'Some herbs can interact with medications. Please consult your healthcare provider before combining herbal teas with prescription medications, especially blood thinners, sedatives, or heart medications.',
    keywords: ['medication', 'drugs', 'prescription', 'interaction', 'medicine', 'pills', 'doctor']
  },
  {
    question: 'Where are you located?',
    answer: 'Love Me Tea is a nomad-onsite small business based in Nashville. We also have products available locally at Water Wellness in SLC, UT and other partner locations.',
    keywords: ['location', 'where', 'address', 'based', 'nashville', 'utah']
  },
  {
    question: 'Can children drink these teas?',
    answer: 'Many of our teas are safe for children over 12, but we recommend consulting with a pediatrician first, especially for younger children. Start with smaller doses and observe for any reactions.',
    keywords: ['children', 'kids', 'child', 'pediatric', 'age', 'young', 'baby', 'toddler']
  },
  {
    question: 'How often should I drink the tea?',
    answer: 'For best results, drink 1-3 cups daily depending on your specific needs. For sleep tea, drink 30-60 minutes before bedtime. For anxiety or wellness teas, spread throughout the day. Listen to your body and adjust as needed.',
    keywords: ['how often', 'frequency', 'daily', 'how much', 'dosage', 'cups', 'times per day']
  },
  {
    question: 'What if I have multiple health concerns?',
    answer: 'Many of our teas address multiple issues simultaneously! You can also combine different teas or alternate them throughout the day. Contact us for a personalized consultation to create the perfect regimen for your needs.',
    keywords: ['multiple', 'several', 'combine', 'mix', 'different teas', 'more than one']
  },
  {
    question: 'Are your products tested for quality?',
    answer: 'Absolutely! We source from reputable organic suppliers and ensure all ingredients meet strict quality standards. Our products are tested for purity and potency.',
    keywords: ['quality', 'tested', 'purity', 'standards', 'certification', 'certified', 'lab tested']
  },
  {
    question: 'Can I drink these teas while pregnant or breastfeeding?',
    answer: 'While many herbs are safe, some should be avoided during pregnancy and nursing. Please consult your healthcare provider before using any herbal products during pregnancy or while breastfeeding.',
    keywords: ['pregnant', 'pregnancy', 'breastfeeding', 'nursing', 'lactation', 'expecting', 'trimester']
  },
  {
    question: 'What if the tea tastes bitter?',
    answer: 'Some medicinal herbs have a naturally earthy or bitter taste. You can enhance the flavor with our MiCha Essence natural sweetener, add honey, or mix with a fruit tea. The taste often means the beneficial compounds are present!',
    keywords: ['taste', 'bitter', 'flavor', 'bad taste', 'earthy', 'sweet', 'sweetener']
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently we ship within the United States. For international orders, please contact us directly and we will do our best to accommodate your request.',
    keywords: ['international', 'ship', 'shipping', 'worldwide', 'canada', 'europe', 'overseas']
  },
  {
    question: 'What is the shelf life of your teas?',
    answer: 'When stored properly in a cool, dry place, our teas maintain optimal potency for 12-18 months. The herbs won\'t "go bad" but may lose some effectiveness over time.',
    keywords: ['shelf life', 'expire', 'expiration', 'how long', 'old', 'fresh', 'bad']
  },
  {
    question: 'Can I take these teas with vitamins and supplements?',
    answer: 'Generally yes, but some herbs may interact with certain supplements. If you\'re taking high doses of supplements or medications, consult your healthcare provider to ensure no interactions.',
    keywords: ['vitamins', 'supplements', 'take with', 'together', 'combine']
  },
  {
    question: 'What makes organic herbs better than conventional?',
    answer: 'Organic herbs are grown without pesticides, herbicides, or synthetic fertilizers. This means cleaner, more potent herbs without harmful chemical residues. It\'s better for your health and the environment!',
    keywords: ['organic', 'conventional', 'pesticides', 'chemicals', 'better', 'difference']
  },
  {
    question: 'How do adaptogens work?',
    answer: 'Adaptogens like Ashwagandha and Holy Basil help your body adapt to stress by supporting the adrenal system and balancing hormones. They work gradually to build resilience against physical, chemical, and biological stressors.',
    keywords: ['adaptogen', 'adaptogens', 'ashwagandha', 'holy basil', 'stress response', 'how work']
  },
  {
    question: 'What if I don\'t feel anything right away?',
    answer: 'Herbal medicine works differently than pharmaceuticals. Some effects are immediate (like relaxation), while others build over time. Give it 2-4 weeks of consistent use to experience full benefits. Your body needs time to heal and rebalance.',
    keywords: ['not working', 'dont feel', "doesn't work", 'no effect', 'not helping', 'patience']
  },
  {
    question: 'Can I give these to my pets?',
    answer: 'Some herbs are safe for pets, but others are not. We recommend consulting a veterinarian before giving any herbal teas to animals, as their metabolism differs from humans.',
    keywords: ['pets', 'dog', 'cat', 'animal', 'dogs', 'cats']
  },
  {
    question: 'What\'s the difference between your teas and store-bought tea bags?',
    answer: 'Our teas use therapeutic doses of high-quality, organic whole herbs—not tea dust. Commercial tea bags often contain lower quality herbs with less potency. Our blends are formulated by herbalists for maximum healing benefits.',
    keywords: ['difference', 'store bought', 'commercial', 'grocery store', 'better', 'quality']
  },
  {
    question: 'Can I cold brew your teas?',
    answer: 'Yes! Cold brewing extracts different compounds and creates a smoother, less bitter flavor. Steep in cold water in the refrigerator for 8-12 hours. However, hot water extracts more medicinal properties.',
    keywords: ['cold brew', 'iced', 'cold', 'refrigerator', 'summer']
  },
  {
    question: 'What if I have allergies?',
    answer: 'If you have plant allergies (especially to ragweed or daisies), some herbs in the Asteraceae family may cause reactions. Always read ingredient lists carefully and start with small amounts to test tolerance.',
    keywords: ['allergies', 'allergic', 'reaction', 'sensitivity', 'intolerance', 'ragweed']
  },
  {
    question: 'How are your products different from pharmaceutical medications?',
    answer: 'Herbal medicines work holistically to support your body\'s natural healing processes rather than suppressing symptoms. They typically have fewer side effects but may work more gradually. They complement, not replace, medical care.',
    keywords: ['pharmaceutical', 'drugs', 'medicine', 'vs', 'instead of', 'replace']
  },
  {
    question: 'Do you use any artificial ingredients?',
    answer: 'No! We use ZERO artificial sweeteners, flavoring, preservatives, or colors. Everything is 99% organic and naturally sourced. What you see on the ingredient list is exactly what you get.',
    keywords: ['artificial', 'natural', 'ingredients', 'chemicals', 'additives', 'preservatives']
  },
  {
    question: 'What is the best time of day to drink each tea?',
    answer: 'Sleep teas: 30-60 min before bed. Anxiety/Calm teas: morning and afternoon. Digestive teas: after meals. Immune teas: any time, especially at first signs of illness. Listen to your body!',
    keywords: ['when', 'time', 'best time', 'morning', 'night', 'evening', 'timing']
  },
  {
    question: 'Can these teas help with PTSD or trauma?',
    answer: 'Yes, through our WAM Alliance partnership, we support trauma survivors with holistic healing. Herbs like Holy Basil, Ashwagandha, and Lavender can support the nervous system, but should complement professional trauma therapy.',
    keywords: ['ptsd', 'trauma', 'traumatic', 'wam alliance', 'mental health', 'therapy']
  }
];

export const healthConcerns = [
  {
    concern: 'anxiety',
    keywords: ['anxious', 'anxiety', 'stress', 'stressed', 'nervous', 'worry', 'panic', 'tension', 'anxiousness', 'worried', 'panic attack', 'racing thoughts'],
    recommendedProducts: [1],
    recommendedHerbs: ['Valerian Root', 'Chamomile', 'Lavender', 'Lemon Balm', 'Passionflower', 'Holy Basil (Tulsi)', 'Ashwagandha'],
    advice: 'Anxiety can be managed naturally with calming herbs. Our Calm & Clear Anxiety Relief Tea contains time-honored herbs that help soothe your nervous system without side effects.'
  },
  {
    concern: 'sleep',
    keywords: ['insomnia', 'sleep', 'sleeping', 'cant sleep', "can't sleep", 'tired', 'rest', 'restless', 'sleepless', 'nightmare', 'nightmares', 'wake up', 'falling asleep', 'stay asleep'],
    recommendedProducts: [3],
    recommendedHerbs: ['Valerian Root', 'Chamomile', 'Lavender', 'Passionflower', 'Lemon Balm'],
    advice: 'Quality sleep is essential for healing. Our Insomnia Relief Tea promotes restful sleep naturally, helping you wake up refreshed without morning grogginess.'
  },
  {
    concern: 'respiratory',
    keywords: ['cough', 'congestion', 'cold', 'flu', 'breathing', 'respiratory', 'sinuses', 'mucus', 'phlegm', 'bronchitis', 'asthma', 'wheeze', 'chest congestion', 'stuffy nose', 'runny nose', 'sinus infection', 'allergy', 'allergies', 'hay fever'],
    recommendedProducts: [2],
    recommendedHerbs: ['Licorice Root', 'Thyme', 'Peppermint', 'Elderberry', 'Echinacea', 'Nettle Leaf'],
    advice: 'Respiratory issues can be eased with our Congestion & Cough Relief Tea, which provides year-round support for clear breathing and throat comfort.'
  },
  {
    concern: 'digestive',
    keywords: ['stomach', 'digestion', 'digestive', 'nausea', 'bloating', 'bloated', 'gas', 'indigestion', 'heartburn', 'acid reflux', 'IBS', 'constipation', 'diarrhea', 'stomach ache', 'stomach pain', 'cramps', 'upset stomach', 'food poisoning', 'gastritis'],
    recommendedProducts: [1, 2],
    recommendedHerbs: ['Peppermint', 'Ginger Root', 'Chamomile', 'Fennel', 'Licorice Root', 'Dandelion Root'],
    advice: 'Digestive health is the foundation of overall wellness. Natural herbs like ginger, peppermint, and chamomile can soothe your stomach and promote healthy digestion.'
  },
  {
    concern: 'pain',
    keywords: ['pain', 'ache', 'headache', 'migraine', 'muscle pain', 'joint pain', 'arthritis', 'sore', 'soreness', 'inflammation', 'inflamed', 'chronic pain', 'back pain', 'neck pain', 'fibromyalgia'],
    recommendedProducts: [1, 2],
    recommendedHerbs: ['Turmeric', 'Ginger Root', 'Peppermint', 'Lavender', 'Rosemary', 'Nettle Leaf'],
    advice: 'Natural anti-inflammatory herbs can help reduce pain without harsh side effects. Turmeric, ginger, and other botanicals have been used for centuries for pain relief.'
  },
  {
    concern: 'immune',
    keywords: ['immune', 'immunity', 'sick', 'illness', 'infection', 'cold', 'flu', 'virus', 'viral', 'bacterial', 'fever', 'getting sick', 'weak immune system', 'catch colds'],
    recommendedProducts: [2],
    recommendedHerbs: ['Echinacea', 'Elderberry', 'Holy Basil (Tulsi)', 'Ginger Root', 'Turmeric', 'Thyme'],
    advice: 'Supporting your immune system naturally helps your body defend against illness. Our teas contain powerful herbs like elderberry and echinacea that boost immunity.'
  },
  {
    concern: 'skin',
    keywords: ['skin', 'dry', 'eczema', 'dermatitis', 'rash', 'itchy', 'moisture', 'acne', 'psoriasis', 'skin irritation', 'red skin', 'sensitive skin', 'skin inflammation'],
    recommendedProducts: [6],
    recommendedHerbs: ['Chamomile', 'Lavender', 'Nettle Leaf', 'Turmeric', 'Dandelion Root'],
    advice: 'Healthy skin starts with natural nourishment. Our Whipped Butter provides essential nutrients to support, sustain, and protect your skin barrier.'
  },
  {
    concern: 'depression',
    keywords: ['depression', 'depressed', 'sad', 'sadness', 'low mood', 'hopeless', 'hopelessness', 'blue', 'down', 'mood', 'emotional'],
    recommendedProducts: [1, 3],
    recommendedHerbs: ['Lavender', 'Holy Basil (Tulsi)', 'Ashwagandha', 'Lemon Balm', 'Rosemary', 'Turmeric'],
    advice: 'Supporting mental health naturally can complement traditional care. Herbs like holy basil and lavender have mood-enhancing properties that may help lift your spirits.'
  },
  {
    concern: 'energy',
    keywords: ['tired', 'fatigue', 'energy', 'exhausted', 'exhaustion', 'low energy', 'burnout', 'chronic fatigue', 'adrenal fatigue', 'brain fog', 'mental fog', 'foggy'],
    recommendedProducts: [1],
    recommendedHerbs: ['Ashwagandha', 'Holy Basil (Tulsi)', 'Ginger Root', 'Peppermint', 'Rosemary', 'Licorice Root'],
    advice: 'Chronic fatigue often indicates stress on your adrenal system. Adaptogenic herbs like ashwagandha help restore energy naturally without the crash of caffeine.'
  },
  {
    concern: 'womens health',
    keywords: ['period', 'menstrual', 'cramps', 'PMS', 'menopause', 'hot flashes', 'hormones', 'hormone', 'menstruation', 'cycle', 'irregular period', 'heavy period', 'PMDD'],
    recommendedProducts: [1],
    recommendedHerbs: ['Chamomile', 'Ginger Root', 'Fennel', 'Lavender', 'Ashwagandha', 'Dandelion Root'],
    advice: 'Women\'s hormonal health can be supported naturally with herbs that balance hormones and reduce discomfort during menstruation and menopause.'
  },
  {
    concern: 'liver detox',
    keywords: ['liver', 'detox', 'detoxify', 'cleanse', 'toxins', 'purify', 'gallbladder', 'hepatitis', 'fatty liver'],
    recommendedProducts: [1, 2],
    recommendedHerbs: ['Milk Thistle', 'Dandelion Root', 'Turmeric', 'Ginger Root', 'Hibiscus'],
    advice: 'Liver health is crucial for detoxification. Herbs like milk thistle and dandelion root support liver function and help your body eliminate toxins naturally.'
  },
  {
    concern: 'blood pressure',
    keywords: ['blood pressure', 'hypertension', 'high blood pressure', 'BP', 'cardiovascular', 'heart health', 'circulation'],
    recommendedProducts: [1],
    recommendedHerbs: ['Hibiscus', 'Lavender', 'Nettle Leaf', 'Rosemary', 'Ashwagandha'],
    advice: 'Cardiovascular health can be supported with herbs like hibiscus, which studies show may help maintain healthy blood pressure levels naturally.'
  },
  {
    concern: 'focus',
    keywords: ['focus', 'concentration', 'memory', 'brain', 'cognitive', 'ADHD', 'ADD', 'forgetful', 'cant focus', "can't concentrate", 'distracted'],
    recommendedProducts: [1],
    recommendedHerbs: ['Rosemary', 'Peppermint', 'Ashwagandha', 'Holy Basil (Tulsi)', 'Lemon Balm'],
    advice: 'Mental clarity and focus can be enhanced with herbs like rosemary and peppermint, traditionally used to improve memory and cognitive function.'
  },
  {
    concern: 'inflammation',
    keywords: ['inflammation', 'inflammatory', 'swelling', 'swollen', 'inflamed', 'autoimmune'],
    recommendedProducts: [1, 2],
    recommendedHerbs: ['Turmeric', 'Ginger Root', 'Holy Basil (Tulsi)', 'Nettle Leaf', 'Chamomile', 'Licorice Root'],
    advice: 'Chronic inflammation is at the root of many health issues. Powerful anti-inflammatory herbs like turmeric and ginger can help reduce systemic inflammation naturally.'
  },
  {
    concern: 'weight',
    keywords: ['weight', 'weight loss', 'lose weight', 'obesity', 'metabolism', 'metabolic', 'overweight', 'diet'],
    recommendedProducts: [1],
    recommendedHerbs: ['Hibiscus', 'Dandelion Root', 'Ginger Root', 'Peppermint', 'Holy Basil (Tulsi)'],
    advice: 'Healthy weight management involves supporting metabolism and reducing inflammation. Our teas can complement a healthy lifestyle with herbs that support metabolic function.'
  },
  {
    concern: 'general wellness',
    keywords: ['health', 'wellness', 'healthy', 'wellbeing', 'balance', 'holistic', 'natural healing', 'preventive', 'prevention'],
    recommendedProducts: [1, 2, 3],
    recommendedHerbs: ['Holy Basil (Tulsi)', 'Ashwagandha', 'Turmeric', 'Ginger Root', 'Elderberry'],
    advice: 'A holistic approach to health includes supporting your body\'s natural healing abilities. Our organic teas work together to promote overall wellness and vitality.'
  }
];
