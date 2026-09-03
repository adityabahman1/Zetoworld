// src/pages/Home.tsx
import Header from "../components/Header";
import Partners from "../components/Partners";
import WhyChooseZeto from "../components/Whychoosezeto";
import ProcessSteps from "../components/Processsteps";
import JoinCommunity from "../components/Joincommunity";
import GetInTouch from "../components/Getintouch";
import Footer from "../components/Footer";
import HeroCommon from "../components/HeroCommon";
import { Fuel, Wrench, Infinity as InfinityIcon } from "lucide-react";
import Missiondashboard from "../components/Missiondashboard";
import Cityroute from "../components/Cityroute";
import { Head } from "vite-react-ssg";
import { SITE_URL } from "../constants/site";

const banner = "/hero-banner-home.png"


export default function Home() {
  return (
    <>
    <Head>
        <title>Zeto | Electric Scooter Rentals & Battery Swap Network in Punjab</title>
        <meta name="description" content="Zeto runs an electric scooter fleet and battery-swap network across Chandigarh, Mohali, Zirakpur and Panchkula — expanding to Ludhiana, Jalandhar and Amritsar." />
        <link rel="canonical" href={`${SITE_URL}`} />
        <meta property="og:title" content="Zeto | Electric Scooter Rentals & Battery Swap Network in Punjab" />
        <meta property="og:description" content="500+ electric scooters live in Chandigarh, with battery-swap stations expanding across Punjab's Tricity and major cities." />
        <meta property="og:image" content={`${SITE_URL}${banner}`} />
        <meta property="og:url" content={`${SITE_URL}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div className="min-h-screen bg-white font-sans">
      <Header variant="dark" />
      <HeroCommon
        title="Cutting Emissions"
        highlight="Creating Jobs"
        description=" ZETO is building a cleaner delivery network across Tricity, empowering EV riders and supporting greener urban mobility."
        heroImage={banner}
        heroImageAlt="Zeto rider on an electric scooter"
        imagePosition="center"           // desktop stays exactly as it is now
        mobileImagePosition="85% center" // shifts the mobile crop right, toward the rider
        highlights={[
          { icon: Fuel, label: "Zero Fuel Cost" },
          { icon: Wrench, label: "Zero Maintenance" },
          { icon: InfinityIcon, label: "Unlimited KM's" },
        ]}
      />
      <WhyChooseZeto />
      <ProcessSteps />
      <Missiondashboard />
      <Cityroute />
      <JoinCommunity />
      <Partners />
      <GetInTouch pageType="home" />
      <Footer />
    </div>
    </>
  );
}