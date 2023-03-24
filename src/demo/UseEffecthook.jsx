import React, {useState, useEffect } from "react";

export const UseEffecthookDemo = () => {
  const [number, setNumber] = useState(0);    
  // Update the document title using the browser API
  document.title = ` ${number} times`; 
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    //document.title = ` ${number} times`;
    console.count("useEffect runs")
    const timer= setInterval(() => {
      setNumber((pre)=>(pre+1))
    }, 1000);
    // Clean up function "return .."
    return ()=>(clearInterval(timer))
  },[]);
    return (
        <div>
            <p> {number} sfds </p>     
        </div>
    ) 
}



