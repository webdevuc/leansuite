import React from "react";
import driving from "../../assets/Images/Driving.webp";
import { Col, Row } from "react-bootstrap";
import { BsQuestionCircleFill } from "react-icons/bs";

import "./Driving.css";

const cardsData = [
  {
    id: 1,
    icon: <BsQuestionCircleFill size={32} />,
    text: "Finding it hard to effectively document your projects?",
  },
  {
    id: 2,
    icon: <BsQuestionCircleFill size={32} />,
    text: "Unsure of how to share your projects and best practices across your organization??",
  },
  {
    id: 3,
    icon: <BsQuestionCircleFill size={32} />,
    text: "Struggling to gain thorough insight on your projects?",
  },
];

function Driving() {
  return (
    <div className="main-container my-5">
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={5}>
          <img className="dri-img" src={driving} alt="Driving continuous improvement" />
        </Col>
        <Col md={5}>
          <h1 className="heading-driving">
            Driving continuous improvement can be painful
          </h1>
          <div>
            {cardsData.map((card) => (
              <div key={card.id} className="card my-2">
                <div className="card-con">
                  <p>{card.icon}</p>
                  <p className="text">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="driv-btn-center pt-3">
          <button className="btn-free">SCHEDULE FREE DEMO</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Driving;
