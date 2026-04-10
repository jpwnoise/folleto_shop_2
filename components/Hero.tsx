export default function Hero() {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950">
      {/* Parallax background */}
      <div className="hero-parallax absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(56,189,248,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(56,189,248,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15),transparent_70%)]" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="float-slow absolute top-[20%] left-[10%] text-5xl opacity-20">🦐</span>
        <span className="float-fast absolute top-[30%] right-[15%] text-4xl opacity-20">🐟</span>
        <span className="float-slow absolute bottom-[25%] left-[20%] text-5xl opacity-15">🐙</span>
        <span className="float-fast absolute top-[60%] right-[25%] text-4xl opacity-15">🦀</span>
        <span className="float-slow absolute bottom-[15%] right-[10%] text-5xl opacity-20">🐠</span>
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-deep-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-ocean-500/10 backdrop-blur-sm border border-ocean-400/20">
          <span className="w-2 h-2 rounded-full bg-sea-400 animate-pulse" />
          <span className="text-sm text-ocean-200">
            Servicio a domicilio gratis
          </span>
        </div>

        {/* Title */}
        <h1 className="hero-title text-5xl sm:text-7xl lg:text-8xl font-black mb-6 leading-[0.95]">
          <span className="block text-white">Novillero</span>
          <span className="block bg-gradient-to-r from-ocean-400 via-coral-400 to-sea-400 bg-clip-text text-transparent">
            Pescadería
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-ocean-200 max-w-3xl mx-auto mb-10 leading-relaxed">
          Mariscos y pescados frescos directo a tu mesa.{' '}
          <span className="text-white font-semibold">Selección premium</span> por kilogramo.
        </p>

        {/* CTAs */}
        <div className="hero-cta flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() =>
              document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-4 bg-gradient-to-r from-ocean-500 to-ocean-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-ocean-500/25 hover:shadow-ocean-500/40 transition-all duration-300 hover:scale-105"
          >
            Ver Catálogo 🐟
          </button>
          <a
            href="tel:3313262108"
            className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-xl font-bold text-lg border border-ocean-500/30 hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            📞 Llamar Ahora
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '12+', label: 'Productos' },
            { value: '100%', label: 'Fresco' },
            { value: 'Gratis', label: 'Envío' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-ocean-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ocean-400 hover:text-white transition-colors"
      >
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
        </div>
      </button>
    </section>
  );
}
