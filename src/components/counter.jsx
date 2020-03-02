import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    //imageUrl: "http://picsum.photos/500" för random bilder
  };

  render() {
    //  let classes = this.getBadgeClasses(); 2  och tarbort den och skriv direkt className=(classes)
    // 1 newMethos markerar och höger klicka och välje refactor så att det bildas ny newMethod se näre och namnge den

    return (
      <div>
        {/*<img src={this.state.imageUrl} alt="" />för random bilder, komentar tryck på Crl+K och C tarbort Ctrl +K och U*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className=" btn btn-secoundary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
