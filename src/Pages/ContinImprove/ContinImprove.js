import React from "react";
import p1 from "../../assets/partner1.jpg";
import p2 from "../../assets/apma-logo-2-e1679078557869.jpg";
import p3 from "../../assets/national-association-of-manufacturers-nam-logo.jpg";
import p4 from "../../assets/waterloo-accelerator-centre.jpg";
import "./ContinImprove.css";
import { Col, Row } from "react-bootstrap";

const ContinImprove = () => {
  return (
    <div className="container my-5">
      <Row>
      <h1 className="title-cont-imporve">
        Continuously improve and increase your bottom line
      </h1>
      <h1 className="text-cont-imporve">
        Discover how you can automate your continuous improvement program to
        streamline your manufacturing business processes and increase your
        company’s overall manufacturing efficiency
      </h1>

      <div className="text-center pt-5">
        <button className="contin_Get_started">GET STARTED</button>
      </div>
      </Row>

      <Row className="row text-center">
        <Col lg={4} sm={4} className="contin_img">
          <img className="img-partners" src={p2} alt="Tableau" />
        </Col>
        <Col lg={4} sm={4} className="contin_img">
          <img className="img-partners" src={p3} alt="Oracle" />
        </Col>

        <Col lg={4} sm={4} className="contin_img">
          <img className="img-partners" src={p4} alt="Google Cloud" />
        </Col>
      </Row>
    </div>
  );
};

export default ContinImprove;
