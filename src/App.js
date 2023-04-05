//import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import Post from "./components/Post";

import MemoryHookDemo from "./demo/MemoryHook";
import { UseEffecthookDemo } from "./demo/UseEffecthook";
import { StopwatchReducerHookDemo } from "./demo/StopwatchReducerHook";
import { FormReducerHookDemo } from "./demo/FormReducerHook";
import { UseStateDemo } from "./hooksDemoPages/UseStateDemo";

import ThisDemo from "./components/ThisDemo";

function App() {
  const [show, setShow] = useState(false);
  const showPost = () => {
    // toggles posts onclick of button
    setShow(!show);
  };

  return (
    <div className="App">
      {/* <StopwatchReducerHookDemo /> */}
      {/* 
        <div>
        <button onClick={showPost}>Show Posts</button>
        {show && <Post />}
      </div>
        <FormReducerHookDemo />
        <MemoryHookDemo/>
        <UseEffecthookDemo />
         <Post/>
      */}
      {/* <UseStateDemo /> */}
      <ThisDemo value="passInValue" />
    </div>
  );
}

export default App;
