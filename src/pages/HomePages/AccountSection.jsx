import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AccountsSection.css"; // custom CSS for styling

// Custom Arrow Components
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-custom-arrow slick-prev" onClick={onClick}>
      &lt;
    </button>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-custom-arrow slick-next" onClick={onClick}>
      &gt;
    </button>
  );
};

// Example card data
const cards = [
  {
    title: "Commission a/c",
    description:
      "Case are perfectly simple easy to any distinguish in a free hour.",
    img: "assets/images/resource/account-1.jpg",
    link: "/account-details-1",
  },
  {
    title: "STP Pro a/c",
    description:
      "The claims off duty or the obligations business it will frequently occur.",
    img: "assets/images/resource/account-2.jpg",
    link: "/account-details-2",
  },
  {
    title: "Standard a/c",
    description: "Beguiled demoralized by charms non pleasure of the moment.",
    img: "assets/images/resource/account-3.jpg",
    link: "/account-details-3",
  },
  {
    title: "VIP a/c",
    description:
      "Experience the ultimate in trading with exclusive privileges.",
    img: "assets/images/resource/account-4.jpg",
    link: "/account-details-4",
  },
  {
    title: "Commission a/c",
    description:
      "Case are perfectly simple easy to any distinguish in a free hour.",
    img: "assets/images/resource/account-1.jpg",
    link: "/account-details-1",
  },
  {
    title: "STP Pro a/c",
    description:
      "The claims off duty or the obligations business it will frequently occur.",
    img: "assets/images/resource/account-2.jpg",
    link: "/account-details-2",
  },
];

const AccountSection = () => {
  const [visibleCards, setVisibleCards] = useState(cards.slice(0, 3)); // Show first 3 initially
  const [startIndex, setStartIndex] = useState(0);
  const trackRef = useRef(null);


  const nextSlide = () => {
    if (startIndex + 3 < cards.length) {
      setStartIndex(startIndex + 1);
      setVisibleCards(cards.slice(startIndex + 1, startIndex + 4));
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setVisibleCards(cards.slice(startIndex - 1, startIndex + 2));
    }
  };

  return (
    <section class="account-section bg-color-1">
      <div className="carousel-container">
      <button className="carousel-button left" onClick={prevSlide} disabled={startIndex === 0}>{"<"}</button>
      <div className="carousel-wrapper">
        <div 
          className="carousel-track"
          ref={trackRef}
          style={{ transform: `translateX(-${startIndex * 1}%)` }}
          
        >
      <div className="carousel"  >
        {visibleCards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button className="open-btn">Open Your Account</button>
          </div>
        ))}
      </div>
          </div>
        </div>
      <button className="carousel-button right" onClick={nextSlide} disabled={startIndex + 3 >= cards.length}>{">"}</button>
    </div>
    </section>
  );
};

export default AccountSection;
