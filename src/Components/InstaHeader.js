import React from "react";
import NavbarFooter from "./NavbarFooter";
import "../style/InstaHeader.css";
function InstaHeader() {
  return (
    <header>
      <div className="instaheader__container">
        <div className="instaheader--spacer"></div>
        <img
          src="./assets/camera-icon.png"
          alt="Camera-icon"
          className="camera-pic pr-15 icon"
        />
        <img
          src="./assets/instagram.png"
          alt="instagram-logo"
          className="instaheader--instagram-pic logo"
        />
        <div className="instaheader--middle-spacer"></div>
        <form action="#" className="searchbar">
          <i className="lni lni-search-alt"></i>
          <input type="text" placeholder="Search.." name="search" />
        </form>
        <NavbarFooter />
        <img
          src="./assets/Direct.png"
          alt="Direct"
          className="send-icon pr-15"
        />
        <div className="instaheader--spacer"></div>
      </div>
    </header>
  );
}

export default InstaHeader;
