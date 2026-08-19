// Advertising.tsx — no highlights row, no CTA, just title/description/image
import HeroCommon from "../components/HeroCommon";
import adImg from "../assets/ChatGPT Image Aug 19, 2026, 01_15_51 PM.png";
import Header from "../components/Header"
import Footer from "../components/Footer";
import GetInTouch from "../components/Getintouch";
import WhyChooseZetoFoco from "../components/Whychoosezetofoco";
import FocoPartnerJourney from "../components/Focopartnerjourney";

export function Advertising() {
  return (
    <div>
    <Header variant="dark"/>
    <HeroCommon
      title="You Invest,"
      highlight="We Operate"
      description="Partner with Zeto through the FOCO model — you bring the capital and the site, we bring the staff, systems, and day-to-day running."
      heroImage={adImg}
      heroImageAlt="Branded Zeto scooter fleet"
    />
    <WhyChooseZetoFoco/>
    <FocoPartnerJourney/>
    <GetInTouch pageType="franchise"/>
    <Footer/>
    </div>
  );
}

export default Advertising;