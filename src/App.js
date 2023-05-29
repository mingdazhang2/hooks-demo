//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HooksOverview } from "./contentPages/HooksOverview";
import { NotFound } from "./contentPages/NotFound";
import { Menu } from "./components/Menu";
import { useState } from "react";
import LoadablePage from "./components/LoadablePage";

// import { CounterStateHook } from "./stateHooks/CounterStateHook";
// import { MemoryHookDemo } from "./memoryHooks/MemoryHook";

// import Post from "./effectHooks/Post";
// import { UseEffectDemo } from "./effectHooks/UseEffectDemo";
// import ThisDemo from "./others/ThisDemo";
// import { UseEffecthookDemo } from "./effectHooks/UseEffecthook";
// import { StateHookOverview } from "./contentPages/StateHookOverview";
// import { ReduceHookOverview } from "./contentPages/ReduceHookOverview";
// import { RefHookOverview } from "./contentPages/RefHookOverview";

import { RouteData } from "./RouteData";
export const ThemeContext = createContext("light");
function App() {
  // toggles posts onclick of button
  // const [show, setShow] = useState(false);
  // const showPost = () => {
  //   setShow(!show);
  // };
  // const [isDarkMode, setIsDarkMode] = useState(
  //   ThemeContext === "dark" ? true : false
  // );
  // const [theme, setTheme] = useState(ThemeContext);
  // const handleTheme = () => {
  //   setTheme(isDarkMode ? "light" : "dark");
  //   setIsDarkMode(!isDarkMode);

  //   console.log("click isDarkMode", isDarkMode);
  // };
  return (
    <ThemeContext.Provider value={"dark"}>
      <div className="App pb-5">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu RouteData={RouteData} />}>
              {/* <Route
              path="/state-hook/useState/counter"
              element={<CounterStateHook />}
            /> */}
              <Route index element={<HooksOverview />} />
              {recursiveRenderRoutes(RouteData)}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>

        {/* <UseEffectDemo /> */}
        {/* <UseStateDemo /> */}
        {/* <ThisDemo value="passInValue" />*/}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

const recursiveRenderRoutes = (routes, currentPath = "/") => {
  return routes.map((route) => {
    let path = currentPath + route.to;
    return route.children && route.children.length > 0 ? (
      <React.Fragment key={route.to}>
        <Route
          key={route.to}
          path={path}
          element={
            <LoadablePage folderName={route.folderName} page={route.fileName} />
          }
        />
        {/* {console.log("path-m", path)} */}
        {recursiveRenderRoutes(route.children, path + "/")}
      </React.Fragment>
    ) : (
      <Route
        key={route.to}
        path={path}
        element={
          <LoadablePage folderName={route.folderName} page={route.fileName} />
        }
      >
        {/* {console.log("path-s", path)} */}
      </Route>
    );
  });
};
