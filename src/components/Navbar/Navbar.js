import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import Logo from '../../assets/theleansuite-logo.jpg';
import './Navbar.css';
import { FaBeer } from "react-icons/fa";
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsFacebook,BsLinkedin,BsYoutube,BsTwitter} from 'react-icons/bs'

const NavbarComponent = () => {
  return (
    <>
    <div className='top fixed'>
        <div>
        <p className='container top-text'>Get a question? Call us at + 1-616-433-6688</p>
        </div>
        <div className='icons'>
            <div className='logo-icon'><BsTwitter color='#090A43' size={15}/></div>
            <div className='logo-icon'><BsYoutube color='#090A43' size={15}/></div>
            <div className='logo-icon'><BsLinkedin color='#090A43' size={15}/></div>
            <div className='logo-icon'><BsFacebook color='#090A43' size={15}/></div>
            <div className='logo-icon'><AiOutlineInstagram color='#090A43' size={15}/></div>
        </div>
    </div>
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Products" id="basic-nav-dropdown">
              {/* Dropdown Items */}
            </NavDropdown>

            <NavDropdown title="Why TheleanSuite" id="basic-nav-dropdown">
              {/* Dropdown Items */}
            </NavDropdown>

            <NavDropdown title="Resources" id="basic-nav-dropdown">
              {/* Dropdown Items */}
            </NavDropdown>
          </Nav>
          <button className="btnHome">
                    Schedule Free demo
                </button>
                <button className="btnHome-contact">
                CONTACT US
                </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarComponent;
