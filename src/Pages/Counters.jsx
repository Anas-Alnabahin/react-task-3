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
      </div>
    );
  }
}
