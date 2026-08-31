// Advertising.tsx — no highlights row, no CTA, just title/description/image
import HeroCommon from "../components/HeroCommon";
import adImg from "../assets/WhatsApp Image 2026-08-26 at 11.03.25 AM.jpeg";
import Header from "../components/Header"
import Footer from "../components/Footer";
import GetInTouch from "../components/Getintouch";
import WhyChooseZetoFoco from "../components/Whychoosezetofoco";
import Focoroiinvestment from "../components/Focoroiinvestment";

export function Advertising() {
  return (
    <div>
    <Header variant="dark"/>
    <HeroCommon
      title="EV Franchise Business in Your City"
      highlight="Earn 45% ROI"
      description="Partner with ZETO through the FOCO model — you bring the capital and the site, we bring the staff, systems, and day-to-day running."
      heroImage={adImg}
      heroImageAlt="Branded Zeto scooter fleet"
      imagePosition="center"           // desktop stays exactly as it is now
      mobileImagePosition="48% center"
    />
    <WhyChooseZetoFoco/>
    <Focoroiinvestment/>
    <GetInTouch pageType="foco"/>
    <Footer/>
    </div>
  );
}

export default Advertising;