// Fofo.tsx — no highlights row, no CTA, just title/description/image
import HeroCommon from "../components/HeroCommon";
import Header from "../components/Header"
import Footer from "../components/Footer";
import GetInTouch from "../components/Getintouch";
import FofoControlPanel from "../components/Fofocontrolpanel";
import FofoBenefitCards from "../components/Fofobenefitcards";
import Zetohubarchitecture from "../components/Zetohubarchitecture";
import { Head } from "vite-react-ssg";
import { SITE_URL } from "../constants/site";
import Cityroute from "../components/Cityroute";

const banner = "/hero-banner-fofo.jpeg"


export function Fofo() {
  return (
    <>
    <Head>
        <title>ZETO FOFO Franchise Model | Run a Zeto EV Rental Business In Your City</title>
        <meta name="description" content="Own and operate your own Zeto EV Rental Business with the FOFO (Franchise Owned, Franchise Operated) model — full control, backed by Zeto's network." />
        <link rel="canonical" href={`${SITE_URL}/fofo`} />
        <meta property="og:title" content="FOFO Franchise Model | Run a Zeto EV Rental Business" />
        <meta property="og:description" content="Own and operate a Zeto EV Rental Business under the FOFO franchise model." />
        <meta property="og:image" content={`${SITE_URL}${banner}`} />
        <meta property="og:url" content={`${SITE_URL}/fofo`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <div>
      <Header variant="dark" />
      <HeroCommon
        title="Your City,Your Business "
        highlight=" Zeto Will Help"
        description="Partner with ZETO through the FOFO model — you own and operate the business, Zeto equips you with playbook, training, and brand behind it."
        heroImage={banner}
        heroImageAlt="Zeto franchise owner running their site"
        imagePosition="center"           // desktop stays exactly as it is now
        mobileImagePosition="50% center"
      />
      <FofoBenefitCards />
  
      <FofoControlPanel />
      <Zetohubarchitecture />
      <Cityroute />
      <GetInTouch pageType="fofo" />
      <Footer />
    </div>
    </>
  );
}

export default Fofo;