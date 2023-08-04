import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FeaturesDropdown.css";
import d1 from "../../assets/FeaturesDropdown/Campaigns-white.jpg";
import d2 from "../../assets/FeaturesDropdown/01.png";
import d3 from "../../assets/FeaturesDropdown/08.png";
import d4 from "../../assets/FeaturesDropdown/03.png";
import d5 from "../../assets/FeaturesDropdown/02.png";
import d6 from "../../assets/FeaturesDropdown/04.png";
import d7 from "../../assets/FeaturesDropdown/07.png";
import {
  MdArrowForward,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { Accordion } from "react-bootstrap";

const FeaturesDropdown = () => {
  const dropdownData = [
    {
      title: "Campaigns",
      image: d1,
      content: "Generate the right ideas by creating relevant topics.",
    },
    {
      title: "Customizable Forms",
      image: d2,
      content: "Configure different fields based on your preferences.",
    },
    {
      title: "Attachment Tool",
      image: d3,
      content: "Help your team improve their communication abilities.",
    },
    {
      title: "In-line Approval",
      image: d4,
      content: "Direct the suggestion to the right person in an instant",
    },
    {
      title: "Roles and Permissions",
      image: d5,
      content:
        "Give specific access and control depending on the roles you’ve assigned.",
    },
    {
      title: "Marketplace",
      image: d6,
      content: "Choose rewards that are unique to your workforce.",
    },
    {
      title: "Points and Leaderboard",
      image: d7,
      content: "Offer redeemable points and visualize your top performers.",
    },
    {
      title: "Reports",
      image: d7,
      content:
        "Receive in-depth insights on the impact that the suggestions have.",
    },
  ];

  const [selectedDropdownIndex, setSelectedDropdownIndex] = useState("0");

  const toggleDropdown = (index) => {
    setSelectedDropdownIndex(index === selectedDropdownIndex ? null : index);
  };

  return (
    <>
    <div className="our-leansuiteFeatures"></div>
      <div className="featDrop_div">
        <div className="container">
          <h2 className="title">TheLeanSuite Features</h2>
          <div className="row">
            <div className="col-sm-12 col-lg-6 my-5">
              <img
                className={`drop-img ${
                  selectedDropdownIndex !== null ? "open" : ""
                }`}
                src={dropdownData[selectedDropdownIndex]?.image || d1}
                alt={
                  dropdownData[selectedDropdownIndex]?.title ||
                  dropdownData[0].title
                }
              />
            </div>
            <div className="col-sm-12 col-lg-6 my-5">
              <p className="text-Features">FEATURES</p>
              <Accordion
                activeKey={selectedDropdownIndex}
                onSelect={toggleDropdown}
                flush
                className="acccrr"
              >
                {dropdownData.map((dropdown, index) => (
                  <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header  className="accr-hdr"><h3 style={{fontSize:18,fontWeight:500}}>{dropdown.title}</h3></Accordion.Header>
                    <Accordion.Body className="accr-btn">
                      {dropdown.content}
                      <p className="learn-more-btn pt-3">
                        Learn more{" "}
                        <span>
                          <MdArrowForward />
                        </span>
                      </p>
                      <img className="res-img" src={dropdown.image} alt={dropdown.title} />
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesDropdown;
