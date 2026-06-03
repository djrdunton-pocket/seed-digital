import Nav from './components/Nav';
import AIHero from './components/AIHero';
import WhyNow from './components/WhyNow';
import Audit from './components/Audit';
import Journey from './components/Journey';
import SupplementaryStrip from './components/SupplementaryStrip';
import Credibility from './components/Credibility';
import FinalCTA from './components/FinalCTA';
import SiteFooter from './components/SiteFooter';
import Schema from './components/Schema';

export default function Home() {
  return (
    <>
      <Schema />
      <Nav />
      <main>
        <AIHero />
        <WhyNow />
        <Audit />
        <Journey />
        <SupplementaryStrip />
        <Credibility />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
