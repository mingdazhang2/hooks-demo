import React, { useState, useRef } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const IntervalDemo = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <div className="mb-4">
        <h1>Interval Demo</h1>{" "}
        <p>
          This example uses a combination of state and refs. Both startTime and
          now are state variables because they are used for rendering. But we
          also need to hold an interval ID so that we can stop the interval on
          button press. Since the interval ID is not used for rendering, it’s
          appropriate to keep it in a ref, and manually update it.
        </p>
        <h2>Read or write refs from event handlers</h2>
        <div className="lead">Time passed: {secondsPassed.toFixed(3)}</div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <CopyBlock
        language="javascript"
        showLineNumbers={true}
        codeBlock
        theme={googlecode}
        text={codeSnippet}
      />
    </>
  );
};
export default IntervalDemo;

const codeSnippet = `import React, { useState, useRef } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const IntervalDemo = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h2>Read or write refs from event handlers</h2>
      <div className="lead">Time passed: {secondsPassed.toFixed(3)}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
     
    </>
  );
};`;
