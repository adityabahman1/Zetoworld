// Advertising.tsx — no highlights row, no CTA, just title/description/image
import HeroCommon from "../components/HeroCommon";
import Header from "../components/Header"
import AdShowcase from "../components/Adshowcase";
import Footer from "../components/Footer";
import GetInTouch from "../components/Getintouch";
import ZetoMovingBillboardsSection from "../components/ZetoMovingBillboardsSection";
import WhyScooterAdvertisingWins from "../components/WhyScooterAdvertisingWins";
import Brandingpricing from "../components/Brandingpricing";
import { Head } from "vite-react-ssg";
import { SITE_URL } from "../constants/site";

const banner = "/hero-banner-advertisement.png"

export function Advertising() {
  return (
    <>
    <Head>
        <title>Advertise on Zeto Scooters | Brand Visibility Across Punjab</title>
        <meta name="description" content="Reach riders across Chandigarh and Punjab with branded advertising on Zeto's electric scooter fleet — high visibility, city-wide coverage." />
        <link rel="canonical" href={`${SITE_URL}/advertising`} />
        <meta property="og:title" content="Advertise on Zeto Scooters | Brand Visibility Across Punjab" />
        <meta property="og:description" content="Put your brand on Zeto's growing electric scooter fleet across Punjab." />
        <meta property="og:image" content={`${SITE_URL}${banner}`} />
        <meta property="og:url" content={`${SITE_URL}/advertising`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div>
    <Header variant="dark"/>
    <HeroCommon
      title="Turn Every Ride  "
      highlight="Into Brand Reach"
      description="Connect with customers across cities through high-visibility advertising on Zeto's fleet."
      heroImage={banner}
      heroImageAlt="Branded Zeto scooter fleet"
         imagePosition="center"           // desktop stays exactly as it is now
        mobileImagePosition="75% center"
    />
    <AdShowcase/>
    <ZetoMovingBillboardsSection/>
    <WhyScooterAdvertisingWins/>
    <Brandingpricing/>
    <GetInTouch pageType="advertising"/>
    <Footer/>
    </div>
    </>
  );
}

export default Advertising;