import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStyles.css"; // Adjust the file path as needed

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  // Create an array of slides so you can map over them
  const slidesData = [
    {
      slideNumber: "01.",
      slideNumberDesc:'Some random description goes here',
      title: "Gold & Silver",
      description: () => (
        <>
          <h2>
            <span>Account</span> <br />
            that Suits Your Trading Style
          </h2>
          <p>
            Teaching of the great explorer of the truth, the builder of human
            happiness.
          </p>
        </>
      ),
      backgroundImage: "assets/images/banner/banner-7.jpg",
    },
    {
      slideNumber: "02.",
      slideNumberDesc:'Some random description goes here ',
      title: "Platinum",
      description: () => (
        <>
          <h2>
            <span>Account</span> <br />
            that Suits Your Trading Style
          </h2>
          <p>
            Teaching of the great explorer of the truth, the builder of human
            happiness.
          </p>
        </>
      ),
      backgroundImage: "assets/images/banner/banner-2.jpg",
    },
    {
      slideNumber: "03.",
      slideNumberDesc:'Some random description goes here',
      title: "Forex Trading",
      description: () => (
        <>
          <h2>
            <span>Account</span> <br />
            that Suits Your Trading Style
          </h2>
          <p>
            Teaching of the great explorer of the truth, the builder of human
            happiness.
          </p>
        </>
      ),
      backgroundImage: "assets/images/banner/banner-3.jpg",
    },
  ];

  return (
    <section className="banner-section">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div className="slide-item" key={index}>
            <div className="slide-inner">
              {/* Left side image */}
              <div
                className="slide-image d-none d-md-block"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              ></div>

              {/* Right side content */}
              <div className="slide-text">
                <div className="text-container">
                  {/* Slide Number */}
                  <div className="slide-number-section">
                    {/* <h3 className="slide-number">{slide.slideNumber}</h3> */}
                    {/* <h2 className="slide-title">{slide.title}</h2> */}

                    <div class="highlights-box">
                      <div class="single-item">
                        <div className="single-item-left">
                          <span class="count-text">{slide.slideNumber}</span>
                          <h3> {slide.title}</h3>
                          <p>{slide.slideNumberDesc}</p>
                        </div>
                        
                        {/* <div className="single-item-right text"><p>{slide.slideNumberDesc}</p> </div> */}
                      </div>
                    </div>
                  </div>
                  
                  <div className="slide-description">{slide.description()}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomeSlider;
