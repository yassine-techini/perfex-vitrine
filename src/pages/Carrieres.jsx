import { Link } from 'react-router-dom'

export default function Carrieres() {
  const benefits = [
    { icon: '🏠', title: 'Remote-first', description: 'Travaillez d\'où vous voulez, quand vous voulez.' },
    { icon: '📚', title: 'Formation continue', description: 'Budget formation et conférences illimité.' },
    { icon: '💻', title: 'Équipement premium', description: 'MacBook Pro, écrans, et tout ce dont vous avez besoin.' },
    { icon: '🌴', title: 'Congés flexibles', description: 'Politique de congés flexible et bienveillante.' },
    { icon: '🚀', title: 'Impact réel', description: 'Vos contributions ont un impact direct sur le produit.' },
    { icon: '🤝', title: 'Équipe passionnée', description: 'Rejoignez des experts passionnés par l\'IA et le produit.' },
  ]

  return (
    <div className="min-h-screen bg-perfex-bg text-perfex-black">
      {/* Header */}
      <header className="border-b-2 border-black p-6 lg:p-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <span className="font-display text-white text-xl">P</span>
            </div>
            <span className="text-2xl font-display tracking-tighter">PERFEX</span>
          </Link>
          <Link to="/" className="text-sm font-bold hover:text-perfex-red transition-colors">
            ← RETOUR
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b-2 border-black">
        <div className="max-w-5xl mx-auto p-8 lg:p-16">
          <span className="text-xs font-mono tracking-widest text-black/40">// CARRIÈRES</span>
          <h1 className="text-4xl lg:text-7xl font-display tracking-tighter mt-4 mb-8">
            REJOIGNEZ
            <br />
            <span className="text-perfex-red">L'AVENTURE</span>
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed max-w-3xl font-light">
            Nous construisons le futur de la gestion d'entreprise avec l'IA.
            Rejoignez une équipe passionnée qui repousse les limites de l'innovation.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b-2 border-black">
        <div className="max-w-5xl mx-auto p-8 lg:p-16">
          <span className="text-xs font-mono tracking-widest text-black/40">// AVANTAGES</span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tighter mt-4 mb-12">
            POURQUOI NOUS REJOINDRE ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-6 border-2 border-black hover:bg-black hover:text-white transition-colors group">
                <span className="text-3xl">{benefit.icon}</span>
                <h3 className="text-lg font-display tracking-tight mt-4 mb-2">{benefit.title}</h3>
                <p className="text-sm opacity-70 group-hover:opacity-90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No open positions */}
      <section className="border-b-2 border-black">
        <div className="max-w-5xl mx-auto p-8 lg:p-16">
          <span className="text-xs font-mono tracking-widest text-black/40">// OFFRES D'EMPLOI</span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tighter mt-4 mb-12">
            POSTES OUVERTS
          </h2>

          <div className="p-12 border-2 border-dashed border-black/30 text-center">
            <span className="text-6xl opacity-30">📭</span>
            <h3 className="text-2xl font-display tracking-tight mt-6 mb-4">
              Aucun poste ouvert actuellement
            </h3>
            <p className="text-lg opacity-60 max-w-md mx-auto mb-8">
              Nous n'avons pas de poste à pourvoir pour le moment, mais nous sommes toujours à la recherche de talents exceptionnels.
            </p>
            <p className="text-lg">
              Envoyez-nous votre candidature spontanée à{' '}
              <a
                href="mailto:jobs@devfactory.ai?subject=Candidature%20spontanée"
                className="text-perfex-red font-bold hover:underline"
              >
                jobs@devfactory.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b-2 border-black bg-black text-white">
        <div className="max-w-5xl mx-auto p-8 lg:p-16">
          <span className="text-xs font-mono tracking-widest text-gray-500">// PROCESSUS</span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tighter mt-4 mb-12">
            NOTRE PROCESSUS DE RECRUTEMENT
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Candidature', desc: 'Envoyez-nous votre CV et quelques mots sur vous.' },
              { num: '02', title: 'Échange', desc: 'Premier call de 30 min pour faire connaissance.' },
              { num: '03', title: 'Technique', desc: 'Entretien technique adapté au poste.' },
              { num: '04', title: 'Offre', desc: 'Si ça matche, on vous fait une proposition !' },
            ].map((step, i) => (
              <div key={i}>
                <span className="text-5xl font-display text-perfex-red">{step.num}</span>
                <h3 className="text-xl font-display tracking-tight mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-perfex-red text-white">
        <div className="max-w-5xl mx-auto p-8 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-display tracking-tighter mb-6">
            VOUS AVEZ DES QUESTIONS ?
          </h2>
          <p className="text-xl opacity-80 mb-8">
            N'hésitez pas à nous contacter pour en savoir plus sur DevFactory.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:jobs@devfactory.ai?subject=Question%20carrières"
              className="px-8 py-4 bg-white text-perfex-red font-bold tracking-wide hover:bg-black hover:text-white transition-colors"
            >
              ÉCRIRE À L'ÉQUIPE RH
            </a>
            <Link
              to="/a-propos"
              className="px-8 py-4 border-2 border-white font-bold tracking-wide hover:bg-white hover:text-perfex-red transition-colors"
            >
              EN SAVOIR PLUS
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
