export default function CTA() {
  const handleDemoClick = () => {
    window.open('https://calendly.com', '_blank')
  }

  const handleContactClick = () => {
    window.location.href = 'mailto:contact@devfactory.ai?subject=Demande%20de%20démo%20Perfex'
  }

  return (
    <section id="contact" className="relative z-10 bg-black text-white">
      <div className="p-8 lg:p-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Label */}
          <span className="inline-block px-4 py-2 border border-gray-700 text-xs font-mono tracking-widest text-gray-400 mb-8">
            // PRÊT À COMMENCER ?
          </span>
          
          {/* Title */}
          <h2 className="text-5xl lg:text-8xl font-display tracking-tighter mb-8 leading-[0.9]">
            TRANSFORMEZ
            <br />
            <span className="text-perfex-red">VOTRE GESTION</span>
            <br />
            AUJOURD'HUI
          </h2>
          
          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
            Démarrage en 48h. Formation incluse. 14 jours d'essai gratuit. Sans engagement.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleDemoClick}
              className="group px-10 py-5 bg-perfex-red text-white font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all flex items-center gap-3"
            >
              <span>DÉMARRER L'ESSAI GRATUIT</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={handleContactClick}
              className="px-10 py-5 border-2 border-white font-bold text-lg tracking-wide hover:bg-white hover:text-black transition-all"
            >
              PARLER À UN EXPERT
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
