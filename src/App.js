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
import { CounterStateHook } from "./stateHooks/CounterStateHook";
import { UseEffectDemo } from "./effectHooks/UseEffectDemo";
import ThisDemo from "./others/ThisDemo";
import { UseEffecthookDemo } from "./effectHooks/UseEffecthook";
import { StateHookOverview } from "./contentPages/StateHookOverview";
import { ReduceHookOverview } from "./contentPages/ReduceHookOverview";
import { RefHookOverview } from "./contentPages/RefHookOverview";

function App() {
  // toggles posts onclick of button
  // const [show, setShow] = useState(false);
  // const showPost = () => {
  //   setShow(!show);
  // };

  return (
    <div className="App pb-5">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<HooksOverview />} />
            <Route path="ref-hook" element={<RefHookOverview />} />
            <Route path="state-hook" element={<StateHookOverview />}>
              <Route path="useState" element={<CounterStateHook />} />
              <Route path="useReducer" element={<ReduceHookOverview />}>
                <Route path="counter" element={<CounterReducerHook />} />
                <Route
                  path="stopwatch"
                  element={<StopwatchReducerHookDemo />}
                />
                <Route path="form" element={<FormReducerHookDemo />} />
                <Route path="todos" element={<TodoReducerHook />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
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
