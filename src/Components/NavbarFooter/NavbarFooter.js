import React from "react";
import "./NavbarFooter.css";
function NavbarFooter() {
  return (
    <nav className="footer">
      <img src="./assets/home-icon.png" alt="home-icon" className="icon" />
      <img src="./assets/search-icon.png" alt="search-icon" className="icon" />
      <img src="./assets/New-post.png" alt="New-post.png" className="icon" />
      <img
        src="./assets/explorer-icon.png"
        alt="explorer-icon"
        className="explorer-icon"
      />
      <img src="./assets/like-icon.png" alt="like-icon" className="icon" />
      <img src="./assets/story-icon.png" alt="story-icon" className="icon" />
    </nav>
  );
}
export default NavbarFooter;
