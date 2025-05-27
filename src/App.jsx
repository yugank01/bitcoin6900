import "./App.css";
import BitcoinSection from "./components/BitcoinSection";
import BuySection from "./components/BuySection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Sections from "./components/Section";
import TokenomicsSection from "./components/TokenomicsSection";
import VideoBackground from "./components/VideoBackground";

function App() {
  return (
    <div className="relative z-10 text-white font-sans">
      <VideoBackground />
      <Hero />
      <BuySection />
      <BitcoinSection />
      <Sections />
      <InfoSection />
      <TokenomicsSection />
      <Footer />
    </div>
  );
}

export default App;
