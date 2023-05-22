//import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HooksOverview } from "./hooksDemoPages/HooksOverview";
import { Menu } from "./components/menu";
import { MemoryHookDemo } from "./pages/MemoryHook";
import { Link } from "react-router-dom";
import Post from "./components/Post";

import { UseEffecthookDemo } from "./pages/UseEffecthook";
import { StopwatchReducerHookDemo } from "./reducerDemos/StopwatchReducerHook";
import { FormReducerHookDemo } from "./reducerDemos/FormReducerHook";
import { CounterReducerHook } from "./reducerDemos/CounterReducerHook";
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu></Menu>}>
            <Route path="" element={<HooksOverview />} />

            <Route
              path="/reducerHooks/counter"
              element={<CounterReducerHook />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <CounterReducerHook />
      <StopwatchReducerHookDemo /> */}
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
      {/* <ThisDemo value="passInValue" />*/}
    </div>
  );
}

export default App;
