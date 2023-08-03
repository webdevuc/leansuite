import React, { useEffect, useState } from 'react';
import amazon from '../../assets/svg/amazon-s3.svg';
import googlecloud from '../../assets/svg/google-cloud-3.svg';
import oracle from '../../assets/svg/oracle-6.svg';
import power from '../../assets/svg/power-bi-1.svg';
import sap from '../../assets/svg/sap-3.svg';
import tableau from '../../assets/svg/tableau-logo.svg';
import "./Sponsers.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';

const Sponsers = () => {

  const Sponsers = [
    { id: 1, image: amazon },
    { id: 2, image: googlecloud },
    { id: 3, image: oracle },
    { id: 4, image: power },
    { id: 3, image: sap },
    { id: 4, image: tableau },
  ];


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call it initially to set the correct screen size on mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  if (isMobile) {
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <>
        <h5 className="customer">Our Customers</h5>
        <h1 className='title-integrate'>We integrate with the <span style={{ color: "#0052cc" }}>solutions you are already using</span></h1>
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {Sponsers.map((customer) => (
              <div key={customer.id} className="img-container">
                <img
                  src={customer.image}
                  className="img"
                  alt={`Customer ${customer.id}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
  
  return (
    // <Container>
    <>

      <div className="our-integrate"></div>
      <div className='container my-5'>
        <h1 className='title-integrate'>We integrate with the <span style={{ color: "#0052cc" }}>solutions you are already using</span></h1>

        <Row className='sponser-imges-center'>
          <Col md={2}>
            <div className="">
              <img className="img-sponer" src={tableau} />
            </div>
          </Col>
          <Col md={2}>
            <div className="">
              <img className="img-sponer" src={oracle} />
            </div>
          </Col>
          <Col md={2}>
            <div className="">
              <img className="img-sponer" src={googlecloud} />
            </div>
          </Col>
          <Col md={2}>
            <div className="">
              <img className="img-sponer" src={amazon} />
            </div>
          </Col>
          <Col md={2}>
            <div className="">
              <img className="img-sponer" src={sap} />
            </div>
          </Col>
          <Col md={2}>
            <div className="">
              <img className="img-sponer" src={power} />
            </div>
          </Col>
        </Row>

      </div></>
  );
};

export default Sponsers;
