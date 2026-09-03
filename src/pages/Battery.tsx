// Advertising.tsx

import HeroCommon from "../components/HeroCommon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/Getintouch";
import SwapStationJourney from "../components/Swapstationjourney";
import ZetoBatterySwapStation from "../components/Zetobatteryswapstation";
import SwapStationFeatures from "../components/Swapstationfeatures";
import SwappableBattery from "../components/SwappableBattery";
import Swapstation from "../components/Swapstation";
import { Head } from "vite-react-ssg";
import { SITE_URL } from "../constants/site";

const banner = "/hero-banner-battery.png"


export function Battery() {
  return (
    <>
    <Head>
        <title>Battery Swap Stations in Punjab | Zeto</title>
        <meta name="description" content="Skip the charging wait. Find Zeto's battery-swap stations live now in Chandigarh, launching in Mohali, Zirakpur and Panchkula, and coming soon to Ludhiana, Jalandhar and Amritsar." />
        <link rel="canonical" href={`${SITE_URL}/battery`} />
        <meta property="og:title" content="Battery Swap Stations in Punjab | Zeto" />
        <meta property="og:description" content="See Zeto's full battery-swap rollout map across Punjab's cities." />
        <meta property="og:image" content={`${SITE_URL}${banner}`} />
        <meta property="og:url" content={`${SITE_URL}/battery`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div className="min-h-screen bg-white">
      <Header variant="dark" />
      <HeroCommon
        title="Never Wait to Charge Again"
        highlight="Swap in 1 Minutes"
        description="Trade your depleted battery for a fully charged one at any Zeto station, anytime."
        heroImage={banner}
        heroImageAlt="Zeto battery swapping station"
        imagePosition="center"           // desktop stays exactly as it is now
        mobileImagePosition="60% center"
      />
      <ZetoBatterySwapStation/>
      <Swapstation/>
      <SwappableBattery/>
      <SwapStationJourney/>
      <SwapStationFeatures/>
      <GetInTouch pageType="battery" />
      <Footer />
    </div>
    </>
  );
}

export default Battery;