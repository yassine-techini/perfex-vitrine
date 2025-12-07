export default function Stats() {
  const stats = [
    { value: '240K€', label: 'ARR EN 18 MOIS', color: 'text-perfex-red' },
    { value: '95%', label: 'TAUX DE SUCCÈS', color: 'text-perfex-green' },
    { value: '20+', label: 'PROJETS LIVRÉS', color: 'text-perfex-blue' },
    { value: '10H', label: 'GAGNÉES / SEMAINE', color: 'text-perfex-purple' },
  ]

  return (
    <section id="stats" className="section-bordered">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className={`p-6 lg:p-10 text-center group hover-invert cursor-default ${
              i < 3 ? 'border-r-2 border-black' : ''
            }`}
          >
            <div className={`text-4xl lg:text-6xl font-display ${stat.color} group-hover:text-white transition-colors`}>
              {stat.value}
            </div>
            <div className="text-[10px] lg:text-xs font-bold tracking-widest mt-2 opacity-60 group-hover:opacity-100">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
