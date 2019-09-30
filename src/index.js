import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Name(props) {
  return <h1 id="name">{props.name}</h1>;
}

function Handle(props) {
  return <h3 id="handle">{props.handle}</h3>;
}

function App(props) {
  return (
    <div>
      <Name name="Martin Harrigan" />
      <Handle handle="@harrigan" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(App(), rootElement);
