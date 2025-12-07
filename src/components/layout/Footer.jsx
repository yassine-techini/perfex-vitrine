export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = [
    {
      title: 'PRODUIT',
      links: [
        { label: 'Fonctionnalités', action: () => scrollToSection('produit') },
        { label: 'Modules', action: () => scrollToSection('modules') },
        { label: 'Déploiement', action: () => scrollToSection('déploiement') },
        { label: 'Contact', action: () => scrollToSection('contact') },
      ]
    },
    {
      title: 'RESSOURCES',
      links: [
        { label: 'Documentation', url: '#' },
        { label: 'Tutoriels', url: '#' },
      ]
    },
    {
      title: 'ENTREPRISE',
      links: [
        { label: 'À propos', url: '#' },
        { label: 'Carrières', url: 'mailto:jobs@devfactory.tn' },
        { label: 'Contact', url: 'mailto:contact@devfactory.tn' },
        { label: 'Presse', url: 'mailto:presse@devfactory.tn' },
        { label: 'Partenaires', url: 'mailto:partenaires@devfactory.tn' },
      ]
    },
  ]

  const socialLinks = [
    { name: 'X', url: 'https://twitter.com/devfactory' },
    { name: 'IN', url: 'https://linkedin.com/company/devfactory' },
    { name: 'GH', url: 'https://github.com/devfactory' },
  ]

  return (
    <footer className="relative z-10 border-t-2 border-black bg-perfex-bg">
      {/* Main footer */}
      <div className="grid lg:grid-cols-4 border-b-2 border-black">
        {/* Logo & info */}
        <div className="p-8 lg:p-12 lg:border-r-2 border-black">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <span className="font-display text-white text-xl">P</span>
            </div>
            <span className="text-xl font-display tracking-tighter">PERFEX</span>
          </div>
          <p className="text-sm opacity-60 mb-6">
            L'ERP AI-Native pour les entreprises qui veulent aller plus vite.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold text-xs hover:bg-black hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Links columns */}
        {footerLinks.map((col, i) => (
          <div key={i} className="p-8 lg:p-12 lg:border-r-2 border-black border-t-2 lg:border-t-0">
            <h4 className="text-xs font-bold tracking-widest mb-6 opacity-40">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((link, j) => (
                <li key={j}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="text-sm hover:text-perfex-red transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a
                      href={link.url}
                      target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                      rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      className="text-sm hover:text-perfex-red transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm">PERFEX BY DEVFACTORY</span>
          <span className="text-black/30">•</span>
          <span className="text-sm opacity-60">France & Tunisie</span>
        </div>
        <div className="flex items-center gap-6 text-xs">
          <button onClick={() => scrollToSection('contact')} className="hover:text-perfex-red transition-colors">MENTIONS LÉGALES</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-perfex-red transition-colors">CONFIDENTIALITÉ</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-perfex-red transition-colors">CGU</button>
        </div>
        <div className="font-mono text-xs text-black/40">
          © 2025 — v1.0.0
        </div>
      </div>
    </footer>
  )
}
