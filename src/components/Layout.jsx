import { Menu } from "./Menu";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import { createContext } from "react";

import { Breadcrumb } from "./Breadcrumb";
export const ThemeContext = createContext("dark");
export const Layout = (props) => {
  let initIsDarModeValue = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "dark";

  // console.log("localstorage:", initIsDarModeValue);
  const [isDarkMode, setIsDarkMode] = useState(
    initIsDarModeValue === "dark" ? true : false
  );

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem(
      "theme",
      initIsDarModeValue === "dark" ? "light" : "dark"
    );
    // console.log("isDarkmode in handleTheme fn", isDarkMode);
  };
  return (
    <ThemeContext.Provider value={isDarkMode ? "dark" : "light"}>
      {/* {console.log("isDarkmode in return", isDarkMode)} */}
      <Menu RouteData={props.RouteData} handleTheme={handleTheme} />
      <div className="container">
        <Breadcrumb RouteData={props.RouteData} />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
};
