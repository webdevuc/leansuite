import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import img from "../../assets/Group.jpg";
import { BsCheckLg } from "react-icons/bs";
import "./TheLeanSuite.css";
import iphone from "../../assets/iphone.jpg";
import Card from "react-bootstrap/Card";
import ProductsFeatures from "./ProductsFeatures";

const TheLeanSuite = () => {
  return (
    <>
      <section></section>
      <div className="the-leansuite"></div>
      <div className="bg-color-leansuite">
        <div className="d-flex justify-content-center align-items-center">
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col sm={12} lg={6}>
                <div className="main-div">
                  <p className="title-iphone pt-5">TheLeanSuite</p>
                  <h3 className="sub-text-iphone pt-3">
                    Leading enterprise solution for Lean Manufacturing
                    Implementation. With our scalable solution you can:
                  </h3>
                  <div className="d-flex align-items-center ">
                    <BsCheckLg
                      color="#0052cc"
                      className="logo-icon-iphone"
                      size={30}
                    />
                    <p className="iphone-text pt-3">
                      Get 360 degree view of lean manufacturing program
                    </p>
                  </div>

                  <div className="d-flex py-3">
                    <BsCheckLg
                      color="#0052cc"
                      className="logo-icon-iphone"
                      size={30}
                    />
                    <p className="iphone-text">
                      Automate end to end processes to achieve operational
                      excellence
                    </p>
                  </div>

                  <div className="d-flex">
                    <BsCheckLg
                      color="#0052cc"
                      className="logo-icon-iphone"
                      size={30}
                    />
                    <p className="iphone-text">
                      Standardize and digitize operational task
                    </p>
                  </div>
                  <div className="sche-div-btn">
                    <button className="sche-btn mt-5">
                      Schedule Free demo
                    </button>
                  </div>
                </div>
              </Col>
              <Col sm={12} lg={6}>
                <img className="iphone" src={iphone} alt="" />
              </Col>
            </Row>
          </Container>
        </div>
        <ProductsFeatures />
      </div>
    </>
  );
};

export default TheLeanSuite;
