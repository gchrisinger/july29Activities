import React from "react";

class Counter extends React.Component {
  state = {
    count: 100
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Counter!
        </div>
        <div className="card-body">
          <p className="card-text">Click Count: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.hhandleDec}>Dec</button>
          <button className="btn btn-primary" onClick={this.handleInc}>Inc</button>
        </div>
      </div>
    );
  }
}

export default Counter;
