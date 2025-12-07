export default function ModuleCard({ module, isHovered, onMouseEnter, onMouseLeave }) {
  return (
    <div 
      className="module-card group"
      style={{ 
        backgroundColor: isHovered ? module.color : 'transparent',
        color: isHovered ? 'white' : 'inherit'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Number background */}
      <span 
        className="number-bg transition-opacity"
        style={{ opacity: isHovered ? 0.1 : 0.05 }}
      >
        {module.id}
      </span>
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <span 
            className="text-xs font-mono tracking-widest px-2 py-1 transition-colors"
            style={{ 
              backgroundColor: isHovered ? 'rgba(255,255,255,0.2)' : `${module.color}20`,
              color: isHovered ? 'white' : module.color
            }}
          >
            {module.id}
          </span>
          <svg 
            className="w-6 h-6 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        {/* Title & subtitle */}
        <h3 className="text-2xl lg:text-3xl font-display tracking-tight mb-2">
          {module.name}
        </h3>
        <p className="text-sm opacity-50 mb-6">{module.subtitle}</p>

        {/* Features */}
        <ul className="space-y-2">
          {module.features.map((feature, j) => (
            <li key={j} className="flex items-center gap-2 text-sm">
              <span 
                className="w-1.5 h-1.5 transition-colors"
                style={{ backgroundColor: isHovered ? 'white' : module.color }}
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
