'use client';

import { useState } from 'react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Plus, Minus, ShoppingCart } from 'lucide-react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const { addToCart } = useCart();
  const [kg, setKg] = useState<Record<number, number>>({});

  const filtered =
    activeCategory === 'todos'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleAdd = (product: (typeof products)[0]) => {
    const quantity = kg[product.id] || 1;
    addToCart(product.id, product.nameEs, product.pricePerKg, quantity, product.emoji);
    setKg((prev) => ({ ...prev, [product.id]: 1 }));
  };

  return (
    <section id="catalogo" className="relative py-24 md:py-32 bg-ocean-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/50 via-ocean-950 to-ocean-900/50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ocean-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-ocean-500/10 border border-ocean-400/20">
            <span className="text-sm text-ocean-300">🐚 Catálogo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Productos{' '}
            <span className="bg-gradient-to-r from-ocean-400 to-sea-400 bg-clip-text text-transparent">
              Frescos
            </span>
          </h2>
          <p className="text-lg text-ocean-300 max-w-2xl mx-auto">
            Selecciona la cantidad en kilogramos y agrega a tu pedido
          </p>
        </div>

        {/* Category filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-ocean-500 to-ocean-600 text-white shadow-lg shadow-ocean-500/25'
                  : 'bg-ocean-800/50 text-ocean-300 border border-ocean-600/30 hover:border-ocean-400/50'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="product-card group bg-ocean-900/60 border border-ocean-700/30 rounded-2xl overflow-hidden hover:border-ocean-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-ocean-500/10 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="relative h-36 bg-gradient-to-br from-ocean-800/50 to-ocean-900/50 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  {product.emoji}
                </span>
                {product.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-coral-500/90 text-white text-[10px] font-bold rounded-lg uppercase tracking-wide">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-1.5 leading-tight">
                  {product.nameEs}
                </h3>
                <p className="text-xs text-ocean-400 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-black text-white">
                      ${product.pricePerKg}
                    </span>
                    <span className="text-xs text-ocean-400 ml-1">/kg</span>
                  </div>
                </div>

                {/* Quantity + Add */}
                <div className="flex items-center gap-2">
                  {/* Quantity control */}
                  <div className="flex items-center bg-ocean-800/80 rounded-xl border border-ocean-600/30 overflow-hidden">
                    <button
                      onClick={() =>
                        setKg((prev) => ({
                          ...prev,
                          [product.id]: Math.max(1, (prev[product.id] || 1) - 0.5),
                        }))
                      }
                      className="p-2 text-ocean-300 hover:text-white hover:bg-ocean-700/50 transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-12 text-center text-white font-bold text-sm">
                      {kg[product.id] || 1}kg
                    </span>
                    <button
                      onClick={() =>
                        setKg((prev) => ({
                          ...prev,
                          [product.id]: (prev[product.id] || 1) + 0.5,
                        }))
                      }
                      className="p-2 text-ocean-300 hover:text-white hover:bg-ocean-700/50 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Add button */}
                  <button
                    onClick={() => handleAdd(product)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-ocean-500/30 transition-all hover:scale-105 active:scale-95"
                  >
                    <ShoppingCart size={14} />
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
