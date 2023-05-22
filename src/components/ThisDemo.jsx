import React from "react";

class ThisDemo extends React.Component {
  constructor(props) {
    super(props);
    this.clickFunction = this.clickFunction2.bind(this);
    console.log("constructor", this);
  }
  clickFunction2() {
    console.log("clickFunction()");
    console.log("this in function", this.props.value);
  }

  render() {
    return (
      <>
        <div>
          <a href="https://medium.com/byte-sized-react/what-is-this-in-react-25c62c31480#:~:text=When%20using%20'this'%20in%20an,values%20in%20the%20object's%20methods.">
            What is "this"
          </a>
        </div>
        {console.log("In return", this)}
        <div onClick={this.clickFunction2()}>Click Me! </div>
        {/* 
        why click on "Click me" is not calling the code ?
        
        The clickFunction2 is being called immediately when the component renders 
        because you are invoking it in the onClick event handler instead of passing it as a callback function.
        To fix this, you should remove the parentheses in the onClick event handler so that it only passes a reference to the function, 
        like this: <div onClick={this.clickFunction2}>Click Me!</div> 
        */}
      </>
    );
  }
}
export default ThisDemo;
