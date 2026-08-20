// Advertising.tsx

import HeroCommon from "../components/HeroCommon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/Getintouch";
import adImg from "../assets/ChatGPT Image Aug 17, 2026, 12_57_25 PM.png";
import SwapStationJourney from "../components/Swapstationjourney";
import ZetoBatterySwapStation from "../components/Zetobatteryswapstation";
import SwapStationFeatures from "../components/Swapstationfeatures";

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
      />
      <ZetoBatterySwapStation/>
      <SwapStationJourney/>
      <SwapStationFeatures/>
      <GetInTouch pageType="contact" />
      <Footer />
    </div>
  );
}

export default Battery;