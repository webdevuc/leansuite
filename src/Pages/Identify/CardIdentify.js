import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import identify from "../../assets/Images/identify1.webp";
import "./CardIdentity.css";

function CardIdentify() {
  return (
    <div className="identify-sec">
      <Container>
        <Row className="d-flex secound">
          <Col md={5}>
            <div>
              <img src={identify} />
            </div>
          </Col>
          <Col md={5}>
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
      </Container>
    </div>
  );
}

export default CardIdentify;
