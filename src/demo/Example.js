import React, {useState, useEffect } from "react";
// Declare a new state variable, which we'll call "number"

function Example(){
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("");
    document.title = ` ${number} times`; 
  //  console.log("component rendered")
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    
    // Update the document title using the browser API
    //document.title = ` ${number} times`;
    console.count("useEffect runs")
    setInterval(() => {
     // setNumber(number+1)
    // setNumber((prev)=>prev + 1)
    }, 1000);
    // Clean up function "return .."
  },[]);
    return (
        <div>
            <p>You clicked {number} times </p>
            <button onClick={() => setNumber(number + 1)}> Click me
            </button>
            <button onClick={() => setNumber((prev)=>prev + 1)}>
            Increase
            </button>
            <input type="text" onChange = {(e)=>setName(e.target.value)}/>
        </div>
    ) 
}

export default Example;