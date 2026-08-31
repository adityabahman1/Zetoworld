// Advertising.tsx — no highlights row, no CTA, just title/description/image
import HeroCommon from "../components/HeroCommon";
import Header from "../components/Header"
import Footer from "../components/Footer";
import GetInTouch from "../components/Getintouch";
import WhyChooseZetoFoco from "../components/Whychoosezetofoco";
import Focoroiinvestment from "../components/Focoroiinvestment";
import { Head } from "vite-react-ssg";
import { SITE_URL } from "../constants/site";

const banner = "/hero-banner-foco.jpeg"


export function Advertising() {
  return (
    <>
    <Head>
        <title>ZETO FOCO Franchise Model | Run a Zeto EV Rental Business In Your City</title>
        <meta name="description" content="Own and operate your own Zeto EV Rental Business with the FOCO (Franchise Owned, Company Operated) model —  Zeto handles operations while you own the asset." />
        <link rel="canonical" href={`${SITE_URL}/foco`} />
        <meta property="og:title" content="FOCO Franchise Model | Run a Zeto EV Rental Business" />
        <meta property="og:description" content="Own and operate a Zeto EV Rental Business under the FOCO model — company-operated, franchise-owned." />
        <meta property="og:image" content={`${SITE_URL}${banner}`} />
        <meta property="og:url" content={`${SITE_URL}/fofo`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div>
    <Header variant="dark"/>
    <HeroCommon
      title="EV Franchise Business in Your City"
      highlight="Earn 45% ROI"
      description="Partner with ZETO through the FOCO model — you bring the capital and the site, we bring the staff, systems, and day-to-day running."
      heroImage={banner}
      heroImageAlt="Branded Zeto scooter fleet"
      imagePosition="center"           // desktop stays exactly as it is now
      mobileImagePosition="48% center"
    />
    <WhyChooseZetoFoco/>
    <Focoroiinvestment/>
    <GetInTouch pageType="foco"/>
    <Footer/>
    </div>
    </>
  );
}

export default Advertising;