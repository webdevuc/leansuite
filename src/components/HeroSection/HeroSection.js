import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";
import img from "../../assets/homeminimg.jpg";
import { AiOutlineInstagram, AiFillStar } from "react-icons/ai";
import {
  BsFacebook,
  BsLinkedin,
  BsYoutube,
  BsTwitter,
  BsTrophyFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-color">
      <Container>
        <Row className="d-flex justify-content-center ">
          <Col md={6}>
            <div className="main-div pt-5">
              <p className="sub-text">
                ACCELERATE YOUR CONTINUOUS IMPROVEMENT PROGRAM​
              </p>
              <p className="title-hero">
                Digital Solution for Lean Manufacturing
              </p>
              <p className="sub-text-content">
                Making execution of your lean manufacturing processes effortless
                by providing tools customized to your business needs
              </p>
              <div className="free-demo">
                <Link to="/continuous-improvement">
                  <button className="sche-free-btn">SCHEDULE FREE DEMO</button>
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div className="d-flex justify-content-center align-items-center pt-3">
              <img src={img} alt="Lean Manufacturing" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <div className="pt-5">
        <Row className="icons pt-5">
          <Col className="hero-icon" xs={6} md={2}>
            <div className="hero">
              <BsTrophyFill color="#FFC000" size={20} />
            </div>
            <p className="hero-text-title">FOUNDERS BETA 2022</p>
            <p className="hero-text">2022 Awarded</p>
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
    </div>
  );
};

export default HeroSection;
