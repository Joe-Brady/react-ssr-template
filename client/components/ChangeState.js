class ChangeState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    this.addOne = this.addOne.bind(this);
    this.subtractOne = this.subtractOne.bind(this);
  }

  addOne() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  subtractOne() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div>
        <h1>Change state component:</h1>
        <p>Current count: {this.state.counter}</p>
        <button onClick={this.addOne}>Add one</button>
        <button onClick={this.subtractOne}>Subtract one</button>
        <p>
          This component is a webpack 'chunk' (via dynamic imports and code
          splitting). See the web inspector's sources tab.
        </p>
        <p>
          In development mode with hot-reloading, note that the component state
          is maintained when you make a change.
        </p>
      </div>
    );
  }
}

export default ChangeState;
