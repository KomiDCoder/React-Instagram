import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "../style/MainPart.css";
function MainPart() {
  const [data, setData] = useState("");

  useEffect(() => {
    (async function fetchdata() {
      await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => {
          console.error(error);
        });
    })();
  }, []);

  let tests = [0, 1, 2, 3, 4, 5];
  return (
    <main>
      <div className="main-part__post">
        {tests.map((test) => (
          <Card key={test} data={data} />
        ))}
        <div className="main--spacer"></div>
      </div>
      <aside className="main-part__follow-suggestion">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </aside>
    </main>
  );
}

export default MainPart;
