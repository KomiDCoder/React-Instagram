import React from "react";
import "./ImageCarousel.css";
const ImageCarousel = (props) => {
  return (
    <div className="Image-Carousel">
      <button className="left-swipe" onClick={props.handleLeftSwipe}>
        <i className="lni lni-arrow-left"></i>
      </button>
      <button className="right-swipe" onClick={props.handleRightSwipe}>
        <i className="lni lni-arrow-right"></i>
      </button>
    </div>
  );
};
export default ImageCarousel;
