//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HooksOverview } from "./contentPages/HooksOverview";
import { NotFound } from "./contentPages/NotFound";

import LoadablePage from "./components/LoadablePage";

// import { MemoryHookDemo } from "./memoryHooks/MemoryHook";

// import Post from "./effectHooks/Post";
// import { UseEffectDemo } from "./effectHooks/UseEffectDemo";
// import ThisDemo from "./others/ThisDemo";
// import { UseEffecthookDemo } from "./effectHooks/UseEffecthook";

// import { RefHookOverview } from "./contentPages/RefHookOverview";

import { RouteData } from "./RouteData";
import { Layout } from "./components/Layout";

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
          <Route path="/" element={<Layout RouteData={RouteData} />}>
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
  );
}

export default App;
// const routerArray = [{ url: "", title: "" }];
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
        {/* {routerArray.push[{ url: path, title: route.title }]} */}
        {/* {console.log("path-m", path + " title:" + route.title)} */}
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
        {/* {routerArray.push[{ url: path, title: route.title }]} */}
        {/* {console.log("path-s", path + " title:" + route.title)} */}
      </Route>
    );
  });
};
