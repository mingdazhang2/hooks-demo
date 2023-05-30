import React, { useState } from "react";

const CounterStateHook = () => {
  //const [count, setCount] = useState(4);
  const [count, setCount] = useState(complexCount());
  console.log("count", count);
  function complexCount() {
    return 3;
  }
  function decrementCount() {
    setCount((preCount) => preCount - 1);
  }
  function incrementCount() {
    setCount((preCount) => preCount + 1);
  }
  return (
    <div className="">
      <h1>useState Demo</h1>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>

      <p>
        Use function as para only run once, the default one runs every time the
        component render
      </p>
      <p>const [count, setCount] = useState(4);</p>
      <p>const [count, setCount] = useState(()=&gt; complexCount);</p>

      <h2>How to Mutate State in a Functional Way</h2>
      <p>
        We know that state doesn't change immediately. And there's another
        question related to it. What would happen if you could click the More
        button 1M times per second? Possibly, at the end of the 1M clicks, the
        counter would be 999_998 (or less), and not 1_000_000 as expected. To
        avoid this happening, we can set state in a functional way. We'd grab
        the value of the previous state, so that React can properly batch all
        the requests and update state linearly. This way we wouldn't lose
        information in the middle.
      </p>
    </div>
  );
};
export default CounterStateHook;
