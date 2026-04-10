'use client';

import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <section
      id="contacto"
      className="relative py-24 md:py-32 bg-ocean-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/50 to-ocean-950" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-ocean-500/10 border border-ocean-400/20">
            <span className="text-sm text-ocean-300">📞 Contacto</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Haz tu{' '}
            <span className="bg-gradient-to-r from-ocean-400 to-coral-400 bg-clip-text text-transparent">
              Pedido
            </span>
          </h2>
          <p className="text-lg text-ocean-300 max-w-2xl mx-auto">
            Llámanos o escríbenos por WhatsApp. Servicio a domicilio gratis.
          </p>
        </div>

        {/* Contact cards */}
        <div className="animate-on-scroll grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {[
            {
              icon: Phone,
              title: 'Teléfono',
              value: '331-326-2108',
              href: 'tel:3313262108',
              color: 'from-ocean-500/10 to-ocean-600/10',
              border: 'border-ocean-500',
              text: 'text-ocean-400',
            },
            {
              icon: MessageCircle,
              title: 'WhatsApp',
              value: 'Enviar mensaje',
              href: 'https://wa.me/5213313262108',
              color: 'from-sea-500/10 to-sea-600/10',
              border: 'border-sea-500',
              text: 'text-sea-400',
            },
            {
              icon: MapPin,
              title: 'Ubicación',
              value: 'Guadalajara, Jalisco',
              href: '#',
              color: 'from-deep-500/10 to-deep-600/10',
              border: 'border-deep-500',
              text: 'text-deep-400',
            },
            {
              icon: Clock,
              title: 'Horario',
              value: 'Lun - Dom: 8am - 8pm',
              href: '#',
              color: 'from-coral-500/10 to-coral-600/10',
              border: 'border-coral-500',
              text: 'text-coral-400',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-4 p-5 bg-gradient-to-br ${item.color} border border-ocean-600/20 rounded-2xl hover:${item.border}/50 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`p-3 bg-ocean-800/60 rounded-xl ${item.text}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-sm text-ocean-400">{item.title}</p>
                  <p className="text-white font-semibold">{item.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA WhatsApp */}
        <div className="animate-on-scroll text-center">
          <motion.a
            href="https://wa.me/5213313262108?text=¡Hola!%20Quiero%20hacer%20un%20pedido%20de%20mariscos%20y%20pescados."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-sea-500 to-sea-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-sea-500/25 hover:shadow-sea-500/40 transition-all"
          >
            <MessageCircle size={24} />
            Pedir por WhatsApp
          </motion.a>
        </div>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 mt-20 border-t border-ocean-700/30 pt-8 text-center">
        <p className="text-sm text-ocean-500">
          © {new Date().getFullYear()} Novillero Pescadería. Todos los derechos reservados.
        </p>
        <p className="text-xs text-ocean-600 mt-1">
          Servicio a domicilio gratis · Tel: 331-326-2108
        </p>
      </div>
    </section>
  );
}
