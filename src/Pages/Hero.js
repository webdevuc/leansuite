import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";
import img from "../assets/Images/continuous-improv-hero.webp";
import { AiOutlineInstagram, AiFillStar } from "react-icons/ai";
import {
  BsFacebook,
  BsLinkedin,
  BsYoutube,
  BsTwitter,
  BsTrophyFill,
} from "react-icons/bs";

const Hero = () => {
  return (
    <>
    <div className="our-hero"></div>
    <div className="bg-color">
      <Container>
        {/* <Row className="d-flex justify-content-center ">
      <Col md={6}>
        <div className="main-div">
          <p className="sub-text">
            CONTINUOUS IMPROVEMENT SYSTEM FOR OPERATIONS
          </p>
          <p className="title-hero">
            Streamline your manufacturing business processes
          </p>
          <p className="sub-text-content">
            Discover new opportunities to simplify, standardize, and spread
            your best practices
          </p>
          <button className="sche-btn">get started</button>
        </div>
      </Col>
      <Col md={6}>
        <div className="d-flex justify-content-center align-items-center">
          <img src={img} alt="Lean Manufacturing" className="img-fluid" />
        </div>
      </Col>
    </Row> */}

        <Row className="hero-div">
          <Col>
            <div className="main-div pt-5">
              <p className="sub-text">
                CONTINUOUS IMPROVEMENT SYSTEM FOR OPERATIONS
              </p>
              <p className="title-hero">
                Streamline your manufacturing business processes
              </p>
              <p className="sub-text-content-contin">
                Discover new opportunities to simplify, standardize, and spread
                your best practices
              </p>
              <div className="free-demo">
                <button className="sche-btn-cont">GET STARTED</button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-center align-items-center pt-3">
              <img src={img} alt="Lean Manufacturing" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <div className="pt-5">
          <Row className="icons pt-5">
            <Col className="hero-icon" xs={6} md={2}>
              <div>
                <div className="hero">
                  <BsTrophyFill color="#FFC000" size={20} />
                </div>
                <div>
                  <p className="hero-text-title">FOUNDERS BETA 2022</p>
                  <p className="hero-text">2022 Awarded</p>
                </div>
              </div>
            </Col>
            <Col className="hero-icon" xs={6} md={2}>
              <div className="hero">
                <AiFillStar color="#FFC000" size={20} />
                <AiFillStar color="#FFC000" size={20} />
                <AiFillStar color="#FFC000" size={20} />
              </div>
              <p className="hero-text-title">CAPTERRA</p>
              <p className="hero-text">5.0 Rating</p>
            </Col>

            <Col className="hero-icon" xs={6} md={2}>
              <div className="hero">
                <AiFillStar color="#FFC000" size={20} />
                <AiFillStar color="#FFC000" size={20} />
                <AiFillStar color="#FFC000" size={20} />
              </div>
              <p className="hero-text-title">GET APP</p>
              <p className="hero-text">5.0 Rating</p>
            </Col>

            <Col className="hero-icon" xs={6} md={2}>
              <div className="hero">
                <AiFillStar color="#FFC000" size={20} />
                <AiFillStar color="#FFC000" size={20} />
                <AiFillStar color="#FFC000" size={20} />
              </div>
              <p className="hero-text-title">SOFTWARE ADVICE</p>
              <p className="hero-text">5.0 Rating</p>
            </Col>

            <Col className="hero-icon" xs={6} md={2}>
              <div className="hero">
                <BsTrophyFill color="#FFC000" size={20} />
              </div>
              <p className="hero-text-title">FOUNDERS BETA 2023</p>
              <p className="hero-text">5.0 Rating</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div></>
  );
};

export default Hero;
