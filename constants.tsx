import React from 'react';
import { JuiceProduct } from './types';

export const JUICE_MENU: JuiceProduct[] = [
  {
    id: 'j1',
    name: 'Green Goddess',
    description: 'A powerful detox blend that tastes surprisingly refreshing.',
    price: 8.50,
    ingredients: ['Kale', 'Cucumber', 'Green Apple', 'Lemon', 'Ginger'],
    benefits: ['Detox', 'Digestion', 'Skin Health'],
    image: 'https://picsum.photos/400/400?random=1',
    category: 'Detox'
  },
  {
    id: 'j2',
    name: 'Sunrise Citrus',
    description: 'Wake up your senses with this Vitamin C powerhouse.',
    price: 7.50,
    ingredients: ['Orange', 'Carrot', 'Turmeric', 'Pineapple'],
    benefits: ['Immunity', 'Energy', 'Anti-inflammatory'],
    image: 'https://picsum.photos/400/400?random=2',
    category: 'Energy'
  },
  {
    id: 'j3',
    name: 'Berry Blast',
    description: 'Antioxidant-rich berries blended for pure joy.',
    price: 9.00,
    ingredients: ['Strawberry', 'Blueberry', 'Raspberry', 'Apple'],
    benefits: ['Antioxidants', 'Heart Health', 'Brain Boost'],
    image: 'https://picsum.photos/400/400?random=3',
    category: 'Refresh'
  },
  {
    id: 'j4',
    name: 'Beet It',
    description: 'Stamina-boosting earthy tones with a sweet apple finish.',
    price: 8.00,
    ingredients: ['Beetroot', 'Carrot', 'Apple', 'Lemon'],
    benefits: ['Stamina', 'Blood Pressure', 'Liver Health'],
    image: 'https://picsum.photos/400/400?random=4',
    category: 'Detox'
  },
  {
    id: 'j5',
    name: 'Tropical Paradise',
    description: 'A vacation in a bottle. Sweet, creamy, and hydrating.',
    price: 8.50,
    ingredients: ['Pineapple', 'Mango', 'Coconut Water', 'Lime'],
    benefits: ['Hydration', 'Mood', 'Digestion'],
    image: 'https://picsum.photos/400/400?random=5',
    category: 'Refresh'
  },
  {
    id: 'j6',
    name: 'Immunity Armor',
    description: 'Spicy and potent. The ultimate cold fighter.',
    price: 7.00,
    ingredients: ['Ginger', 'Lemon', 'Honey (optional)', 'Cayenne'],
    benefits: ['Immunity', 'Metabolism', 'Cold Relief'],
    image: 'https://picsum.photos/400/400?random=6',
    category: 'Immunity'
  }
];

export const ICONS = {
  Leaf: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.77 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
  ),
  Droplet: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.74A17.16 17.16 0 0 0 12 2v20z"/></svg>
  ),
  ShoppingCart: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
  ),
  Sparkles: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 5H5"/><path d="M19 15v4"/><path d="M15 17h4"/></svg>
  ),
  Send: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
  ),
  X: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  ),
  Menu: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  ),
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  )
};