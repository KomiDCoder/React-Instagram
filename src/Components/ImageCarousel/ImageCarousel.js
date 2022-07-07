import React from "react";
import "./ImageCarousel.css";
function ImageCarousel() {
  return (
    <div className="Image-Carousel">
      <button className="left-swipe">
        <img src="./assets/arrowSwipe.png" alt="carousel_arrow_swipe_Left" />
      </button>
      <button className="right-swipe">
        <img src="./assets/arrowSwipe.png" alt="carousel_arrow_swipe_right" />
      </button>
    </div>
  );
}
export default ImageCarousel;
