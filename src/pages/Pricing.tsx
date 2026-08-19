// Advertising.tsx

import HeroCommon from "../components/HeroCommon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetInTouch from "../components/Getintouch";
import adImg from "../assets/ChatGPT Image Aug 17, 2026, 12_57_25 PM.png";

export function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <Header variant="dark" />

      {/* =========================
          HERO SECTION
      ========================== */}
      <HeroCommon
        title="Grow with Zeto"
        highlight="Let's Connect"
        description="Ride with us, build with us, or put your brand on the move. Explore the different ways you can partner with Zeto."
        heroImage={adImg}
        heroImageAlt="Zeto partnership and advertising"
      />
    
      <GetInTouch pageType="contact" />

      <Footer />
    </div>
  );
}

export default Pricing;