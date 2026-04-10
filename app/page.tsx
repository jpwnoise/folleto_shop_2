'use client';

import { CartProvider } from '@/context/CartContext';
import { useGSAP } from '@/hooks/useGSAP';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Footer from '@/components/Footer';
import CartPanel from '@/components/CartPanel';

export default function Home() {
  const ref = useGSAP();

  return (
    <CartProvider>
      <main ref={ref} className="bg-ocean-950 text-ocean-100">
        <Navbar />
        <CartPanel />
        <Hero />
        <Products />
        <About />
        <Footer />
      </main>
    </CartProvider>
  );
}
