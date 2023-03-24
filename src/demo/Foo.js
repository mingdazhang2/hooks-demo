import React, {useState, useEffect } from "react";
// Declare a new state variable, which we'll call "count"

class Foo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
   // this.handleClickx = this.handleClick.bind(this);
    this.handleClickx = ()=>{console.log(this); };
  }

   handleClick() {
    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }));
    console.log(this); // 'this' is undefined
  }

  render() {
    return (
      <button onClick={this.handleClickx}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}


export default Foo;