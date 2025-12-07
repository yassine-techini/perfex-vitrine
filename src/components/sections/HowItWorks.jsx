export default function HowItWorks() {
  const steps = [
    { 
      num: '01', 
      title: 'VOUS PARLEZ', 
      desc: 'Demandez ce que vous voulez en langage naturel. Pas de menus, pas de formations.' 
    },
    { 
      num: '02', 
      title: 'L\'IA COMPREND', 
      desc: 'Notre architecture multi-agents analyse le contexte et identifie les actions.' 
    },
    { 
      num: '03', 
      title: 'C\'EST FAIT', 
      desc: 'L\'action est exécutée instantanément. Vous validez et passez à autre chose.' 
    },
  ]

  return (
    <section id="ressources" className="section-bordered">
      <div className="grid lg:grid-cols-4">
        {/* Title */}
        <div className="p-8 lg:p-12 bg-perfex-red text-white lg:border-r-2 border-black">
          <span className="text-xs font-mono tracking-widest opacity-60">// PROCESS</span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tighter mt-4 leading-[0.9]">
            COMMENT
            <br />
            ÇA
            <br />
            MARCHE ?
          </h2>
        </div>

        {/* Steps */}
        {steps.map((step, i) => (
          <div 
            key={i}
            className={`p-8 lg:p-12 ${i < 2 ? 'lg:border-r-2 border-black' : ''} border-t-2 lg:border-t-0 border-black group hover-invert`}
          >
            <span className="text-6xl lg:text-8xl font-display opacity-10 group-hover:opacity-20 transition-opacity">
              {step.num}
            </span>
            <h3 className="text-xl lg:text-2xl font-display tracking-tight mt-4 mb-3">
              {step.title}
            </h3>
            <p className="text-sm opacity-60 group-hover:opacity-80 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
