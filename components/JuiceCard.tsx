import React from 'react';
import { JuiceProduct } from '../types';
import { ICONS } from '../constants';

interface JuiceCardProps {
  product: JuiceProduct;
  onAddToCart: (product: JuiceProduct) => void;
  isRecommended?: boolean;
}

const JuiceCard: React.FC<JuiceCardProps> = ({ product, onAddToCart, isRecommended }) => {
  return (
    <div className={`relative group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${isRecommended ? 'border-brand-400 ring-2 ring-brand-200' : 'border-stone-100'}`}>
      {isRecommended && (
        <div className="absolute top-0 right-0 bg-brand-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10 flex items-center gap-1">
          <ICONS.Sparkles className="w-3 h-3" />
          AI Pick
        </div>
      )}
      <div className="h-64 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2 flex-wrap">
            {product.ingredients.slice(0, 3).map((ing, i) => (
              <span key={i} className="text-xs text-white bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
                {ing}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs font-bold tracking-wider text-brand-600 uppercase mb-1 block">{product.category}</span>
            <h3 className="text-xl font-serif font-bold text-stone-800">{product.name}</h3>
          </div>
          <span className="text-lg font-semibold text-nature-900">₹{product.price.toFixed(2)}</span>
        </div>

        <p className="text-stone-500 text-sm mb-4 line-clamp-2">{product.description}</p>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full flex items-center justify-center gap-2 py-3 bg-stone-900 text-white rounded-lg hover:bg-nature-500 transition-colors duration-300 font-medium group-hover:shadow-lg"
        >
          <ICONS.ShoppingCart className="w-4 h-4" />
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default JuiceCard;