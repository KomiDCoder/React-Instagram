import React from "react";
import InstaHeader from "./Components/InstaHeader.js";
import NavbarFooter from "./Components/NavbarFooter.js";
import MainPart from "./Components/MainPart.js";
import "./style/App.css";



function App() {
  return (
      <div className="instagram-website">
        <InstaHeader />
        <MainPart />
        <NavbarFooter />
      </div>
  );
}

export default App;
