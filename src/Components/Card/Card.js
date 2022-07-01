import React from "react";
import MainImage from "../MainImage/MainImage";
import CardComment from "../CardComment/CardComment";
import "./Card.css";

function Card(props) {
  const pic = `https://picsum.photos/470/?random&t=${String(
    Math.random()
  ).slice(10)}`;

  return (
    <div className="card">
      <div className="card-main">
        <div className="card-top">
          <img
            src="./assets/story-icon.png"
            alt="Story-icon"
            className="p-10 icon"
          />
          <div>alex</div>
          <div className="spacer"></div>
          <img
            src="./assets/threedot-icon.png"
            alt="threedot-icon"
            className="p-10 icon"
          />
        </div>
        <MainImage imagePic={pic} />
      </div>
      <CardComment data={props.data} />
    </div>
  );
}

export default Card;
