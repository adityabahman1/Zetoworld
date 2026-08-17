
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import WhyChooseZeto from "./components/WhyChooseZeto";
import ProcessSteps from "./components/ProcessSteps";
import JoinCommunity from "./components/JoinCommunity";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <WhyChooseZeto />
      <ProcessSteps />
      <JoinCommunity />
      <Partners />
      <GetInTouch />
      <Footer />
    </div>
  );
}