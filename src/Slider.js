import React, { useState, useEffect } from "react";
import "./Slider.css"; // import your CSS file

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("slide");
    const bullets = document.getElementsByClassName("bullet");

    if (n > slides.length) {
      n = 1;
    }
    if (n < 1) {
      n = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].classList.remove("active");
    }

    slides[n - 1].classList.add("active");
    bullets[n - 1].classList.add("active");
    setSlideIndex(n);
  };

  const plusSlides = (n) => {
    setSlideIndex((prevState) => {
      let newIndex = prevState + n;
      if (newIndex > 3) {
        newIndex = 1;
      } else if (newIndex < 1) {
        newIndex = 3;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
  
    <div className="animate__animated animate__zoomInDown slider">
      <div className={`slide ${slideIndex === 1 ? "active" : ""}  `} >
        <img className="sw1 " src="https://res.cloudinary.com/dluyslfrm/image/upload/v1679233894/Untitled_design_15_k8frva.png" alt="Slide 1" />
         <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem error illum adipisci id culpa aliquid eos numquam, minima esse odio dolorem repellendus vero voluptatibus cum, ipsum enim ex. Earum, ipsa.</h1>
      </div>
      <div className={`slide ${slideIndex === 2 ? "active" : ""} `}>
        <img className="sw " src="https://smartslider3.com/wp-content/uploads/slider/cache/500ec18e44f278325408e68ea2bc0d6b/bolivia.webp" alt="Slide 2" />
      </div>
      <div className={`slide ${slideIndex === 3 ? "active" : ""} `}>
        <img className="sw " src="https://smartslider3.com/wp-content/uploads/slider/cache/138cd557f13b61df8e09d837eae10d26/jelly.webp" alt="Slide 3" />
      </div>

      <div className="bullets">
        <span className={`bullet ${slideIndex === 1 ? "active" : ""}`} onClick={() => currentSlide(1)}></span>
        <span className={`bullet ${slideIndex === 2 ? "active" : ""}`} onClick={() => currentSlide(2)}></span>
        <span className={`bullet ${slideIndex === 3 ? "active" : ""}`} onClick={() => currentSlide(3)}></span>
      </div>

      
    </div>
    
    
  );
};

export default Slider;
