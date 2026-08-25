// Advertising.tsx — no highlights row, no CTA, just title/description/image
import HeroCommon from "../components/HeroCommon";
import adImg from "../assets/ChatGPT Image Aug 25, 2026, 03_01_34 PM.png";
import Header from "../components/Header"
import Footer from "../components/Footer";
import GetInTouch from "../components/Getintouch";
import WhyChooseZetoFoco from "../components/Whychoosezetofoco";

import Zetohubarchitecture from "../components/Zetohubarchitecture";
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
    />
    <WhyChooseZetoFoco/>
    <Focoroiinvestment/>
    <Zetohubarchitecture/>
    <GetInTouch pageType="franchise"/>
    <Footer/>
    </div>
  );
}

export default Advertising;