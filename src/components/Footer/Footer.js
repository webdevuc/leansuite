import React from "react";
import LogoFooter from "../../assets/LeanSuite-LogoFooter.jpg";
import AppStore from "../../assets/Footer_app-store.jpg";
import PlayStore from "../../assets/footer-google-play.jpg";
import footerimg from "../../assets/footerimg.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="bg-color-footer py-3">
        <div className="container">
          <Container>
            <Row>
              <Col sm={6}>
                <div className="mt-4 img-center">
                  <img className="footer-logo" src={LogoFooter} alt="logo" />
                </div>
              </Col>
              <Col sm={6}>
                <div className="mt-4 store">
                  <div className="img-center">
                    <img
                      // className="appstore-footer"
                      src={AppStore}
                      alt="logo"
                    />
                  </div>
                  <div className="img-center">
                    <img src={PlayStore} alt="logo" />
                  </div>
                </div>
              </Col>
            </Row>

            <hr style={{ color: "#fff", borderWidth: "2px" }} />

            <Row className="my-5 footer-center">
             <div className="footer-div-web">
              <div>
                <p className="footer-text">info@theleansuite.com</p>
                <p className="footer-text">616-433-6688</p>
                <img className="security-img" src={footerimg} alt="img" />
                </div>
         
         
                <div>
                  <h6 className="footer-text">Company</h6>
                  <h6 className="footer-text pt-3">Blog</h6>
                  <h6 className="footer-text">Support</h6>
                  <h6 className="footer-text">About Us</h6>
                  <h6 className="footer-text">Partners</h6>
                  <h6 className="footer-text">Press</h6>
                  <h6 className="footer-text">Contact Us</h6>
                </div>
              
                <div>
                <h2 className="footer-text">Solutions</h2>
                <h6 className="footer-text pt-3">Suggestion Platform</h6>
                <h6 className="footer-text">Continuous Improvement</h6>
                <h6 className="footer-text">Issue Tracker</h6>
                <h6 className="footer-text">Quality Management</h6>
                <h6 className="footer-text">Gemba Walker</h6>
                <h6 className="footer-text">CILR Management</h6>
                <h6 className="footer-text">Loss and Cost Management</h6>
                <h6 className="footer-text">Job Cover Matrix</h6>
                <h6 className="footer-text">Compentency Planning</h6>
                <h6 className="footer-text">Learning Management</h6>
                <h6 className="footer-text">System</h6>
                </div>
              
                <div>
                  <h6 className="footer-text">Features</h6>
                  <h6 className="footer-text pt-3">Campaigns</h6>
                  <h6 className="footer-text">Customizable forms</h6>
                  <h6 className="footer-text">Points and Leaderboard</h6>
                  <h6 className="footer-text">Roles and permissions</h6>
                  <h6 className="footer-text">Reports</h6>
                  <h6 className="footer-text">Attachment Tool</h6>
                  <h6 className="footer-text">Marketplace</h6>
                </div>
                </div>
            </Row>

            <hr style={{ color: "#fff", borderWidth: "2px" }} />

            <div className="footer-bottom">
              <div>
                <p className="footer-text">Privacy Policy Leansuite.com Corp</p>
              </div>
              <div className="icons">
                <div className="logo-icon">
                  <BsTwitter color="#090A43" size={20} />
                </div>
                <div className="logo-icon">
                  <BsYoutube color="#090A43" size={20} />
                </div>
                <div className="logo-icon">
                  <BsLinkedin color="#090A43" size={20} />
                </div>
                <div className="logo-icon">
                  <BsFacebook color="#090A43" size={20} />
                </div>
                <div className="logo-icon">
                  <AiOutlineInstagram color="#090A43" size={20} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
