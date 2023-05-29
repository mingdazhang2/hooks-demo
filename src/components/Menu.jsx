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
  console.log("themeContent value in Menu:", themeContent);
  return (
    <>
      <Navbar expand="lg" bg={themeContent} variant={themeContent} fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React Hooks
          </Navbar.Brand>
          <div className="rightNavbar">
            <span
              className={"themeMode-" + themeContent}
              onClick={props.handleTheme}
            >
              {themeContent === "dark" ? (
                <Icon.SunFill />
              ) : (
                <Icon.MoonStarsFill />
              )}
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
