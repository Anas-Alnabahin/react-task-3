import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <button
          onClick={() => this.props.onDecrement(this.props.id, this.props.step)}
        >
          -
        </button>
        <p>{this.props.count}</p>
        <button
          onClick={() => this.props.onIncrement(this.props.id, this.props.step)}
        >
          +
        </button>
      </div>
    );
  }
}
