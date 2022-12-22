import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div style={{ padding: 20 }} className="container">
        <p>{this.props.count}</p>
        <button
          className="decrement"
          onClick={() => this.props.onDecrement(this.props.id, this.props.step)}
        >
          -
        </button>
        <button
          className="increment"
          onClick={() => this.props.onIncrement(this.props.id, this.props.step)}
        >
          +
        </button>
      </div>
    );
  }
}
