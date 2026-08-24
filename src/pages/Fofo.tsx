// Fofo.tsx — no highlights row, no CTA, just title/description/image
import HeroCommon from "../components/HeroCommon";
import adImg from "../assets/ChatGPT Image Aug 24, 2026, 11_19_21 AM.png"
import Header from "../components/Header"
import Footer from "../components/Footer";
import GetInTouch from "../components/Getintouch";
import FofoControlPanel from "../components/Fofocontrolpanel";
import FofoBenefitCards from "../components/Fofobenefitcards";

export function Fofo() {
  return (
    <div>
    <Header variant="dark"/>
    <HeroCommon
      title="Own & Operate "
      highlight="Your EV Dealership"
      description="Partner with ZETO through the FOFO model — you own and operate the business, Zeto equips you with playbook, training, and brand behind it."
      heroImage={adImg}
      heroImageAlt="Zeto franchise owner running their site"
    />
    <FofoBenefitCards/>
    <FofoControlPanel/>
    <GetInTouch pageType="franchise"/>
    <Footer/>
    </div>
  );
}

export default Fofo;