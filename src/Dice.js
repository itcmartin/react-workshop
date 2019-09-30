import React from "react";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }

  rollDice() {
    const nextValue = Math.round(Math.random() * 5) + 1;
    this.setState({
      value: nextValue
    });
  }

  render() {
    return (
      <div>
        <h3>Dice</h3>
        <p style={{ fontSize: "3em" }}>
          <span className={"dice dice-" + this.state.value} />
        </p>
        <button onClick={() => this.rollDice()}>Roll</button>
      </div>
    );
  }
}

export default Dice;
