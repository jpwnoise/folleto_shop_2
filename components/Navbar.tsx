'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { totalItems, totalPrice, toggleCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ocean-950/95 backdrop-blur-xl shadow-lg shadow-ocean-500/10 border-b border-ocean-700/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-3xl">🐟</span>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white leading-tight">
                NOVILLERO
              </h1>
              <p className="text-xs text-ocean-300 -mt-1">Pescadería</p>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {['Catálogo', 'Nosotros', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={() =>
                  document
                    .getElementById(item === 'Catálogo' ? 'catalogo' : item === 'Nosotros' ? 'nosotros' : 'contacto')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="text-ocean-200 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
            <a
              href="tel:3313262108"
              className="flex items-center gap-2 text-ocean-200 hover:text-white transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">331-326-2108</span>
            </a>
          </div>

          {/* Cart + Mobile */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleCart}
              className="relative p-2.5 bg-ocean-800/60 border border-ocean-600/30 rounded-xl hover:bg-ocean-700/60 transition-all hover:scale-105"
            >
              <ShoppingCart size={20} className="text-ocean-200" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-coral-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center cart-badge">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-ocean-200"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>

        {/* Price display */}
        {totalItems > 0 && (
          <div className="max-w-7xl mx-auto px-6 pb-2">
            <div className="flex items-center justify-between text-xs text-ocean-300">
              <span>{totalItems} kg en carrito</span>
              <span className="text-white font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        )}
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ocean-950/95 backdrop-blur-xl z-50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 bg-ocean-900 border-l border-ocean-700/30 z-50 p-6"
            >
              <button onClick={() => setMobileOpen(false)} className="absolute top-4 right-4 text-ocean-300">
                <X size={24} />
              </button>

              <div className="flex flex-col gap-6 mt-16">
                {['Catálogo', 'Nosotros', 'Contacto'].map((item, i) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => {
                      setMobileOpen(false);
                      document
                        .getElementById(item === 'Catálogo' ? 'catalogo' : item === 'Nosotros' ? 'nosotros' : 'contacto')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-left text-lg text-ocean-200 hover:text-white font-medium"
                  >
                    {item}
                  </motion.button>
                ))}
                <a
                  href="tel:3313262108"
                  className="flex items-center gap-3 p-4 bg-ocean-800/60 rounded-xl text-ocean-200"
                >
                  <Phone size={18} />
                  <span>331-326-2108</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
