import { useState } from 'react'
import ModuleCard from '../ui/ModuleCard'

export default function Modules() {
  const [hoveredModule, setHoveredModule] = useState(null)

  const modules = [
    { 
      id: '01', 
      name: 'FINANCE', 
      subtitle: 'Comptabilité & Trésorerie', 
      color: '#FF3D00', 
      features: ['Saisie OCR automatique', 'Rapprochement bancaire IA', 'Prévisions cash-flow'] 
    },
    { 
      id: '02', 
      name: 'CRM', 
      subtitle: 'Relation Client', 
      color: '#00E676', 
      features: ['Lead scoring prédictif', 'Pipeline intelligent', 'Relances automatisées'] 
    },
    { 
      id: '03', 
      name: 'INVENTORY', 
      subtitle: 'Gestion des Stocks', 
      color: '#2979FF', 
      features: ['Prédiction ruptures', 'Optimisation niveaux', 'Multi-entrepôts'] 
    },
    { 
      id: '04', 
      name: 'RH & PAIE', 
      subtitle: 'Ressources Humaines', 
      color: '#FF9100', 
      features: ['Bulletins automatiques', 'Gestion absences', 'Évaluations IA'] 
    },
    { 
      id: '05', 
      name: 'PROJETS', 
      subtitle: 'Gestion de Projets', 
      color: '#D500F9', 
      features: ['Planning intelligent', 'Allocation ressources', 'Rentabilité temps réel'] 
    },
    { 
      id: '06', 
      name: 'PRODUCTION', 
      subtitle: 'Manufacturing 4.0', 
      color: '#00BFA5', 
      features: ['Ordonnancement IA', 'Maintenance prédictive', 'Qualité automatisée'] 
    },
  ]

  return (
    <section id="modules" className="section-bordered">
      {/* Section header */}
      <div className="p-8 lg:p-16 border-b-2 border-black">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-black/40">// MODULES</span>
            <h2 className="text-5xl lg:text-7xl font-display tracking-tighter mt-2">
              12 MODULES
              <br />
              <span className="text-black/30">UNE SEULE IA</span>
            </h2>
          </div>
          <p className="text-lg max-w-md font-light lg:text-right">
            Chaque module est enrichi par l'intelligence artificielle. 
            <strong> Ensemble, ils forment un système nerveux digital</strong> pour votre entreprise.
          </p>
        </div>
      </div>

      {/* Modules grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, i) => (
          <ModuleCard 
            key={i}
            module={module}
            isHovered={hoveredModule === i}
            onMouseEnter={() => setHoveredModule(i)}
            onMouseLeave={() => setHoveredModule(null)}
          />
        ))}
      </div>
    </section>
  )
}
