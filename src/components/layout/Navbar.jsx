import { useState } from 'react'

export default function Navbar({ currentTime }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = ['PRODUIT', 'MODULES', 'DÉPLOIEMENT', 'RESSOURCES', 'CONTACT']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-perfex-bg/95 backdrop-blur-sm border-b-2 border-black">
      <div className="flex items-stretch">
        {/* Logo */}
        <a 
          href="#" 
          className="px-6 py-4 border-r-2 border-black flex items-center gap-3 hover:bg-black hover:text-white transition-colors group"
        >
          <div className="w-10 h-10 bg-black group-hover:bg-white flex items-center justify-center transition-colors">
            <span className="font-display text-white group-hover:text-black text-xl transition-colors">P</span>
          </div>
          <span className="text-2xl font-display tracking-tighter">PERFEX</span>
        </a>

        {/* Nav items - Desktop */}
        <div className="hidden lg:flex items-stretch flex-1">
          {navItems.map((item, i) => (
            <a 
              key={i}
              href={`#${item.toLowerCase()}`} 
              className="px-6 flex items-center border-r border-black/10 text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Status indicator */}
        <div className="hidden md:flex items-center px-4 border-l border-black/10 gap-2">
          <span className="w-2 h-2 rounded-full bg-perfex-green animate-pulse" />
          <span className="text-xs font-mono text-black/50">ONLINE</span>
        </div>

        {/* Time */}
        <div className="hidden lg:flex items-center px-4 border-l border-black/10 font-mono text-xs text-black/50">
          {currentTime.toLocaleTimeString('fr-FR')}
        </div>

        {/* CTA */}
        <button className="px-8 py-4 bg-black text-white text-xs font-bold tracking-widest hover:bg-perfex-red transition-colors flex items-center gap-2 group">
          <span className="hidden sm:inline">DÉMO</span>
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden px-4 border-l-2 border-black hover:bg-black hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-black">
          {navItems.map((item, i) => (
            <a 
              key={i}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-4 border-b border-black/10 text-sm font-bold tracking-widest hover:bg-black hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
