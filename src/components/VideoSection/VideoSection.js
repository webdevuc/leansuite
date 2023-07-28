import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './VideoSection.css';
import p1 from '../../assets/partner1.jpg';
import p2 from '../../assets/apma-logo-2-e1679078557869.jpg';
import p3 from '../../assets/national-association-of-manufacturers-nam-logo.jpg';
import p4 from '../../assets/waterloo-accelerator-centre.jpg';

const VideoSection = () => {
  const partnerImages = [p1, p2, p3, p4];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call it initially to set the correct screen size on mount

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    // Render the slider for responsive view
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div className='container mt-5'>
        {/* Your existing content */}
        <h2 className='title mt-5'>Affiliations</h2>
        <div className='partners-container'>
          <Slider {...settings}>
            {partnerImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`img ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }

  // Render the images directly for non-responsive view
  return (
    <div className='container mt-5'>
      {/* Your existing content */}
      <h2 className='title mt-5'>Affiliations</h2>
      <div className='partners'>
        {partnerImages.map((image, index) => (
          <img key={index} src={image} alt={`img ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
