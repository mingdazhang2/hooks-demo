//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { HooksOverview } from "./hooksDemoPages/HooksOverview";
import { Menu } from "./components/menu";

import { StopwatchReducerHookDemo } from "./reducerHooks/StopwatchReducerHook";
import { FormReducerHookDemo } from "./reducerHooks/FormReducerHook";
import { CounterReducerHook } from "./reducerHooks/CounterReducerHook";
import { TodoReducerHook } from "./reducerHooks/TodoReducerHook";

import { MemoryHookDemo } from "./pages/MemoryHook";
import { Link } from "react-router-dom";
import Post from "./components/Post";
import { UseStateDemo } from "./hooksDemoPages/UseStateDemo";
import { UseEffectDemo } from "./hooksDemoPages/UseEffectDemo";
import ThisDemo from "./components/ThisDemo";
import { UseEffecthookDemo } from "./pages/UseEffecthook";

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
