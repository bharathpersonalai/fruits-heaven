export interface JuiceProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  benefits: string[];
  image: string;
  category: 'Detox' | 'Energy' | 'Refresh' | 'Immunity';
}

export interface CartItem extends JuiceProduct {
  quantity: number;
}

export enum Page {
  HOME = '/',
  MENU = '/menu',
  WHY_US = '/why-us',
  ORDER = '/order',
}

export interface AIReply {
  text: string;
  recommendedProductId?: string;
}
