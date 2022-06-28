import React from "react";
import "./CardCommentSection.css";
const CardCommentSection = (props) => {
  let dd = [0, 1, 2, 3, 4];

  console.log();
  const comments = () => {
    let kk = dd.map(() => {
      return Math.floor(Math.random() * 100);
    });

    let tt = kk.map((comm, i) => {
      i < 2 ? (
        <li
          key={i}
        >{`user ${props.data[comm].userId} : ${props.data[comm].body}`}</li>
      ) : (
        <li
          key={i}
          className="comment--hidden"
        >{`user ${props.data[comm].userId} : ${props.data[comm].body}`}</li>
      );
    });
    console.log(tt);
  };
  return (
    <>
      <div className="comment"></div>
    </>
  );
};
export default CardCommentSection;
