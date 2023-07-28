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
      "TheLeanSuite's native IOS and Android mobile apps make it easy to apply Lean Methodology.",
    link: "#",
  },
  {
    title: "Suggestion Platform",
    imageSrc: t2,
    subtitle: "Multi Facility Management",
    description:
      "Share information seamlessly across the entire company and get deeper insights into the complete company-wide operations.",
    link: "#",
  },
  {
    title: "Suggestion Platform",
    imageSrc: t3,
    subtitle: "Multilingual",
    description:
      "Expand globally worry-free with TheLeanSuite's multi language support & let the workforce chose the language of choice they are comfortable in.",
    link: "#",
  },
];

const TESTIMONIALS = () => {
  return (
    <>
      <Container>
        <div className="container my-5">
          <p className="testo-title">TESTIMONIALS</p>
          <p className="testo-sub-title">
            Our Customer <span style={{ color: "#0052cc" }}> Says! </span>
          </p>

          <Row>
            {cardData.map((card, index) => (
              <Col key={index} md={4}>
                <div style={{ paddingBottom: "10px" }}>
                  <Card className="card-product-improv mt-5">
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

export default TESTIMONIALS;
