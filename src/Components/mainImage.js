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
  });

  const updateDBClicklike = () => {
    setAnimation((prevState) => {
      return prevState === "--animation1" ? "--animation" : "--animation1";
    });
    setDBClickLiked((prevState) => {
      return {
        ...prevState,
        isliked: true,
        redHeart: !prevState.redHeart,
        heartClass: `pop-outin${Animation}`,
        heartContainerClass: `pop-container${Animation}`,
      };
    });
  };
  const toggleLiked = () => {
    setDBClickLiked((prevState) => {
      return {
        ...prevState,
        isliked: !prevState.isliked,
      };
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
        liked={dBClickliked.isliked}
        handleClick={toggleLiked}
        redHeart={dBClickliked.redHeart}
      />
    </>
  );
};
export default MainImage;
