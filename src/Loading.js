import React from "react";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Loading"
    };
  }

  componentDidMount() {
    const stopper = "Loading...";
    this.interval = window.setInterval(() => {
      this.setState(currentState => {
        if (currentState.text === stopper) {
          return {
            text: "Loading"
          };
        } else {
          return {
            text: currentState.text + "."
          };
        }
      });
    }, 300);
  }

  componentWillUmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <p>{this.state.text}</p>;
  }
}

export default Loading;
