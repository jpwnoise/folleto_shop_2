export default function About() {
  return (
    <section
      id="nosotros"
      className="relative py-24 md:py-32 bg-ocean-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ocean-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="animate-on-scroll">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-ocean-500/10 border border-ocean-400/20">
              <span className="text-sm text-ocean-300">🐟 Nosotros</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Frescura y{' '}
              <span className="bg-gradient-to-r from-ocean-400 to-sea-400 bg-clip-text text-transparent">
                Calidad
              </span>
            </h2>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                emoji: '🚚',
                title: 'Envío Gratis',
                desc: 'Servicio a domicilio sin costo en tu zona.',
                color: 'from-ocean-500/20 to-ocean-600/20',
              },
              {
                emoji: '❄️',
                title: 'Siempre Fresco',
                desc: 'Productos seleccionados diariamente del mercado.',
                color: 'from-sea-500/20 to-sea-600/20',
              },
              {
                emoji: '⚖️',
                title: 'Por Kilogramo',
                desc: 'Elige la cantidad exacta que necesitas.',
                color: 'from-deep-500/20 to-deep-600/20',
              },
              {
                emoji: '📱',
                title: 'Fácil Pedido',
                desc: 'Ordena directamente por WhatsApp.',
                color: 'from-coral-500/20 to-coral-600/20',
              },
              {
                emoji: '💰',
                title: 'Mejor Precio',
                desc: 'Precios competitivos directamente del proveedor.',
                color: 'from-ocean-500/20 to-sea-500/20',
              },
              {
                emoji: '⭐',
                title: 'Calidad Premium',
                desc: 'Solo los mejores productos llegan a tu mesa.',
                color: 'from-deep-500/20 to-ocean-500/20',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className={`p-6 bg-gradient-to-br ${feature.color} border border-ocean-600/20 rounded-2xl hover:border-ocean-400/40 transition-all duration-300 hover:-translate-y-1`}
              >
                <span className="text-4xl block mb-4">{feature.emoji}</span>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-ocean-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
