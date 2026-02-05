import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Services from './sections/Services.jsx'
import HowItWorks from './sections/HowItWorks.jsx'
import Pricing from './sections/Pricing.jsx'
import FAQ from './sections/FAQ.jsx'
import CTA from './sections/CTA.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
