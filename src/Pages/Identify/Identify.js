import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Identify.css";
import identify from "../../assets/Images/identify.webp";

function Identify() {
  return (
    <div className="main-section">
      <Container>
        <Row className="d-flex center-sec">
          <Col md={4}>
            <h6 className="section-title">CONTINUOUSLY IMPROVE</h6>
            <h2 className="section-head">
              Identify improvement opportunities and take action
            </h2>
            <p className="section-para">
              The Continuous Improvement System empowers your workforce to
              improve how they work and identify new opportunities for
              improvement, big or small, to reduce waste and increase efficiency
              and productivity on the shop floor.
            </p>
            <p className="section-para">
              Together, plan how to implement the change once improvement areas
              have been identified. Then assign roles and permissions to team
              members and encourage collaboration so that they can effectively
              take action and implement the new changes into your company.
            </p>
          </Col>
          <Col md={5}>
            <div>
              <img src={identify} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Identify;
