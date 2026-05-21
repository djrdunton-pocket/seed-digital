import Nav from './components/Nav';
import Hero from './components/Hero';
import LLMSection from './components/LLMSection';
import Packages from './components/Packages';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Schema from './components/Schema';

export default function Home() {
  return (
    <main>
      <Schema />
      <Nav />
      <Hero />
      <LLMSection />
      <Packages />
      <HowItWorks />
      <Portfolio />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}