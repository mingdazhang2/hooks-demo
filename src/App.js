//import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";

import MemoryHookDemo from "./demo/MemoryHook";
import { UseEffecthookDemo } from "./demo/UseEffecthook";
import { StopwatchReducerHookDemo } from "./demo/StopwatchReducerHook";
import { FormReducerHookDemo } from "./demo/FormReducerHook";

import { UseStateDemo } from "./hooksDemoPages/UseStateDemo";
import { UseEffectDemo } from "./hooksDemoPages/UseEffectDemo";
function App() {
  const [show, setShow] = useState(false);
  const showPost = () => {
    // toggles posts onclick of button
    setShow(!show);
  };
  return (
    <div className="App">
      {/* 
        <StopwatchReducerHookDemo />
        <FormReducerHookDemo />
        <MemoryHookDemo/>
        <UseEffecthookDemo />
       <UseStateDemo /> 
      */}

      <UseEffectDemo />
    </div>
  );
}

export default App;
