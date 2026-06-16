import Nav from './components/Nav';
import AIHero from './components/AIHero';
import WhyNow from './components/WhyNow';
import Audit from './components/Audit';
import Credibility from './components/Credibility';
import Capabilities from './components/Capabilities';
import SupplementaryStrip from './components/SupplementaryStrip';
import AIFAQ from './components/AIFAQ';
import ContactCTA from './components/ContactCTA';
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
        <Credibility />
        <Capabilities />
        <SupplementaryStrip />
        <AIFAQ />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
