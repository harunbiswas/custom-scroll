import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Carousel = ({ cards }) => {
  const [wheelCount, setWheelCount] = useState(0);
  const [isSliderInView, setIsSliderInView] = useState(false);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(6);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    focusOnSelect: true,
    initialSlide: 6,
    centerMode: true,
    afterChange: (current) => setCurrentSlide(current),
    centerPadding: "0%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "15%",
        },
      },
    ],
  };

  const handleWheel = (event) => {
    setWheelCount((prevCount) => {
      if (event.deltaY > 0) {
        return Math.min(prevCount + 1, 80);
      } else if (event.deltaY < 0) {
        return Math.max(prevCount - 1, 0);
      }
      return prevCount;
    });
  };

  useEffect(() => {
    const otherItems = document.querySelectorAll(".custom-slider .slick-slide");
    const currentWidth = otherItems[0].offsetWidth;
    setWheelCount(1);
    otherItems.forEach((item) => {
      item.style.width = `${currentWidth}px`;
    });
  }, [currentSlide]);

  useEffect(() => {
    if (isSliderInView && wheelCount > 0 && wheelCount < 80) {
      const disableScroll = (event) => {
        event.preventDefault();
      };

      window.addEventListener("wheel", disableScroll, { passive: false });

      return () => {
        window.removeEventListener("wheel", disableScroll);
      };
    }
  }, [wheelCount, isSliderInView]);

  useEffect(() => {
    const slickTrack = document.querySelector(".custom-slider .slick-track");
    const centerItem = document.querySelector(
      ".custom-slider .slick-center.slick-active"
    );
    const otherItem = document.querySelector(".custom-slider .slick-slide");
    const otherItems = document.querySelectorAll(".custom-slider .slick-slide");

    if (centerItem && otherItem && slickTrack) {
      const currentWidth = otherItem.offsetWidth;

      otherItems[otherItems.length - 1].style.setProperty(
        "display",
        "none",
        "important"
      );
      otherItems[otherItems.length - 2].style.setProperty(
        "display",
        "none",
        "important"
      );

      centerItem.style.width = `calc(${currentWidth}px + ${wheelCount * 10}px)`;
      slickTrack.style.marginLeft = `-${wheelCount * 5}px`;
    }
  }, [wheelCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSliderInView(entry.isIntersecting);
      },
      { threshold: 0.7 } // Adjust threshold as needed
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  return (
    <div ref={sliderRef} onWheel={handleWheel} className="custom-slider">
      <Slider {...settings} className="carousel">
        {cards.map((card, index) => (
          <Card key={index} card={card} wheelCount={wheelCount} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ card, wheelCount }) => {
  return (
    <div className="card">
      <img src={card?.image} alt="" />
      <div className="effect" style={{ opacity: `${wheelCount * 0.01}` }}>
        <h2>{card?.title}</h2>
      </div>
    </div>
  );
};

export default Carousel;
