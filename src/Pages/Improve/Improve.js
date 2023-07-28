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

const cardData = [
  {
    icons: [
        <GrAppleAppStore color="#fff" size={30} />,
    
      ],
    title: "Suggestion Platform",
    imageSrc: "https://theleansuite.com/wp-content/uploads/2022/10/img2.svg",
    subtitle: "Mobile App",
    description:
      "TheLeanSuite's native IOS and Android mobile apps make it easy to apply Lean Methodology.",
    link: "#",
  },
  {
    icons: [
        <PiMapPinLineFill color="#fff" size={30} />,
      ],    
    title: "Suggestion Platform",
    imageSrc: "https://theleansuite.com/wp-content/uploads/2022/10/img2.svg",
    subtitle: "Multi Facility Management",
    description:
      "Share information seamlessly across the entire company and get deeper insights into the complete company-wide operations.",
    link: "#",
  },
  {
    icons: [
        <TbWorld color="#fff" size={30} />,
      ], 
    title: "Suggestion Platform",
    imageSrc: "https://theleansuite.com/wp-content/uploads/2022/10/img2.svg",
    subtitle: "Multilingual",
    description:
      "Expand globally worry-free with TheLeanSuite's multi language support & let the workforce chose the language of choice they are comfortable in.",
    link: "#",
  },
];

const Improve = () => {
  return (
    <>
      <Container>
        <div className="container">
          {/* <p className="choose-us">why choose us</p> */}
          <p className="pro-fea-imp">Improve your overall bottom line</p>

          <Row>
            {cardData.map((card, index) => (
              <Col key={index} md={4}>
                <div style={{paddingBottom:'10px'}}>
                <Card className="card-product-improv">
                  <Card.Body className="mt-3">
                    <Card.Title>
                    <div className="logo-icon-img">
                        {card.icons.map((icon, i) => (
                          <div
                            key={i}
                            className="icon-container"
                          >
                            {icon}
                          </div>
                        ))}
                      </div>
                    </Card.Title>
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
    </>
  );
};

export default Improve;
