

import React from "react";
import NavbarComponent from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from "./components/HeroSection/HeroSection";
import VideoSection from "./components/VideoSection/VideoSection";
import WeDo from "./components/WeDo.js/WeDo";
import OurSolution from "./components/OurSolution/OurSolution";
import TheLeanSuite from "./components/TheLeanSuite/TheLeanSuite";
import Sponsers from "./components/Sponsers/Sponsers";
import Footer from "./components/Footer/Footer";
function  Home() {
  return (
    <div>
      <NavbarComponent/>
      <HeroSection/>
      <VideoSection/>
      <WeDo/>
      <OurSolution/>
      <TheLeanSuite/>
      <Sponsers/>
      <Footer/>
    </div>
  );
}

export default Home;
