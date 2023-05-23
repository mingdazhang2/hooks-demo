import React, { useEffect, useReducer } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
export const StopwatchReducerHookDemo = () => {
  const initialState = {
    isRunning: false,
    time: 0,
  };

  const stopWatchReducer = (currentState, actionObj) => {
    switch (actionObj.type) {
      case "start":
        return {
          ...currentState,
          isRunning: true,
        };
      case "stop":
        return {
          ...currentState,
          isRunning: false,
        };
      case "reset":
        return {
          time: 0,
          isRunning: false,
        };
      case "tick":
        return {
          ...currentState,
          time: currentState.time + 0.01,
        };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(stopWatchReducer, initialState);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    const currentTime = setInterval(() => dispatch({ type: "tick" }), 10);
    return () => {
      clearInterval(currentTime);
      dispatch({ type: "stop" });
    };
  }, [state.isRunning]);
  return (
    <>
      <div className="my-5">
        <div> StopWatch: {parseFloat(state.time).toFixed(2)}s </div>
        <button
          className="btn btn-success"
          onClick={() => dispatch({ type: "start" })}
        >
          Start
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch({ type: "stop" })}
        >
          Stop
        </button>
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
      <CopyBlock
        language="javascript"
        showLineNumbers={true}
        onCopy
        codeBlock
        theme={googlecode}
        text={codeSnippet}
      />
    </>
  );
};
const codeSnippet = `import React, { useEffect, useReducer } from "react";
export const StopwatchReducerHookDemo = () => {
   // 1. initial state
  const initialState = {
    isRunning: false,
    time: 0,
  };
  // 2. initial action object (directly initial in the returen.)
  // 3. Dispatch function
  const [state, dispatch] = useReducer(stopWatchReducer, initialState);
  // 4. Reducer function
  const stopWatchReducer = (currentState, actionObj) => {
    switch (actionObj.type) {
      case "start":
        return {
          ...currentState,
          isRunning: true,
        };
      case "stop":
        return {
          ...currentState,
          isRunning: false,
        };
      case "reset":
        return {
          time: 0,
          isRunning: false,
        };
      case "tick":
        return {
          ...currentState,
          time: currentState.time + 0.01,
        };
      default:
        throw new Error();
    }
  };

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    const currentTime = setInterval(() => dispatch({ type: "tick" }), 10);
    return () => {
      clearInterval(currentTime);
      dispatch({ type: "stop" });
    };
  }, [state.isRunning]);
  return (
    <>
      <div className="my-5">
        <div> StopWatch: {parseFloat(state.time).toFixed(2)}s </div>
        <button onClick={() => dispatch({ type: "start" })}>Start</button>
        <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
};
`;
