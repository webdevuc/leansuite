import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import identify from "../../assets/Images/identify1.webp";
import "./CardIdentity.css";

function CardIdentify() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769); // Adjust the breakpoint as needed
    };

    handleResize(); // Call it initially to set the correct screen size on mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="identify-sec">
      <Container>
        {isMobile ? (
          // On mobile screens, display the image section second
          <Row className=" secound ">
            <Col  sm={12}>
              <h1 className="identify-head">
                Measure your impact and share best practices
              </h1>
              <p className="identify-para">
                Easily track and get real-time reports of the impact that the
                improvements have on your company. Get insights into what everyone
                is doing — see who is submitting improvements, pinpoint which
                managers are overloaded, and identify individuals who may need
                additional support and coaching.
              </p>
              <p className="identify-para">
                Streamline your manufacturing business processes by sharing and
                communicating lessons learned and best practices that are easy to
                follow and understand. Help each team member learn, grow, and
                contribute to your company’s overall goal with the Continuous
                Improvement System.
              </p>
            </Col>
            <Col  sm={12} className="pb-5">
              <div className="text-center">
                <img className="id_img" src={identify} alt="Identification" />
              </div>
            </Col>
          </Row>
        ) : (
          // On larger screens, display the image section first (as in the original code)
          <Row className="secound py-5">
            <Col>
              <div>
                <img className="id_img" src={identify} alt="Identification" />
              </div>
            </Col>
            <Col >
              <h1 className="identify-head">
                Measure your impact and share best practices
              </h1>
              <p className="identify-para">
                Easily track and get real-time reports of the impact that the
                improvements have on your company. Get insights into what everyone
                is doing — see who is submitting improvements, pinpoint which
                managers are overloaded, and identify individuals who may need
                additional support and coaching.
              </p>
              <p className="identify-para">
                Streamline your manufacturing business processes by sharing and
                communicating lessons learned and best practices that are easy to
                follow and understand. Help each team member learn, grow, and
                contribute to your company’s overall goal with the Continuous
                Improvement System.
              </p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default CardIdentify;
