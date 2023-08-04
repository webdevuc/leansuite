import React from "react";
import "./Improve.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { GrAppleAppStore } from "react-icons/gr";
import {PiMapPinLineFill} from 'react-icons/pi'
import {TbWorld} from 'react-icons/tb'
import { MdCampaign, MdOutlineAttachFile } from "react-icons/md";
import {HiDocumentText} from "react-icons/hi"
import { BsCircleHalf, BsPersonGear } from "react-icons/bs";

import s1 from "../../assets/svg/Save-time-and-Money.svg"
import s2 from "../../assets/svg/Increase-Productivity.svg"
import s3 from "../../assets/svg/Capture-data-in-real-time.png"

const cardData = [
  {
    icons: [
        <GrAppleAppStore color="#fff" size={30} />,
    
      ],
    title: "Suggestion Platform",
    imageSrc: s1,
    subtitle: "Save time and money",
    description:
      "Control and manage your continuous improvement efforts under one central hub from anywhere, at any time",
    link: "#",
  },
  {
    icons: [
        <PiMapPinLineFill color="#fff" size={30} />,
      ],    
    title: "Suggestion Platform",
    imageSrc: s2,
    subtitle: "Increase productivity",
    description:
      "Empower and involve your frontline employees to create projects to continuously improve all aspects of your operations",
    link: "#",
  },
  {
    icons: [
        <TbWorld color="#fff" size={30} />,
      ], 
    title: "Capture data in real time",
    imageSrc: s3,
    subtitle: "Capture data in real time",
    description:
      "Prioritize projects, capture key operational data, and analyze reports in real-time to improve your operational processes",
    link: "#",
  },
];

const Improve = () => {
  return (
    <>
    <div className="our-improve"></div>
    <div className="testo-back-improve pb-5">
      <Container>
        <div className="container">
          {/* <p className="choose-us">why choose us</p> */}
          <p className="pro-fea-imp py-5">Improve your overall bottom line</p>

          <Row>
            {cardData.map((card, index) => (
              <Col key={index} md={4}>
                <div style={{paddingBottom:'10px'}}>
                <Card className="card-product-improv">
                  <Card.Body className="mt-3">
                    
                    <img src={card.imageSrc} alt={card.title} className="card-image" />
                    <Card.Subtitle className="my-4 text-muted">
                      {card.subtitle}
                    </Card.Subtitle>
                    <Card.Text className="description">{card.description}</Card.Text>
                  </Card.Body>
                </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      </div>  
    </>
  );
};

export default Improve;
