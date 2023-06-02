import { useState } from "react";
import { CarouselProps } from "./types";
import React from "react";
import "./Carosel.css";

function Carousel({ images, descriptions }: CarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const currentImage = images[currentImageIndex];
  const currentDescription = descriptions[currentImageIndex];

  return (
    <div className="carousel-container">
      <div className="image-container">
        <button className="prev-button" onClick={handlePrev}>
          Prev
        </button>
        <img src={currentImage} alt="carousel" className="carousel-image" />
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
      <div className="description-container">{currentDescription}</div>
    </div>
  );
}

export default Carousel;
