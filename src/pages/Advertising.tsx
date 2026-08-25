// Advertising.tsx — no highlights row, no CTA, just title/description/image
import HeroCommon from "../components/HeroCommon";
import adImg from "../assets/ChatGPT Image Aug 18, 2026, 01_15_17 PM.png";
import Header from "../components/Header"
import AdShowcase from "../components/Adshowcase";
import Footer from "../components/Footer";
import GetInTouch from "../components/Getintouch";
import ZetoMovingBillboardsSection from "../components/ZetoMovingBillboardsSection";
import WhyScooterAdvertisingWins from "../components/WhyScooterAdvertisingWins";
import Brandingpricing from "../components/Brandingpricing";

export function Advertising() {
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
    <AdShowcase/>
    <ZetoMovingBillboardsSection/>
    <WhyScooterAdvertisingWins/>
    <Brandingpricing/>
    <GetInTouch pageType="advertising"/>
    <Footer/>
    </div>
  );
}

export default Advertising;