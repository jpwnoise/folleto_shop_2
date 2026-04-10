'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export interface CartItem {
  id: number;
  name: string;
  pricePerKg: number;
  kg: number;
  emoji: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (id: number, name: string, pricePerKg: number, kg: number, emoji: string) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = useCallback((id: number, name: string, pricePerKg: number, kg: number, emoji: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, kg: item.kg + kg } : item
        );
      }
      return [...prev, { id, name, pricePerKg, kg, emoji }];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const totalItems = items.reduce((sum, item) => sum + item.kg, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.pricePerKg * item.kg, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart, totalItems, totalPrice, isOpen, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
