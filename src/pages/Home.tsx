// src/pages/Home.tsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import WhyChooseZeto from "../components/Whychoosezeto";
import ProcessSteps from "../components/Processsteps";
import JoinCommunity from "../components/Joincommunity";
import GetInTouch from "../components/Getintouch";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header variant="light" />
      <Hero />
      <WhyChooseZeto />
      <ProcessSteps />
      <JoinCommunity />
      <Partners />
      <GetInTouch pageType="home" />
      <Footer />
    </div>
  );
}