import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // clip ut state, handele alla och klistra in den i App.js

  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
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
