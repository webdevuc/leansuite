import React from "react";
import Charts from "./Pages/Charts/Charts";
import Customer from "./Pages/Customer/Customer";

import Driving from "./Pages/Driving/Driving";
import Improve from "./Pages/Improve/Improve";
import Identify from "./Pages/Identify/Identify";
import CardIdentify from "./Pages/Identify/CardIdentify";

import Report from "./Pages/Report/Report";

import Create from "./Pages/Create";
import Hero from "./Pages/Hero";
import Footer from "./components/Footer/Footer";
import NavbarComponent from "./components/Navbar/Navbar";
import { Container } from "react-bootstrap";

const Continous_Improment = () => {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <Create />
      <Container>
        <Customer />
        <Driving />
      </Container>
      <Improve />
      <Identify />
      <CardIdentify />
      <Report />
      <Charts />
      <Footer />
    </>
  );
};

export default Continous_Improment;
