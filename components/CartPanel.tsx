'use client';

import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';

export default function CartPanel() {
  const { items, isOpen, toggleCart, clearCart, removeFromCart, totalPrice } = useCart();

  const buildWhatsAppMessage = () => {
    const itemsList = items
      .map((item) => `• ${item.name} - ${item.kg}kg ($${(item.pricePerKg * item.kg).toFixed(2)})`)
      .join('\n');
    return encodeURIComponent(
      `¡Hola! Quiero hacer un pedido:\n\n${itemsList}\n\n💰 Total: $${totalPrice.toFixed(2)}\n\n¡Gracias!`
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={toggleCart}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-ocean-900 border-l border-ocean-700/30 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-ocean-700/30">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-ocean-400" size={22} />
                <div>
                  <h2 className="text-lg font-bold text-white">Tu Pedido</h2>
                  <p className="text-xs text-ocean-400">
                    {items.length} producto{items.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <button onClick={toggleCart} className="text-ocean-400 hover:text-white transition-colors">
                <X size={22} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <span className="text-6xl mb-4">🛒</span>
                  <p className="text-ocean-300 font-medium">Tu carrito está vacío</p>
                  <p className="text-sm text-ocean-500 mt-1">Agrega productos del catálogo</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-ocean-800/50 border border-ocean-600/30 rounded-xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{item.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-semibold text-white truncate">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-ocean-500 hover:text-red-400 transition-colors flex-shrink-0"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2 bg-ocean-900/60 rounded-lg overflow-hidden">
                            <button
                              onClick={() => {
                                // decrement handled in context if needed
                              }}
                              className="p-1.5 text-ocean-400 hover:text-white"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-white font-medium text-xs px-2">
                              {item.kg}kg
                            </span>
                            <button
                              onClick={() => {
                                // increment handled in context if needed
                              }}
                              className="p-1.5 text-ocean-400 hover:text-white"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-white font-bold">
                            ${(item.pricePerKg * item.kg).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-ocean-700/30 p-6 space-y-4">
                {/* Clear cart */}
                <button
                  onClick={clearCart}
                  className="flex items-center gap-2 text-sm text-ocean-400 hover:text-red-400 transition-colors"
                >
                  <Trash2 size={14} />
                  Vaciar carrito
                </button>

                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="text-ocean-300">Total</span>
                  <span className="text-2xl font-black text-white">${totalPrice.toFixed(2)}</span>
                </div>

                {/* WhatsApp checkout */}
                <a
                  href={`https://wa.me/5213313262108?text=${buildWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-sea-500 to-sea-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-sea-500/30 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle size={20} />
                  Pedir por WhatsApp
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
