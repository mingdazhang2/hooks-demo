import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SubMenu } from "./SubMenu";
import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../App";
import * as Icon from "react-bootstrap-icons";
// import SplitButton from "react-bootstrap/SplitButton";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Dropdown from "react-bootstrap/Dropdown";
export const Menu = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };
  const themeContent = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(
    themeContent === "dark" ? true : false
  );
  const handleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
    setIsDarkMode(!isDarkMode);

    console.log("click isDarkMode", isDarkMode);
  };

  const [theme, setTheme] = useState(themeContent);
  console.log("themeContent", themeContent);
  console.log("isDarkMode", isDarkMode);

  return (
    <>
      <Navbar expand="lg" bg={theme} variant={theme} fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React Hooks
          </Navbar.Brand>
          <div style={{ order: 10 }}>
            <span className={"themeMode-" + theme} onClick={handleTheme}>
              {isDarkMode ? <Icon.SunFill /> : <Icon.MoonStarsFill />}
            </span>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleNavToggle}
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav" in={isNavOpen}>
            <Nav className="me-auto">
              {props.RouteData.map((route) => {
                return (
                  <SubMenu
                    handleLinkClick={handleLinkClick}
                    key={route.to}
                    to={route.to}
                    title={route.title}
                    children={route.children}
                    depth={1}
                    //  showSubMenu={false}
                  />
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
