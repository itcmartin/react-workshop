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

window.API = {
  fetchFriends() {
    return new Promise((res, req) => {
      const friends = ["Alice", "Bob", "Carol"];
      setTimeout(() => res(friends), 2000);
    });
  }
};

// class-based component
class FriendsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      input: ""
    };

    console.log("---------- CONSTRUCTOR");
  }

  componentDidMount() {
    console.log("---------- COMPONENT DID MOUNT");
    // now get the friends and update state with the new friends
    window.API.fetchFriends().then(friends => {
      this.setState({
        friends: friends
      });
    });
  }

  componentDidUpdate() {
    console.log("---------- COMPONENT DID UPDATE");
  }

  componentWillUmount() {
    console.log("---------- COMPONENT WILL UNMOUNT");
  }

  handleAddFriend(name) {
    this.setState(currentState => {
      return {
        friends: currentState.friends.concat([name]),
        input: ""
      };
    });
  }

  handleRemoveFriend(name) {
    this.setState(currentState => {
      return {
        friends: currentState.friends.filter(friend => friend !== name)
      };
    });
  }

  updateNewFriendName(event) {
    const value = event.target.value;
    this.setState({
      input: value
    });
  }

  render() {
    console.log("---------- RENDER");
    return (
      <div>
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
        <h4>Add a new friend:</h4>
        <input
          type="text"
          placeholder="Enter friend name"
          value={this.state.input}
          onChange={event => this.updateNewFriendName(event)}
        />
        <button onClick={() => this.handleAddFriend(this.state.input)}>
          Add Friend
        </button>
      </div>
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
