import React, { Component } from "react";

class Newcounter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.setState.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className=" btn btn-secoundary btn-sm"
        >
          Increment
        </button>
        }
      </div>
    );
  }
}

export default Newcounter;
