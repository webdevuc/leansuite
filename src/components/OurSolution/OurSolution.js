import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import img from "../../assets/Group.jpg";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "./OurSolution.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { useMediaQuery } from "react-responsive";

const OurSolution = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const cards = [
    {
      title: "Quality Management 1",
      content:
        "Prioritize quality defects using TheLeanSuite’s quality matrix designed to manage internal defects and external customer complaints.",
      link: "#",
      imgSrc:
        "https://theleansuite.com/wp-content/uploads/2023/03/suggestionsVector.svg",
      backgroundColor: "#090A43",
      textColor: "#fff",
    },
    {
      title: "Quality Management 2",
      content:
        "Prioritize quality defects using TheLeanSuite’s quality matrix designed to manage internal defects and external customer complaints.",
      link: "#",
      imgSrc:
        "https://theleansuite.com/wp-content/uploads/2023/03/suggestionsVector.svg",
      backgroundColor: "#fff",
      textColor: "#000",
    },
    {
        title: "Quality Management 3",
        content:
          "Prioritize quality defects using TheLeanSuite’s quality matrix designed to manage internal defects and external customer complaints.",
        link: "#",
        imgSrc:
          "https://theleansuite.com/wp-content/uploads/2023/03/suggestionsVector.svg",
        backgroundColor: "#090A43",
        textColor: "#fff",
      },
      {
        title: "Quality Management 4",
        content:
          "Prioritize quality defects using TheLeanSuite’s quality matrix designed to manage internal defects and external customer complaints.",
        link: "#",
        imgSrc:
          "https://theleansuite.com/wp-content/uploads/2023/03/suggestionsVector.svg",
        backgroundColor: "#fff",
        textColor: "#000",
      },
    // Add more cards to the array as needed
  ];

  return (
    <section>
      <div className="mt-5">
        <div className="d-flex justify-content-center align-items-center">
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col md={6}>
                <div className="">
                  <p className="sol">Lean Manufacturing Suite</p>
                  <h2 className="title-sol">
                    Our <span style={{ color: "#0052cc" }}>Solution</span>
                  </h2>
                  <p className="sub-text-sol">
                    Your key to Operational Excellence. Solutions designed for
                    your lean manufacturing workflows.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex justify-content-center align-items-center">
                  {isDesktopOrLaptop ? (
                    <Carousel
                      interval={null}
                      prevIcon={<MdArrowBackIosNew color="#0052cc" size={25} />}
                      nextIcon={<MdArrowForwardIos color="#0052cc" size={25} />}
                    >
                      {cards.map((card, index) => (
                        <Carousel.Item key={index}>
                          <Card
                            className="our-card-sol"
                            style={{
                              backgroundColor: card.backgroundColor,
                              color: card.textColor,
                            }}
                          >
                            <Card.Body>
                              <Card.Title>
                                <img
                                  style={{ backgroundColor: "#fff", padding: 10 }}
                                  src={card.imgSrc}
                                  alt={card.title}
                                />
                              </Card.Title>
                              <Card.Text
                                className="card-tilte-sol py-3"
                                style={{ color: card.textColor }}
                              >
                                {card.title}
                              </Card.Text>
                              <Card.Text
                                className="card-tilte-content"
                                style={{ color: card.textColor }}
                              >
                                {card.content}
                              </Card.Text>
                              <Card.Link
                                href={card.link}
                                style={{ color: card.textColor }}
                              >
                                Read More
                              </Card.Link>
                            </Card.Body>
                          </Card>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  ) : (
                    <Carousel
                      interval={null}
                      prevIcon={<MdArrowBackIosNew color="#0052cc" size={25} />}
                      nextIcon={<MdArrowForwardIos color="#0052cc" size={25} />}
                    >
                      {cards.map((card, index) => (
                        <Carousel.Item key={index}>
                          <Card
                            className="our-card-sol"
                            style={{
                              backgroundColor: card.backgroundColor,
                              color: card.textColor,
                            }}
                          >
                            <Card.Body>
                              <Card.Title>
                                <img
                                  style={{ backgroundColor: "#fff", padding: 10 }}
                                  src={card.imgSrc}
                                  alt={card.title}
                                />
                              </Card.Title>
                              <Card.Text
                                className="card-tilte-sol py-3"
                                style={{ color: card.textColor }}
                              >
                                {card.title}
                              </Card.Text>
                              <Card.Text
                                className="card-tilte-content"
                                style={{ color: card.textColor }}
                              >
                                {card.content}
                              </Card.Text>
                              <Card.Link
                                href={card.link}
                                style={{ color: card.textColor }}
                              >
                                Read More
                              </Card.Link>
                            </Card.Body>
                          </Card>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default OurSolution;
