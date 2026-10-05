import anxietyBusterImg from '../assets/products/herbal-teas/AB_tea.jpg';
//import anxietyBusterImg2 from '../assets/products/herbal-teas/anxiety_tea.jpeg';
import bpReducerImg from '../assets/products/herbal-teas/bp_reducer.jpg';
import bpReducerImg2 from '../assets/products/herbal-teas/herb_mix3.jpg';
import coldCoughCrusherImg from '../assets/products/herbal-teas/cough_cold.jpeg';
import coldCoughCrusherImg2 from '../assets/products/herbal-teas/cough_cold_teacup2.png';
import sleepSoundImg from '../assets/products/herbal-teas/sleep_sound.jpeg';
import sleepSoundImg2 from '../assets/products/herbal-teas/sleep_sound_large.png';
import bergamotLavenderImg from '../assets/products/essential-oils/3Bottles_plant.jpg';
import eucalyptusImg from '../assets/products/essential-oils/3Bottles.jpg';
import cbdTinctureImg from '../assets/products/essential-oils/all_oils.jpeg';
import beeswaxCandlesImg from '../assets/products/beeswax-candles/candles_shelf.png';
import lotionBodyButterImg from '../assets/products/bath-body/openLid_lotion.jpg';
import bathSaltsImg from '../assets/products/essential-oils/bathSalts.jpg';

export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  image2: string;
  tag?: string;
  comingSoon?: boolean;
  options?: {
    scents?: string[];
    sizes?: string[];
  };
};

export const products: Product[] = [
  // Tea Products
  {
    id: 1,
    name: 'Anxiety Buster',
    category: 'HERBAL TEAS',
    description: 'Natural blend to support mental clarity and reduce anxiety',
    price: 14.99,
    image: anxietyBusterImg,
    //image2: anxietyBusterImg2,
    tag: 'POPULAR',
    options: {
      scents: ['Earthy'],
      sizes: ['Small', 'Large'],
    },
  },
  {
    id: 2,
    name: 'BP Reducer',
    category: 'HERBAL TEAS',
    description: 'Herbal blend to support healthy blood pressure levels',
    price: 14.99,
    image: bpReducerImg,
    image2: bpReducerImg2,
    tag: 'WELLNESS',
    options: {
      scents: ['Earthy Sweet'],
      sizes: ['Small', 'Large'],
    },
  },
  {
    id: 3,
    name: 'Cold Cough Crusher',
    category: 'HERBAL TEAS',
    description: 'Year-round relief for respiratory health and congestion',
    price: 14.99,
    image: coldCoughCrusherImg,
    image2: coldCoughCrusherImg2,
    tag: 'ALL YEAR RELIEF',
    options: {
      scents: ['Floral'],
      sizes: ['Small', 'Large'],
    },
  },
  {
    id: 4,
    name: 'Sleep Sound',
    category: 'HERBAL TEAS',
    description: 'Promotes restful sleep and reduces anxiety naturally',
    price: 14.99,
    image: sleepSoundImg,
    image2: sleepSoundImg2,
    tag: 'INSOMNIA RELIEF',
    options: {
      scents: ['Earthy Floral'],
      sizes: ['Small', 'Large'],
    },
  },
  // Essential Oils
  {
    id: 5,
    name: 'Bergamot Lavender Essential Oil',
    category: 'ESSENTIAL OILS',
    description: 'Calming blend of bergamot and lavender for aromatherapy and relaxation',
    price: 24.99,
    image: bergamotLavenderImg,
    tag: 'AROMATHERAPY',
  },
  {
    id: 6,
    name: 'Eucalyptus Essential Oil',
    category: 'ESSENTIAL OILS',
    description: 'Pure eucalyptus oil for respiratory support and clarity',
    price: 22.99,
    image: eucalyptusImg,
    tag: 'RESPIRATORY',
  },
  {
    id: 7,
    name: 'CBD Tincture Oil',
    category: 'ESSENTIAL OILS',
    description: 'Premium CBD oil for wellness and balance',
    price: 49.99,
    image: cbdTinctureImg,
    tag: 'COMING SOON',
    comingSoon: true,
  },
  // Other Products
  {
    id: 8,
    name: '100% Beeswax Candles',
    category: '100% BEESWAX CANDLES',
    description: '100% Premium Organic Beeswax Love Me Candles',
    price: 8.0,
    image: beeswaxCandlesImg,
    tag: 'Air Purifying Allergen Relief',
  },
  {
    id: 9,
    name: 'Love Me Lotion Body Butter',
    category: 'Bath & Body',
    description: 'Support, sustain, & protect with essential nutrients',
    price: 19.0,
    image: lotionBodyButterImg,
    tag: 'SKIN THERAPY',
    options: {
      scents: ['Tea Tree', 'Honeysuckle', 'Unscented', 'Bergamot Lavender'],
      sizes: ['Small', 'Large'],
    },
  },
  {
    id: 10,
    name: 'Love Me Salts – Bath Salts',
    category: 'Bath & Body',
    description: 'Luxurious bath salts for relaxation and rejuvenation',
    price: 16.0,
    image: bathSaltsImg,
    tag: 'RECHARGE',
    options: {
      scents: ['Bergamot Lavender', 'Rose Lavender', 'Eucalyptus'],
      sizes: ['Small', 'Large'],
    },
    {
    id: 11,
    name: 'Love Me Salts – CBD Bath Salts',
    category: 'Bath & Body',
    description: 'Luxurious CBD Healing bath salts for relaxation and rejuvenation',
    price: 26.0, 36,0
    image: bathSaltsImg,
    tag: 'HOLISTIC HEALING,
    options: {
      scents: ['Bergamot Lavender', 'Rose Lavender', 'Eucalyptus'],
      sizes: ['Small', 'Large'],
    },
  },
];
