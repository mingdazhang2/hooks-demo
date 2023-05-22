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
import { UseEffectDemo } from "./hooksDemoPages/UseEffectDemo";

import ThisDemo from "./components/ThisDemo";

function App() {
  // toggles posts onclick of button
  // const [show, setShow] = useState(false);
  // const showPost = () => {
  //   setShow(!show);
  // };

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
        <StopwatchReducerHookDemo />
        <FormReducerHookDemo />
        <MemoryHookDemo/>
        <UseEffecthookDemo />
       <UseStateDemo /> 
      */}

      {/* <UseEffectDemo /> */}
      {/* <UseStateDemo /> */}
      {/* <ThisDemo value="passInValue" />*/}
    </div>
  );
}

export default App;
