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
    <div className="bg-color">
      <Container>
        <Row className="d-flex justify-content-center ">
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
              {/* <button className="sche-btn mt-5">Schedule Free demo</button> */}
              <button className="sche-btn">get started</button>
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center align-items-center">
              <img src={img} alt="Lean Manufacturing" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <div className="icons mt-5">
          <div className="hero-icon">
            <div className="hero">
              <BsTrophyFill color="#FFC000" size={20} />
            </div>
            <p className="hero-text-title">FOUNDERS BETA 2022</p>
            <p className="hero-text">2022 Awarded</p>
          </div>
          <div className="hero-icon">
            <div className="hero">
              <AiFillStar color="#FFC000" size={20} />
              <AiFillStar color="#FFC000" size={20} />
              <AiFillStar color="#FFC000" size={20} />
            </div>
            <p className="hero-text-title">CAPTERRA</p>
            <p className="hero-text">5.0 Rating</p>
          </div>

          <div className="hero-icon">
            <div className="hero">
              <AiFillStar color="#FFC000" size={20} />
              <AiFillStar color="#FFC000" size={20} />
              <AiFillStar color="#FFC000" size={20} />
            </div>
            <p className="hero-text-title">GET APP</p>
            <p className="hero-text">5.0 Rating</p>
          </div>

          <div className="hero-icon">
            <div className="hero">
              <AiFillStar color="#FFC000" size={20} />
              <AiFillStar color="#FFC000" size={20} />
              <AiFillStar color="#FFC000" size={20} />
            </div>
            <p className="hero-text-title">SOFTWARE ADVICE</p>
            <p className="hero-text">5.0 Rating</p>
          </div>

          <div className="hero-icon">
            <div className="hero">
              <BsTrophyFill color="#FFC000" size={20} />
            </div>
            <p className="hero-text-title">FOUNDERS BETA 2023</p>
            <p className="hero-text">5.0 Rating</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
