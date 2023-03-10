import React, { Component } from "react";
import Counter from "../Components/Counter/Counter";

const counters = [
  { id: 1, count: 0, steps: 1 },
  { id: 2, count: 0, steps: 5 },
  { id: 3, count: 0, steps: 10 },
];

export default class Counters extends Component {
  state = {
    counters,
    total: 0,
  };

  onIncrement = (id, step = 1) => {
    this.setState((prevState) => {
      return {
        counters: prevState.counters.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + step };
          }
          return item;
        }),
      };
    });
  };

  onDecrement = (id, step = 1) => {
    if (this.state.counters[id - 1].count > step) {
      this.setState((prevState) => {
        return {
          counters: prevState.counters.map((item) => {
            if (item.id === id) {
              return { ...item, count: item.count - step };
            }
            return item;
          }),
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          counters: prevState.counters.map((item) => {
            if (item.id === id) {
              return { ...item, count: 0 };
            }
            return item;
          }),
        };
      });
    }
  };

  componentDidUpdate() {
    this.setState((prevState) => {
      const newTotal = prevState.counters.reduce(
        (accumulator, currentValue) => accumulator + currentValue.count,
        0
      );
      if (this.state.total !== newTotal)
        return {
          total: newTotal,
        };
    });
  }

  render() {
    return (
      <div>
        {this.state.counters.map((item) => {
          return (
            <Counter
              key={item.id}
              {...item}
              onIncrement={this.onIncrement}
              onDecrement={this.onDecrement}
              step={item.steps}
            />
          );
          //   return <Counter key={item.id} item={item} />;
        })}
        <h1>{this.state.total}</h1>
      </div>
    );
  }
}
