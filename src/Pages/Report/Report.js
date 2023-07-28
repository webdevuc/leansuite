import React from "react";
import "./Report.css";
import { Container } from "react-bootstrap";
import { BsArrowRightShort } from "react-icons/bs";
function Report() {
  return (
    <Container>
      <div>
        <h3 className="report-head">CUSTOM REPORTS</h3>
        <h2 className="report-text">
          Create reports and get real-time insights into your continuous
          improvement efforts
        </h2>
        <p className="report-para">
          Track, analyze, and report on key operational data and metrics with
          the Continuous Improvement System. TheLeanSuite’s powerful,
          easy-to-use reporting engine gives you automatic visual dynamic
          insights that you need to streamline your manufacturing business
          processes.
        </p>
      </div>
      <div className="btn-container">
        <button className="btn-report">SCHEDULE FREE DEMO</button>
        <button className="btn-get">
          GET STARTED <BsArrowRightShort size={20} />
        </button>
      </div>
    </Container>
  );
}

export default Report;
