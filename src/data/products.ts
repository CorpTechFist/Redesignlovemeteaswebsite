import anxietyBusterImg from '../assets/products/herbal-teas/anxiety-buster.jpg';
import bpReducerImg from '../assets/products/herbal-teas/bp-reducer.jpg';
import coldCoughCrusherImg from '../assets/products/herbal-teas/cold-cough-crusher.jpg';
import sleepSoundImg from '../assets/products/herbal-teas/sleep-sound.jpg';
import bergamotLavenderImg from '../assets/products/essential-oils/bergamot-lavender.jpg';
import eucalyptusImg from '../assets/products/essential-oils/eucalyptus.jpg';
import cbdTinctureImg from '../assets/products/essential-oils/cbd-tincture.jpg';
import beeswaxCandlesImg from '../assets/products/beeswax-candles/beeswax-candles.jpg';
import lotionBodyButterImg from '../assets/products/bath-body/lotion-body-butter.jpg';
import bathSaltsImg from '../assets/products/bath-body/bath-salts.jpg';

export type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
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
    tag: 'POPULAR',
  },
  {
    id: 2,
    name: 'BP Reducer',
    category: 'HERBAL TEAS',
    description: 'Herbal blend to support healthy blood pressure levels',
    price: 14.99,
    image: bpReducerImg,
    tag: 'WELLNESS',
  },
  {
    id: 3,
    name: 'Cold Cough Crusher',
    category: 'HERBAL TEAS',
    description: 'Year-round relief for respiratory health and congestion',
    price: 14.99,
    image: coldCoughCrusherImg,
    tag: 'ALL YEAR RELIEF',
  },
  {
    id: 4,
    name: 'Sleep Sound',
    category: 'HERBAL TEAS',
    description: 'Promotes restful sleep and reduces anxiety naturally',
    price: 14.99,
    image: sleepSoundImg,
    tag: 'INSOMNIA RELIEF',
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
    tag: 'More options',
  },
  {
    id: 9,
    name: 'Love Me Lotion Body Butter',
    category: 'Bath & Body',
    description: 'Support, sustain, & protect with essential nutrients',
    price: 19.0,
    image: lotionBodyButterImg,
    tag: 'More options',
  },
  {
    id: 10,
    name: 'Love Me Salts – Bath Salts',
    category: 'Bath & Body',
    description: 'Luxurious bath salts for relaxation and rejuvenation',
    price: 16.0,
    image: bathSaltsImg,
    tag: 'More options',
    options: {
      scents: ['Bergamot Lavender', 'Eucalyptus'],
      sizes: ['Small', 'Large'],
    },
  },
];
