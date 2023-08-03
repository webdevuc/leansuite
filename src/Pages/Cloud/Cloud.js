import React from "react";
import "./Cloud.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../assets/issue-quality-cloud-app.jpg";

const Cloud = () => {
  return (
    <>
      {/* <div className="cloud-Container">
      <div className="container">
        <div>
          <h2 className="cloud-header">CLOUD APP </h2>
          <h1 className="cloud-head">
            Purpose built for an on-the-go workforce{" "}
          </h1>
          <p>
            TheLeanSuite’s cloud-based software enables you to access the
            Continuous Improvement System and do everything you need to do
            anywhere you are, at any time.
          </p>
        </div>
        <div>
          <h1 className="cloud-header">CLOUD APP </h1>
        </div>
      </div>
    </div> */}

      <div className="cloud-Container">
        <Container>
          <Row className="cloudd">
            <Col >
              <h2 className="cloud-header">CLOUD APP </h2>
              <h1 className="cloud-head pt-3">
                Purpose built for an on-the-go workforce{" "}
              </h1>
              <p className="cloud-content py-3">
                TheLeanSuite’s cloud-based software enables you to access the
                Continuous Improvement System and do everything you need to do
                anywhere you are, at any time.
              </p>
              <p className="cloud-content">
                Our cloud-based app is purposely build for your on-the-go
                workforce. Whether you need to create a project or analyze an
                automated report, access the Continuous Improvement System on
                your mobile device, tablet, laptop, or desktop
              </p>
            </Col>
            <Col >
              <img src={img} alt="Lean Manufacturing" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cloud;
