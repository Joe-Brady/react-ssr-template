import React from "react";

class ChangeState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    this.AddOne = this.AddOne.bind(this);
    this.SubtractOne = this.SubtractOne.bind(this);
  }

  AddOne() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  SubtractOne() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div>
        <h1>Change state component:</h1>
        <p>Current count: {this.state.counter}</p>
        <button onClick={this.AddOne}>Add one</button>
        <button onClick={this.SubtractOne}>Subtract one</button>
      </div>
    );
  }
}

export default ChangeState;
