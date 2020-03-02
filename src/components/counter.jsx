import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    //imageUrl: "http://picsum.photos/500" för random bilder
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
     let classes = this.getBadgeClasses();
    //  2  och tarbort den och skriv direkt className=(classes)
    // // 1 newMethos markerar och höger klicka och välje refactor så att det bildas ny newMethod se näre och namnge den

    return ( {
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
        {/*<img src={this.state.imageUrl} alt="" />för random bilder, komentar tryck på Crl+K och C tarbort Ctrl +K och U*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
         {/* ...efter tags skall tas bort dessa och även de  */}
        {/* hjälp metoderna getBadgetClasses */}
        <button className=" btn btn-secoundary btn-sm">Increment</button> }
        {/* klip ut och lägger den vi return under renderTags */}
        {<ul>    
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  {/* // tabort efter tags */}
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
