import React from "react";
import { Container } from "react-bootstrap";
import "./Charts.css";
import pie from "../../assets/Images/pie-chart.webp";

function Charts() {
  return (
    <div className="chart-container">
      <img className="chart-img" src={pie} />
    </div>
  );
}

export default Charts;
