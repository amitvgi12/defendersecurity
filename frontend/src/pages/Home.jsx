import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BusinessLines from "../components/BusinessLines";
import StatsSection from "../components/StatsSection";
import NewsSection from "../components/NewsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BusinessLines />
      <StatsSection />
      <NewsSection />
      <Footer />
    </main>
  );
};

export default Home;