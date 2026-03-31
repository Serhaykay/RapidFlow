import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MissionVision from './components/MissionVision'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: '#020B18' }}>
      <Navbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <WhatsAppWidget drawerOpen={drawerOpen} />
    </div>
  )
}
