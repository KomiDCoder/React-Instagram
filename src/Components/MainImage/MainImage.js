import React, { useState, useRef } from "react";
import CardBottom from "../CardBottom/CardBottom";
// import ImageCarousel from "../ImageCarousel/ImageCarousel";
import "./MainImage.css";
const MainImage = (props) => {
  const imageContainerBoxRef = useRef(0);
  const leftSwipeRef = useRef(0);
  const rightSwipeRef = useRef(0);
  const imageContainerAnimationRef = useRef(0);
  const tapCounter = useRef(0);
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

  const updateTapCounter = () => {
    const clickTime = new Date().getTime();
    if (clickTime - tapCounter.current < 200) {
      updateDBClicklike();
    } else {
      return (tapCounter.current = clickTime);
    }
  };
  // const initCarouselSwipeCheck = () => {
  //   const changeWidth = imageContainerBoxRef.current.offsetWidth
  //   console.log(imageContainerAnimationRef.current.scrollLeft);
  //   console.log(imageContainerBoxRef.current.scrollLeft);
  //   if (imageContainerAnimationRef.current.scrollLeft > 0) {
  //     console.log(leftSwipeRef.current.className);
  //   } else if (imageContainerAnimationRef.current.scrollLeft > change * 3) {
  //     rightSwipeRef.current.style.display = "none";
  //   }
  // };
  // initCarouselSwipeCheck();
  const handleRightSwipe = () => {
    const changeWidth = imageContainerBoxRef.current.offsetWidth;
    imageContainerAnimationRef.current.scrollLeft =
      imageContainerAnimationRef.current.scrollLeft + changeWidth;
    // console.log(imageContainerAnimationRef.current);
    // console.log(imageContainerBoxRef.current);
    // console.log(leftSwipeRef.current.style.display);
  };
  const handleLeftSwipe = () => {
    const changeWidth = imageContainerBoxRef.current.offsetWidth;
    imageContainerAnimationRef.current.scrollLeft =
      imageContainerAnimationRef.current.scrollLeft - changeWidth;
  };
  return (
    <>
      <div className="img-container-animation" ref={imageContainerAnimationRef}>
        <div className="image-container-box" ref={imageContainerBoxRef}>
          {props.imagePics.map((item, i) => {
            return (
              <div key={i} className="image-container">
                <img src={item} alt="Main-images" />
                <button className="pop-container " onClick={updateTapCounter}>
                  <div className={`pop-outin ${dBClickliked.heartClass}`}>
                    <i className="lni lni-heart-filled"></i>
                  </div>
                </button>
                <div className="Image-Carousel">
                  <button
                    className="left-swipe"
                    onClick={() => {
                      handleLeftSwipe();
                    }}
                    ref={leftSwipeRef}
                  >
                    <i className="lni lni-arrow-left"></i>
                  </button>
                  <button
                    className="right-swipe"
                    onClick={() => {
                      handleRightSwipe();
                    }}
                    ref={rightSwipeRef}
                  >
                    <i className="lni lni-arrow-right"></i>
                  </button>
                </div>
              </div>
            );
          })}
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
