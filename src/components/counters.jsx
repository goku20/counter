import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // clip ut state, handele alla och klistra in den i App.js

  render() {
    console.log("Counters - Rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            // value={counter.value}
            // id={counter.id}
            // ändra ochså  på counter komponents
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
