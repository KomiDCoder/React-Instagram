import React, { useState } from "react";
import CardBottom from "./CardBottom/CardBottom";
import "../style/MainImage.css";
const MainImage = (props) => {
  const [Animation, setAnimation] = useState("--animation");
  const [dBClickliked, setDBClickLiked] = useState({
    heartClass: "pop-outin",
    heartContainerClass: "pop-container",
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
          heartContainerClass: `pop-container${Animation}`,
          likeClass: "-filled",
          redClass: "red-heart",
        };
      } else {
        return {
          ...prevState,
          isliked: true,
          redHeart: !prevState.redHeart,
          heartClass: `pop-outin${Animation}`,
          heartContainerClass: `pop-container${Animation}`,
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
          likeClass: "-filled",
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
      <div className="img-container--animation">
        <img src={props.imagePic} alt="Main-images" />
        <div
          className={`pop-container ${dBClickliked.heartContainerClass}`}
          onDoubleClick={updateDBClicklike}
        >
          <div className={`pop-outin ${dBClickliked.heartClass}`}>
            <i className="lni lni-heart-filled"></i>
          </div>
        </div>
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
