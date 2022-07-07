import React from "react";
function DirectUsername() {
  return (
    <div className="user-name">
      <div className="user-name--spacer"></div>
      <button>
        mamalisaeedi
        <img src="./assets/arrowSwipe.png" alt="arrowSwipe" />
      </button>
      <img
        src="./assets/newMessageDirect.png"
        alt="newMessageDirect"
        className="user-name__new-message-icon"
      />
    </div>
  );
}

export default DirectUsername;
