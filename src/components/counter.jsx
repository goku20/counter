import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   Tar bor deta innan  Reset kan använda  knapen
  // även måste ändra allt som har this state value
  // };

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });

  //   delet detta med för att det finns inget state sammband med Reset
  // };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* <span className="badge badge-primary m-2">{this.formatCount()}xx</span> */}
        <button
          // onClick={this.handleIncrement}
          // ändra detta med passa a button till nedan samband med Reset
          onClick={() => this.props.onIncrement(this.props.counter.id)}
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
    // ändra state till props
    // classes += this.state.value === 0 ? "warning" : "primary";
    // console.log(this.props.counter.value === 0 ? "warning" : "primary");
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
