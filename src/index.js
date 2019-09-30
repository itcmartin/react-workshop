import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Name(props) {
  return <h1 id="name">{props.name}</h1>;
}

function Handle(props) {
  return <h3 id="handle">{props.handle}</h3>;
}

function Avatar(props) {
  return <img src={props.imgSrc} width="40" height="40" />;
}

function App(props) {
  return (
    <div>
      <Name name="Martin Harrigan" />
      <Handle handle="@harrigan" />
      <Avatar imgSrc="https://avatars2.githubusercontent.com/u/31845616?s=460&v=4" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(App(), rootElement);
