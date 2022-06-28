import "../style/DirectUsername.css";
function DirectUsername() {
  return (
    <div className="user-name">
      <div className="user-name--spacer"></div>
      <a>
        mamalisaeedi
        <img src="./assets/arrowSwipe.png" alt="arrowSwipe" />
      </a>
      <img
        src="./assets/newMessageDirect.png"
        alt="newMessageDirect"
        className="user-name__new-message-icon"
      />
    </div>
  );
}

export default DirectUsername;
