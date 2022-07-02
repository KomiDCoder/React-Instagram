import React from "react";
import InstaHeader from "./Components/InstaHeader/InstaHeader.js";
import NavbarFooter from "./Components/NavbarFooter/NavbarFooter.js";
import MainPart from "./Components/MainPart/MainPart.js";
import "./App.css";

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
