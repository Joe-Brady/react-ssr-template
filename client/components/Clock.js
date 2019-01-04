class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Clock component:</h1>
        <p>It is {this.state.date.toLocaleTimeString()}.</p>
        <p>
          This component is a webpack 'chunk' (via dynamic imports and code
          splitting). See the web inspector's sources tab.
        </p>
      </div>
    );
  }
}

export default Clock;
