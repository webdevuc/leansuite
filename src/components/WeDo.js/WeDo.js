import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import img from "../../assets/Group.jpg";
import "./WeDo.css";

const WeDo = () => {
  return (
    <>
      {/* <div className="we-do"></div> */}
      <div className="container mt-5 ">
        <div className="d-flex justify-content-center align-items-center">
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col md={6}>
                <div className="main-div">
                  <p className="wedo">What we do</p>
                  <p className="title-wedo">
                    Defining the Future of Lean Manufacturing
                  </p>
                  <p className="sub-text-wedo">
                    The LeanSuite is a powerful software which allows Digital
                    Solution for Lean Manufacturing to uncover hidden losses,
                    deploy the right people to implement continuous improvement
                    Kaizens, and scale the impact across your company.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={img}
                    alt="Lean Manufacturing"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default WeDo;
