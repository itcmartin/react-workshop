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

// function-based component
// function FriendsList(props) {
//   return (
//     <ul>
//       <li>Alice</li>
//       <li>Bob</li>
//       <li>Carol</li>
//     </ul>
//   );
// }

// class-based component
class FriendsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: ["Alice", "Bob", "Carol"]
    };
  }

  handleRemoveFriend(name) {
    this.setState(currentState => {
      return {
        friends: currentState.friends.filter(friend => friend !== name)
      };
    });
  }

  render() {
    return (
      <ul>
        {this.state.friends.map(name => (
          <li key={name}>
            <span>{name}</span>
            <button onClick={() => this.handleRemoveFriend(name)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

function App(props) {
  return (
    <div>
      <Name name="Martin Harrigan" />
      <Handle handle="@harrigan" />
      <Avatar imgSrc="https://avatars2.githubusercontent.com/u/31845616?s=460&v=4" />
      <FriendsList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(App(), rootElement);
