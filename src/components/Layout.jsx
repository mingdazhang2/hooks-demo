import { Menu } from "./Menu";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import { createContext } from "react";

import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
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
        <BreadcrumbComponent links={props.RouteData} />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
};

const BreadcrumbComponent = ({ RouteData }) => {
  let currentPath = useLocation().pathname;

  currentPath = currentPath.replace(/\/+$/, "").substring(1);
  let parentPages = currentPath.split("/");
  console.log("parentPages", parentPages);

  const findPageName = (to, depth) => {
    for (let i = 0; i < depth; i++) {}
  };
  console.log(currentPath);
  const getParentPath = (path) => {
    const lastSlashIndex = path.lastIndexOf("/");
    return lastSlashIndex > 0 ? path.slice(0, lastSlashIndex) : "";
  };
};
