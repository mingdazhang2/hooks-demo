import React, { useState } from "react";

export const UseStateDemo = () => {
  const [count, setCount] = useState(4);

  function complexCount() {
    console.log("run complex count");
    return 4;
  }

  function decrementCount() {
    setCount((preCount) => preCount - 1);
  }
  function incrementCount() {
    setCount((preCount) => preCount + 1);
  }
  return (
    <div>
      <h2>useStateDemo</h2>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>

      <p>
        Use function as para only run once, the default one runs every time the
        compnent render
      </p>
      <p>const [count, setCount] = useState(4);</p>
      <p>const [count, setCount] = useState(()=&gt; complexCount);</p>
    </div>
  );
};
