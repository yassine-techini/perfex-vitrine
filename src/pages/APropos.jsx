import { Link } from 'react-router-dom'

export default function APropos() {
  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Nous repoussons les limites de la technologie pour créer des solutions qui transforment les entreprises.'
    },
    {
      icon: '🤝',
      title: 'Partenariat',
      description: 'Nous travaillons main dans la main avec nos clients pour comprendre leurs défis et y répondre.'
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque ligne de code, chaque fonctionnalité, chaque interaction.'
    },
    {
      icon: '🌍',
      title: 'Impact',
      description: 'Nous créons des outils qui ont un impact réel sur la productivité et la croissance des entreprises.'
    }
  ]

  const stats = [
    { value: '2024', label: 'Année de création' },
    { value: '12', label: 'Modules ERP' },
    { value: '200+', label: 'Entreprises accompagnées' },
    { value: '2', label: 'Pays (France & Tunisie)' }
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
          <span className="text-xs font-mono tracking-widest text-black/40">// À PROPOS</span>
          <h1 className="text-4xl lg:text-7xl font-display tracking-tighter mt-4 mb-8">
            NOUS SOMMES
            <br />
            <span className="text-perfex-red">DEVFACTORY</span>
          </h1>
          <p className="text-xl lg:text-2xl leading-relaxed max-w-3xl font-light">
            Une équipe passionnée par l'intelligence artificielle et la transformation digitale des entreprises.
            Nous construisons <strong>Perfex</strong>, l'ERP AI-Native qui révolutionne la gestion d'entreprise.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b-2 border-black bg-black text-white">
        <div className="max-w-5xl mx-auto p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono tracking-widest text-gray-500">// NOTRE MISSION</span>
              <h2 className="text-3xl lg:text-5xl font-display tracking-tighter mt-4 mb-6">
                SIMPLIFIER LA GESTION D'ENTREPRISE
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-gray-300">
                Les ERP traditionnels sont complexes, rigides et frustrants. Nous croyons qu'il existe une meilleure façon de faire.
                Avec Perfex, nous apportons la puissance de l'IA conversationnelle à la gestion d'entreprise.
                <strong className="text-white"> Parlez naturellement, l'IA comprend et agit.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b-2 border-black">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`p-8 lg:p-12 text-center ${i < 3 ? 'border-r-2 border-black' : ''}`}
            >
              <div className="text-4xl lg:text-5xl font-display text-perfex-red">{stat.value}</div>
              <div className="text-xs font-bold tracking-widest mt-2 opacity-60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-b-2 border-black">
        <div className="max-w-5xl mx-auto p-8 lg:p-16">
          <span className="text-xs font-mono tracking-widest text-black/40">// NOS VALEURS</span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tighter mt-4 mb-12">
            CE QUI NOUS ANIME
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div key={i} className="p-6 border-2 border-black hover:bg-black hover:text-white transition-colors group">
                <span className="text-4xl">{value.icon}</span>
                <h3 className="text-xl font-display tracking-tight mt-4 mb-2">{value.title}</h3>
                <p className="opacity-70 group-hover:opacity-90">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="border-b-2 border-black">
        <div className="max-w-5xl mx-auto p-8 lg:p-16">
          <span className="text-xs font-mono tracking-widest text-black/40">// NOS BUREAUX</span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tighter mt-4 mb-12">
            PRÉSENCE INTERNATIONALE
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border-2 border-black">
              <span className="text-4xl">🇫🇷</span>
              <h3 className="text-2xl font-display tracking-tight mt-4 mb-2">FRANCE</h3>
              <p className="opacity-70">Siège européen</p>
            </div>
            <div className="p-8 border-2 border-black">
              <span className="text-4xl">🇹🇳</span>
              <h3 className="text-2xl font-display tracking-tight mt-4 mb-2">TUNISIE</h3>
              <p className="opacity-70">Centre de développement</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-perfex-red text-white">
        <div className="max-w-5xl mx-auto p-8 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-display tracking-tighter mb-6">
            ENVIE DE NOUS REJOINDRE ?
          </h2>
          <p className="text-xl opacity-80 mb-8">
            Découvrez nos opportunités de carrière ou contactez-nous directement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/carrieres"
              className="px-8 py-4 bg-white text-perfex-red font-bold tracking-wide hover:bg-black hover:text-white transition-colors"
            >
              VOIR LES OFFRES
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white font-bold tracking-wide hover:bg-white hover:text-perfex-red transition-colors"
            >
              NOUS CONTACTER
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
