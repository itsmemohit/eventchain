import React from "react";
import "./App.css";
import Navbar from "./components/header/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/heroSection";
import Feature from "./components/featureSection";
import OtherFeatures from "./components/otherFeatures";
import CommunityBanner from "./components/bannerSection";
import Pricing from "./components/pricingSection.tsx";
import Footer from "./components/footerSection.tsx";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
      <HeroSection />
      <Feature />
      <OtherFeatures />
      <Pricing />
      <CommunityBanner />
      <Footer />
    </div>
  );
}

export default App;
