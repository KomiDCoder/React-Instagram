import React, { useState } from "react";
import CardCommentSection from "./CardCommentSection";
import "./CardComment.css";
const CardComment = (props) => {
  const [buttonClass, setButtonClass] = useState({
    class: "",
    message: "",
  });
  const [comment, setcomment] = useState({
    posts: ["slam", "dude", "hi"],
  });
  const updateComment = () => {
    setcomment((prevState) => {
      return {
        ...prevState,
        posts: [...prevState.posts, buttonClass.message],
      };
    });
    setButtonClass((prevState) => {
      return {
        ...prevState,
        class: "",
        message: "",
      };
    });
  };
  const updateButtonColor = (event) => {
    console.log(event.target.value);
    let ifLength = event.target.value.length;
    let classValue = ifLength === 0 ? "" : "clr--blue";
    setButtonClass((prevState) => {
      return {
        ...prevState,
        class: classValue,
        message: event.target.value,
      };
    });
  };
  return (
    <>
      <div className="card-com">
        <CardCommentSection posts={comment.posts} data={props.data} />
        <div className="add-comm">
          <form className="comm-form">
            <img
              src="./assets/happy-icon.png"
              alt="happy-icon"
              className="icon"
            />
            <input
              type="text"
              placeholder="Add a comment..."
              className="com-input"
              onChange={updateButtonColor}
              username="user"
              value={buttonClass.message}
            />
            <button
              className={`add-com-butt ${buttonClass.class}`}
              onClick={updateComment}
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default CardComment;
