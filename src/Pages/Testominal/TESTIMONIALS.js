import React from "react";
import "./TESTIMONIALS.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import t1 from "../../assets/testo1.jpg";
import t2 from "../../assets/testo2.jpg";
import t3 from "../../assets/testo3.jpg";

const cardData = [
  {
    title: "Suggestion Platform",
    imageSrc: t1,
    subtitle: "Mobile App",
    description:
      "Love the smplified system. Easy for users to login, visibility of suggestion status & feedback of points awarded all in real time!!.",
    link: "#",
    name:"Micah k.",
    role:'Director'
  },
  {
    title: "Suggestion Platform",
    imageSrc: t2,
    subtitle: "Multi Facility Management",
    description:
      "This software is making the ability for our employees to share their ideas with ease. We are also able to recognize and reward them for their ideas.",
    link: "#",
    name:"Karen M.",
    role:'Whirlpool Manager'
  },
  {
    title: "Suggestion Platform",
    imageSrc: t3,
    subtitle: "Multilingual",
    description:
      "This is a seamless platform with a great in-depth reporting and analytics that has been incredibly beneficial to the team to bring new ideas forward. The support team behind software is also top-notch so makes a lot easier to get started.",
    link: "#",
    name:"Eric R",
    role:'Product manager'
  },
];

const TESTIMONIALS = () => {
  return (
    <>
    <div className="testo-back">
      <Container>
        <div className="">
          <p className="testo-title">TESTIMONIALS</p>
          <p className="testo-sub-title">
            Our Customer <span style={{ color: "#0052cc" }}> Says! </span>
          </p>

          <Row>
            {cardData.map((card, index) => (
              <Col key={index} md={4}>
                <div style={{ paddingBottom: "10px" }}>
                  <Card className="card-product-testo mt-5">
                    <Card.Body className="mt-3">
                      <Card.Title className="testo-img">
                        <img
                          src={card.imageSrc}
                          alt={card.title}
                          className="logo-icon-img"
                        />
                      </Card.Title>
                      <Card.Subtitle className="my-4 text-muted">
                        {card.subtitle}
                      </Card.Subtitle>
                      <Card.Text className="description">
                        {card.description}
                      </Card.Text>

                      <Card.Text className="card-text-bottom">
                        {card.name}<br/>
                        {card.role}
                      </Card.Text>
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

export default TESTIMONIALS;
