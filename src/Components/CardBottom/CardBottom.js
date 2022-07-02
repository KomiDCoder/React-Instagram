import React from "react";
import "./CardBottom.css";
function CardBottom(props) {
  return (
    <div className="card-image-bottom">
      <div className="card-image-bottom--left-section">
        <button
          onClick={props.handleClick}
          className="card-image-bottom--button icon"
        >
          <i
            className={`cut lni lni-heart${props.likeClass} ${props.redClass}`}
          ></i>
        </button>
        <img
          src="./assets/comment-icon.png"
          alt="comment-icon"
          className="icon"
        />
        <img src="./assets/Direct.png" alt="Direct" className="icon" />
      </div>
      <button className="card-image-bottom--button icon">
        <img
          src="./assets/bookmark-icon.png"
          alt="bookmark-icon"
          className="icon"
        />
      </button>
    </div>
  );
}

export default CardBottom;
