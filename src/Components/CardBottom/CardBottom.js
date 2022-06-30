import React from "react";
import "./CardBottom.css";
function CardBottom(props) {
  // let redHeart = props.redHeart ? "red-heart" : "red-heart1";
  // let heartIcon = props.liked ? "-filled" : " dislike";

  return (
    <div className="card-bott">
      <button onClick={props.handleClick} className="card--button">
        <i
          className={`cut lni lni-heart${props.likeClass} ${props.redClass}`}
        ></i>
      </button>
      <img
        src="./assets/comment-icon.png"
        alt="comment-icon"
        className="p-5 icon"
      />
      <img src="./assets/Direct.png" alt="Direct" className="p-5 icon" />
      <div className="spacer"></div>
      <img
        src="./assets/bookmark-icon.png"
        alt="bookmark-icon"
        className="icon"
      />
    </div>
  );
}

export default CardBottom;
