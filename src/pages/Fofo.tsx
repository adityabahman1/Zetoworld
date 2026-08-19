// Advertising.tsx — no highlights row, no CTA, just title/description/image
import HeroCommon from "../components/HeroCommon";
import adImg from "../assets/ChatGPT Image Aug 18, 2026, 01_15_17 PM.png";
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
      title="Reach Riders,"
      highlight="Reach Cities"
      description="Advertise on Zeto's fleet and put your brand in front of thousands daily."
      heroImage={adImg}
      heroImageAlt="Branded Zeto scooter fleet"
    />
    <FofoBenefitCards/>
    <FofoControlPanel/>
    <GetInTouch pageType="franchise"/>
    <Footer/>
    </div>
  );
}

export default Fofo;