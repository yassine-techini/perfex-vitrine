import { useState } from 'react'

export default function Deployment() {
  const [hoveredOption, setHoveredOption] = useState(null)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const saasFeatures = [
    'Déploiement instantané',
    'Mises à jour automatiques',
    'Sauvegarde & sécurité incluses',
    'Scalabilité automatique',
    'Support inclus',
    'Aucune maintenance requise'
  ]

  const onPremiseFeatures = [
    'Données sur vos serveurs',
    'Contrôle total de l\'infrastructure',
    'Personnalisation avancée',
    'Intégration SI existant',
    'Conformité réglementaire',
    'Air-gapped disponible'
  ]

  return (
    <section id="déploiement" className="section-bordered">
      {/* Section header */}
      <div className="p-8 lg:p-12 border-b-2 border-black bg-perfex-bg">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-black/40">// DÉPLOIEMENT</span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tighter mt-2">
              VOTRE INFRASTRUCTURE
              <br />
              <span className="text-black/30">VOS RÈGLES</span>
            </h2>
          </div>
          <p className="text-lg max-w-md font-light lg:text-right">
            Perfex s'adapte à vos contraintes. 
            <strong> Choisissez le mode de déploiement</strong> qui correspond à votre stratégie IT.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* SaaS */}
        <div 
          className="p-8 lg:p-12 border-r-2 border-black transition-all duration-300"
          style={{ 
            backgroundColor: hoveredOption === 'saas' ? '#2979FF' : 'transparent',
            color: hoveredOption === 'saas' ? 'white' : 'inherit'
          }}
          onMouseEnter={() => setHoveredOption('saas')}
          onMouseLeave={() => setHoveredOption(null)}
        >
          <div className="flex items-start justify-between mb-8">
            <span className="text-8xl lg:text-9xl font-display opacity-10">
              ☁️
            </span>
            <span 
              className="px-3 py-1 text-xs font-bold tracking-widest transition-colors"
              style={{ 
                backgroundColor: hoveredOption === 'saas' ? 'white' : '#2979FF',
                color: hoveredOption === 'saas' ? '#2979FF' : 'white'
              }}
            >
              CLOUD
            </span>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-display tracking-tight mb-4">
            MODE SAAS
          </h3>
          <p className="text-lg opacity-70 mb-8 font-light">
            Démarrez immédiatement sans infrastructure. Nous gérons tout pour vous.
          </p>

          <ul className="space-y-4 mb-10">
            {saasFeatures.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <span 
                  className="w-2 h-2 transition-colors"
                  style={{ backgroundColor: hoveredOption === 'saas' ? 'white' : '#00E676' }}
                />
                {feature}
              </li>
            ))}
          </ul>

          <div 
            className="pt-6 border-t-2 transition-colors"
            style={{ borderColor: hoveredOption === 'saas' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold opacity-60">Idéal pour</span>
              <span className="text-sm font-bold">PME • Startups • Scale-ups</span>
            </div>
          </div>
        </div>

        {/* On-Premise */}
        <div 
          className="p-8 lg:p-12 transition-all duration-300"
          style={{ 
            backgroundColor: hoveredOption === 'onpremise' ? '#1a1a1a' : 'transparent',
            color: hoveredOption === 'onpremise' ? 'white' : 'inherit'
          }}
          onMouseEnter={() => setHoveredOption('onpremise')}
          onMouseLeave={() => setHoveredOption(null)}
        >
          <div className="flex items-start justify-between mb-8">
            <span className="text-8xl lg:text-9xl font-display opacity-10">
              🏢
            </span>
            <span 
              className="px-3 py-1 text-xs font-bold tracking-widest transition-colors"
              style={{ 
                backgroundColor: hoveredOption === 'onpremise' ? 'white' : '#1a1a1a',
                color: hoveredOption === 'onpremise' ? '#1a1a1a' : 'white'
              }}
            >
              ON-PREMISE
            </span>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-display tracking-tight mb-4">
            MODE ON-PREMISE
          </h3>
          <p className="text-lg opacity-70 mb-8 font-light">
            Gardez le contrôle total. Perfex s'installe sur votre infrastructure.
          </p>

          <ul className="space-y-4 mb-10">
            {onPremiseFeatures.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <span className="w-2 h-2 bg-perfex-red" />
                {feature}
              </li>
            ))}
          </ul>

          <div 
            className="pt-6 border-t-2 transition-colors"
            style={{ borderColor: hoveredOption === 'onpremise' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold opacity-60">Idéal pour</span>
              <span className="text-sm font-bold">ETI • Grands comptes • Secteur public</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hybrid note */}
      <div className="p-6 lg:p-8 bg-black text-white flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-2xl">⚡</span>
          <div>
            <span className="font-bold">MODE HYBRIDE DISPONIBLE</span>
            <span className="text-gray-400 ml-2 text-sm">— Combinez SaaS et On-Premise selon vos besoins</span>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('contact')}
          className="px-6 py-3 border-2 border-white text-sm font-bold tracking-wide hover:bg-white hover:text-black transition-all"
        >
          EN SAVOIR PLUS
        </button>
      </div>
    </section>
  )
}
