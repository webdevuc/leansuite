import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Improve.css";
import save from "../../assets/Images/Save-time.svg";

function Improve() {
  return (
    <div className="main">
      <Container>
        <div>
          <h2 className="header">Improve your overall bottom line</h2>
        </div>
        <div className="card-sec">
          <div className="cards">
            <img src={save} />
            <h4 className="sub-tit">Save time and money</h4>
            <p className="sub-head">
              Control and manage your continuous improvement efforts under one
              central hub from anywhere, at any time
            </p>
          </div>
          <div className="cards">
            <img src={save} />
            <h4 className="sub-tit">Save time and money</h4>
            <p className="sub-head">
              Control and manage your continuous improvement efforts under one
              central hub from anywhere, at any time
            </p>
          </div>
          <div className="cards">
            <img src={save} />
            <h4 className="sub-tit">Save time and money</h4>
            <p className="sub-head">
              Control and manage your continuous improvement efforts under one
              central hub from anywhere, at any time
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Improve;
