import Nav from './components/Nav';
import Hero from './components/Hero';
import Packages from './components/Packages';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Packages />
      <HowItWorks />
      <Portfolio />
      <About />
      <FAQ />
      <Footer />
    </main>
  );
}