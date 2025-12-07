import { useState } from 'react'

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    { 
      name: 'Marie Dupont', 
      role: 'DAF', 
      company: 'TechCorp', 
      quote: 'Perfex a divisé par 3 notre temps de clôture comptable. L\'IA comprend vraiment notre métier.', 
      metric: '-67% temps admin' 
    },
    { 
      name: 'Thomas Martin', 
      role: 'CEO', 
      company: 'GrowthLab', 
      quote: 'On parle à notre ERP comme à un collègue. C\'est bluffant et terriblement efficace.', 
      metric: '+40% productivité' 
    },
    { 
      name: 'Sophie Laurent', 
      role: 'DRH', 
      company: 'IndustriaPro', 
      quote: 'La paie qui se fait toute seule, les congés gérés automatiquement. Un rêve devenu réalité.', 
      metric: '0 erreur paie' 
    },
  ]

  return (
    <section className="section-bordered">
      <div className="grid lg:grid-cols-3">
        {/* Title */}
        <div className="p-8 lg:p-12 bg-black text-white lg:border-r-2 border-black">
          <span className="text-xs font-mono tracking-widest text-gray-500">// TÉMOIGNAGES</span>
          <h2 className="text-4xl lg:text-5xl font-display tracking-tighter mt-4 leading-[0.9]">
            ILS ONT
            <br />
            <span className="text-perfex-green">CHOISI</span>
            <br />
            PERFEX
          </h2>
          
          {/* Nav dots */}
          <div className="flex gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-3 transition-all ${
                  i === activeTestimonial 
                    ? 'bg-perfex-red w-8' 
                    : 'bg-gray-700 hover:bg-gray-600 w-3'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial content */}
        <div className="lg:col-span-2 p-8 lg:p-12 relative min-h-[300px]">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className={`transition-all duration-500 ${
                i === activeTestimonial 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none p-8 lg:p-12'
              }`}
            >
              {/* Author */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-black flex items-center justify-center text-white text-2xl font-display">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-sm opacity-60">{testimonial.role} • {testimonial.company}</div>
                </div>
                <div className="ml-auto px-4 py-2 bg-perfex-green text-black text-sm font-bold">
                  {testimonial.metric}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
