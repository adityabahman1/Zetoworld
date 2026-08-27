// Advertising.tsx

import HeroCommon from "../components/HeroCommon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/Getintouch";
import adImg from "../assets/ChatGPT Image Aug 26, 2026, 10_44_31 AM.png";
import SwapStationJourney from "../components/Swapstationjourney";
import ZetoBatterySwapStation from "../components/Zetobatteryswapstation";
import SwapStationFeatures from "../components/Swapstationfeatures";
import SwappableBattery from "../components/SwappableBattery";
import Swapstation from "../components/Swapstation";

export function Battery() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="dark" />
      <HeroCommon
        title="Never Wait to Charge Again"
        highlight="Swap in 2 Minutes"
        description="Trade your depleted battery for a fully charged one at any Zeto station, anytime."
        heroImage={adImg}
        heroImageAlt="Zeto battery swapping station"
        imagePosition="center"           // desktop stays exactly as it is now
        mobileImagePosition="60% center"
      />
      <ZetoBatterySwapStation/>
      <Swapstation/>
      <SwappableBattery/>
      <SwapStationJourney/>
      <SwapStationFeatures/>
      <GetInTouch pageType="contact" />
      <Footer />
    </div>
  );
}

export default Battery;