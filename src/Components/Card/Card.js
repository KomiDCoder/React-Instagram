import React , {useState,useEffect} from "react";
import MainImage from "../mainImage";
import CardComment from "../CardComment/CardComment";
import "./Card.css";
function Card(props) {
  let measure = Math.floor((window.innerWidth * 66) / 100)
  const [pic,setPic]=useState({
    class:""
   })
   
  useEffect(()=>{
    (async function fetchdata() {
      fetch(`https://picsum.photos/${measure}`)
        .then((res) => res.url)
        .then((data) => {
          setPic({
            class:data
          })
        })
        .catch((error) => {
          console.error(error);
        })
     })()
 },[measure])
  
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
