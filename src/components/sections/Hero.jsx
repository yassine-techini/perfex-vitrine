import { useState, useEffect } from 'react'
import Terminal from '../ui/Terminal'

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Hero() {
  return (
    <section id="produit" className="section-bordered">
      <div className="grid lg:grid-cols-5">
        {/* Left content - 3 cols */}
        <div className="lg:col-span-3 p-8 lg:p-16 lg:border-r-2 border-black">
          {/* Marquee */}
          <div className="overflow-hidden mb-8 -mx-8 lg:-mx-16 px-8 lg:px-16 py-3 bg-black text-white">
            <div className="marquee-content">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="text-xs font-mono tracking-widest flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-perfex-red" />
                  ERP AI-NATIVE
                  <span className="w-1.5 h-1.5 bg-perfex-green" />
                  12 MODULES
                  <span className="w-1.5 h-1.5 bg-perfex-blue" />
                  CONVERSATION NATURELLE
                </span>
              ))}
            </div>
          </div>

          {/* Badge */}
          <div className="mb-8">
            <span className="badge-red">NOUVELLE GÉNÉRATION</span>
          </div>

          {/* Title */}
          <h1 className="hero-title mb-8">
            L'ERP
            <br />
            <span className="text-perfex-red">QUI VOUS</span>
            <br />
            COMPREND
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl leading-relaxed max-w-xl mb-12 font-light">
            Perfex réinvente la gestion d'entreprise. 
            <span className="font-bold border-b-4 border-perfex-red"> Parlez naturellement</span>, 
            l'IA comprend et <span className="font-bold border-b-4 border-perfex-green">agit instantanément</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary group"
            >
              <span>ESSAYER GRATUITEMENT</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('produit')}
              className="btn-secondary flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>DÉCOUVRIR</span>
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 pt-8 border-t-2 border-black/10">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['A', 'B', 'C', 'D'].map((letter, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-black/10 border-2 border-perfex-bg flex items-center justify-center text-xs font-bold"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium">+200 entreprises</span>
            </div>
            <div className="h-8 w-px bg-black/20" />
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 fill-perfex-orange" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="text-sm font-medium ml-1">4.9/5</span>
            </div>
          </div>
        </div>

        {/* Right - Terminal - 2 cols */}
        <div className="lg:col-span-2">
          <Terminal />
        </div>
      </div>
    </section>
  )
}
