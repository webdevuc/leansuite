import React from "react";
import "./Create.css";
import { Col, Container, Row } from "react-bootstrap";
import { GoPlusCircle } from "react-icons/go";
import { RiDonutChartLine } from "react-icons/ri";
import { GiChart } from "react-icons/gi";

function Create() {
  const items = [
    { icon: <GoPlusCircle size={30} color="#76767F" />, text: "Create Issue" },
    {
      icon: <RiDonutChartLine size={30} color="#76767F" />,
      text: "Plan, Do, Check, Act",
    },
    { icon: <GiChart size={30} color="#76767F" />, text: "Analyze Reports" },
  ];

  return (
    <>
    <div className="our-create"></div>
    <div className="">
      <Container>
        <Row className=" mt-5">
          <Col md={6}>
            <div>
              <h1 className="heading">
                Improve workflow and create more efficient processes
              </h1>
              <p className="para">
                The Continuous Improvement System and its cloud-based
                capabilities makes it easy for you to streamline your
                manufacturing business processes so that you can effectively
                identify improvement opportunities, eliminate bottlenecks, and
                improve at every level.
              </p>
            </div>
          </Col>
          <Col md={6}>
            {items.map((item, index) => (
              <div key={index} className="secound-con">
                <span style={{ fontWeight: "bold" }}>{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div></>
  );
}

export default Create;
