import { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import HowItWorks from './components/sections/HowItWorks'
import Modules from './components/sections/Modules'
import Testimonials from './components/sections/Testimonials'
import Deployment from './components/sections/Deployment'
import CTA from './components/sections/CTA'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-perfex-bg text-perfex-black overflow-hidden">
      {/* Grid background */}
      <div className="fixed inset-0 pointer-events-none grid-background" />

      {/* Navigation */}
      <Navbar currentTime={currentTime} />
      
      {/* Spacer for fixed nav */}
      <div className="h-[60px]" />

      {/* Main content */}
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Modules />
        <Testimonials />
        <Deployment />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
