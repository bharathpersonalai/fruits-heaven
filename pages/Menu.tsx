import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  tags: string[];
  isPlaceholder?: boolean;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Citrus Sunrise',
    price: '£5.99',
    description: 'Fresh Oranges, a hint of Ginger, and Turmeric.',
    image: '/orange.png',
    tags: ['Immunity', 'Energy'],
  },
  {
    id: '2',
    name: 'Green Detox',
    price: '£6.99',
    description: 'Cucumber, Mint, Spinach, Apple, and Lemon.',
    image: '/green.png',
    tags: ['Cleanse', 'Hydrate'],
  },
  {
    id: '3',
    name: 'Ruby Elixir',
    price: '£7.99',
    description: 'Pure Pomegranate, Beetroot, and Carrot.',
    image: '/red.png',
    tags: ['Heart Health', 'Iron'],
  },
  {
    id: '4',
    name: 'Tropical Bliss',
    price: '£6.50',
    description: 'Pineapple, Mango, and Coconut Water.',
    image: '',
    tags: ['Sweet', 'Tropical'],
    isPlaceholder: true,
  },
];

const Menu: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <div className="container fade-in">
          <h1>Our Menu</h1>
          <p>Curated for nutrition, taste, and vitality.</p>
        </div>
      </header>

      {/* Menu Section */}
      <section id="menu" className="menu section-padding">
        <div className="container">
          <div className="menu-grid">
            {products.map((product, index) => (
              <div key={product.id} className={`product-card reveal-up delay-${index}`}>
                <div className="product-img">
                  {product.isPlaceholder ? (
                    <div style={{
                      background: '#eee',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#aaa',
                      height: '100%',
                      minHeight: '200px'
                    }}>
                      <span>Seasonal Special</span>
                    </div>
                  ) : (
                    <img src={product.image} alt={product.name} />
                  )}
                </div>
                <div className="product-info">
                  <div className="product-header">
                    <h3>{product.name}</h3>
                    <span className="price">{product.price}</span>
                  </div>
                  <p>{product.description}</p>
                  <div className="tags">
                    {product.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link to={Page.ORDER} className="btn-add">Order Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;