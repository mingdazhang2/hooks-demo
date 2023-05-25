//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HooksOverview } from "./contentPages/HooksOverview";
// import { NotFound } from "./contentPages/NotFound";
import { Menu } from "./components/Menu";
import LoadablePage from "./components/LoadablePage";
// import { StopwatchReducerHookDemo } from "./reducerHooks/StopwatchReducerHook";
// import { FormReducerHookDemo } from "./reducerHooks/FormReducerHook";
// import { CounterReducerHook } from "./reducerHooks/CounterReducerHook";
// import { TodoReducerHook } from "./reducerHooks/TodoReducerHook";

// import { MemoryHookDemo } from "./memoryHooks/MemoryHook";

// import Post from "./effectHooks/Post";
// import { CounterStateHook } from "./stateHooks/CounterStateHook";
// import { UseEffectDemo } from "./effectHooks/UseEffectDemo";
// import ThisDemo from "./others/ThisDemo";
// import { UseEffecthookDemo } from "./effectHooks/UseEffecthook";
// import { StateHookOverview } from "./contentPages/StateHookOverview";
// import { ReduceHookOverview } from "./contentPages/ReduceHookOverview";
// import { RefHookOverview } from "./contentPages/RefHookOverview";

import { RouteData } from "./RouteData";
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
          <Route path="/" element={<Menu RouteData={RouteData} />}>
            <Route index element={<HooksOverview />} />
            {recursiveRenderRoutes(RouteData)}
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <UseEffectDemo /> */}
      {/* <UseStateDemo /> */}
      {/* <ThisDemo value="passInValue" />*/}
    </div>
  );
}

export default App;

const recursiveRenderRoutes = (routes) => {
  return routes.map((route) => {
    // const { to, title, folderName, fileName, children, ifNavDropdownLink } = route;
    // const path = `/${to}`;
    return route.children && route.children.length > 0 ? (
      <React.Fragment key={route.to}>
        <Route
          key={route.to}
          path={route.to}
          element={
            <LoadablePage folderName={route.folderName} page={route.fileName} />
          }
        />
        {console.log("path", route.to)}
        {recursiveRenderRoutes(route.children)}
      </React.Fragment>
    ) : (
      <Route
        key={route.to}
        path={route.to}
        element={
          <LoadablePage folderName={route.folderName} page={route.fileName} />
        }
      >
        {console.log("path", route.to)}
      </Route>
    );
  });
};
