// src/pages/Home.tsx
import Header from "../components/Header";
import Partners from "../components/Partners";
import WhyChooseZeto from "../components/Whychoosezeto";
import ProcessSteps from "../components/Processsteps";
import JoinCommunity from "../components/Joincommunity";
import GetInTouch from "../components/Getintouch";
import Footer from "../components/Footer";
import HeroCommon from "../components/HeroCommon";
import img from "../assets/ChatGPT Image Aug 22, 2026, 03_41_37 PM.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header variant="dark"/>
      <HeroCommon
          title="Cutting Emission"
          highlight="Creating Jobs"
          description="ZETO is building a sustainable delivery ecosystem that reduces pollution and empowers communities with meaningful job opportunities."
          heroImage={img} 
          heroImageAlt="Zeto franchise owner running their site"
        />
      <WhyChooseZeto />
      <ProcessSteps />
      <JoinCommunity />
      <Partners />
      <GetInTouch pageType="home" />
      <Footer />
    </div>
  );
}