import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Name(props) {
  return React.createElement("h1", { id: "name" }, props.name);
}

function Handle(props) {
  return React.createElement("h3", { id: "handle" }, props.handle);
}

function App(props) {
  return React.createElement(
    "div",
    null,
    Name({ name: "Martin Harrigan" }),
    Handle({ handle: "@harrigan" })
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(App(), rootElement);
