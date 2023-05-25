import React, { useState } from "react";

import { Link } from "react-router-dom";
export const NavDropdownLink = (props) => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <>
      <div
        className="nav-item dropdown"
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
        onClick={() => setShow(!show)}
      >
        <Link className="dropdown-toggle nav-link" to={props.to}>
          {props.title}
        </Link>
        <div className={(show ? "show " : "show") + "dropdown-menu "}>
          {props.children.map((item) => {
            return !item.children ? (
              <Link
                key={item.to}
                className="dropdown-item"
                to={props.to + "/" + item.to}
              >
                {item.title}
              </Link>
            ) : (
              <NavDropdownLink
                key={props.to + item.to}
                to={props.to + "/" + item.to}
                title={item.title}
                children={item.children}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
