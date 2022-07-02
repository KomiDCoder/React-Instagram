import React from "react";
import NavbarFooter from "../NavbarFooter/NavbarFooter";
import "./InstaHeader.css";
function InstaHeader() {
  return (
    <header>
      <div className="instaheader__container">
        <div className="instagram-logo">
          <img
            src="./assets/camera-icon.png"
            alt="Camera-icon"
            className="camera-pic icon"
          />
          <img
            src="./assets/Instagram_logo.svg.png"
            alt="instagram-logo"
            className="instaheader--instagram-pic"
          />
        </div>
        <form action="#" className="searchbar">
          <i className="lni lni-search-alt"></i>
          <input type="text" placeholder="Search.." name="search" />
        </form>
        <NavbarFooter />
        <img src="./assets/Direct.png" alt="Direct" className="send-icon" />
      </div>
    </header>
  );
}

export default InstaHeader;
