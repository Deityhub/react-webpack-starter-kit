import React from "react";
import "./app.scss";
import imgFile from "../../assests/image/Favicon.png";

const App = () => {
  return (
    <div className="full-screen">
      <div>
        <h1>
          React Page <img src={imgFile} width="30" height="30" />{" "}
        </h1>
        <br />
        <a
          className="button-line"
          href="https://github.com/deityhub"
          target="_blank"
        >
          Know more now
        </a>
      </div>
    </div>
  );
};

export default App;
