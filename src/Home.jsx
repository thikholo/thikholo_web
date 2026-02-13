import Navbar from './sections/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Services from './sections/Services.jsx'
import HowItWorks from './sections/HowItWorks.jsx'
import Pricing from './sections/Pricing.jsx'
import FAQ from './sections/FAQ.jsx'
import Footer from './sections/Footer.jsx'

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
