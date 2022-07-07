import React from "react";
import DirectUsername from "./DirectUsername";
function DirectPage() {
  return (
    <div className="direct-page">
      <aside className="direct-page__message">
        <DirectUsername />
        <div className="direct-page__message-list"></div>
      </aside>
      <section className="direct-page__chat-box-container">
        <DirectUsername />
        <div className="direct-page__chat-box"></div>
      </section>
    </div>
  );
}

export default DirectPage;
