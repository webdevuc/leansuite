import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Customer.css";
import unilever from "../../assets/Images/Uni.webp";
import Whirlpool from "../../assets/Images/Whir.webp";
import Mount from "../../assets/Images/Moun.webp";
import Moura from "../../assets/Images/Mou.webp";
import { Col, Row } from "react-bootstrap";

const customers = [
  { id: 1, image: unilever },
  { id: 2, image: Whirlpool },
  { id: 3, image: Mount },
  { id: 4, image: Moura },
];

function Customer() {
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
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {customers.map((customer) => (
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

  // Render the images directly for non-responsive (desktop) view
  return (
    <>
        
      <h5 className="customer">Our Customers</h5>

      <Row>
        <Col sm={3} lg={3}>
          <div className="img-container">
            <img className="img" src={unilever} />
          </div>
        </Col>
        <Col sm={3} lg={3}>
          <div className="img-container">
            <img className="img" src={Whirlpool} />
          </div>
        </Col>
        <Col sm={3} lg={3}>
          <div className="img-container">
            <img className="img" src={Mount} />
          </div>
        </Col>
        <Col sm={3} lg={3}>
          <div className="img-container">
            <img className="img" src={Moura} />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Customer;
