import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* <span className="badge badge-primary m-2">{this.formatCount()}xx</span> */}
        <button
          onClick={this.handleIncrement}
          className=" btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className=" btn btn-danger btn-sm m2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    console.log(this.state.value == 0 ? "warning" : "primary");
    classes += this.state.value == 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
