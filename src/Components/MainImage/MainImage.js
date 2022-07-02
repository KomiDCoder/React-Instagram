import React, { useState } from "react";
import CardBottom from "../CardBottom/CardBottom";
import "./MainImage.css";
const MainImage = (props) => {
  const [Animation, setAnimation] = useState("--animation");
  const [dBClickliked, setDBClickLiked] = useState({
    heartClass: "pop-outin",
    isliked: false,
    redHeart: true,
    likeClass: "",
    redClass: "",
  });

  const updateDBClicklike = () => {
    setAnimation((prevState) => {
      return prevState === "--animation1" ? "--animation" : "--animation1";
    });
    setDBClickLiked((prevState) => {
      if (prevState.redHeart) {
        return {
          ...prevState,
          isliked: true,
          redHeart: !prevState.redHeart,
          heartClass: `pop-outin${Animation}`,
          likeClass: "-filled",
          redClass: "red-heart",
        };
      } else {
        return {
          ...prevState,
          isliked: true,
          redHeart: !prevState.redHeart,
          heartClass: `pop-outin${Animation}`,
          likeClass: "-filled",
          redClass: "red-heart1",
        };
      }
    });
  };
  const toggleLiked = () => {
    setDBClickLiked((prevState) => {
      if (!prevState.isliked) {
        return {
          ...prevState,
          isliked: !prevState.isliked,
          likeClass: "-filled red-heart",
        };
      } else {
        return {
          ...prevState,
          isliked: !prevState.isliked,
          likeClass: " dislike",
        };
      }
    });
  };

  return (
    <>
      <div className="img-container-animation">
        <img src={props.imagePic} alt="Main-images" />
        <button className="pop-container" onDoubleClick={updateDBClicklike}>
          <div className={`pop-outin ${dBClickliked.heartClass}`}>
            <i className="lni lni-heart-filled"></i>
          </div>
        </button>
      </div>
      <CardBottom
        handleClick={toggleLiked}
        redClass={dBClickliked.redClass}
        likeClass={dBClickliked.likeClass}
      />
    </>
  );
};
export default MainImage;
