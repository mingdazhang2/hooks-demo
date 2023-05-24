//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { HooksOverview } from "./contentPages/HooksOverview";
import { NotFound } from "./contentPages/NotFound";
import { Menu } from "./components/Menu";
import { StopwatchReducerHookDemo } from "./reducerHooks/StopwatchReducerHook";
import { FormReducerHookDemo } from "./reducerHooks/FormReducerHook";
import { CounterReducerHook } from "./reducerHooks/CounterReducerHook";
import { TodoReducerHook } from "./reducerHooks/TodoReducerHook";

import { MemoryHookDemo } from "./memoryHooks/MemoryHook";
import { Link } from "react-router-dom";
import Post from "./effectHooks/Post";
import { UseStateDemo } from "./stateHooks/UseStateDemo";
import { UseEffectDemo } from "./effectHooks/UseEffectDemo";
import ThisDemo from "./others/ThisDemo";
import { UseEffecthookDemo } from "./effectHooks/UseEffecthook";

function App() {
  // toggles posts onclick of button
  // const [show, setShow] = useState(false);
  // const showPost = () => {
  //   setShow(!show);
  // };

  return (
    <div className="App pb-5">
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Routes>
            <Route path="/" element={<HooksOverview />} />
            <Route
              path="/reducer-hook/counter"
              element={<CounterReducerHook showLineNumbers={false} />}
            />
            <Route
              path="/reducer-hook/stopwatch"
              element={<StopwatchReducerHookDemo />}
            />
            <Route
              path="/reducer-hook/form"
              element={<FormReducerHookDemo />}
            />
            <Route path="/reducer-hook/todos" element={<TodoReducerHook />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>

      {/* 
        
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
