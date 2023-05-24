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
        <div className={(show ? "show " : "") + "dropdown-menu "}>
          {props.subMenuItems.map((item) => {
            return !item.children ? (
              <Link
                key={item.path}
                className="dropdown-item"
                to={props.to + item.path}
              >
                {item.title}
              </Link>
            ) : (
              <NavDropdownLink
                to={props.to + item.path}
                title={item.title}
                subMenuItems={item.children}
              />
            );
          })}
          {/* <Link className="dropdown-item" to={props.to + "/counter"}>
            Counter
          </Link>
          <Link className="dropdown-item" to={props.to + "/stopwatch"}>
            Stopwatch
          </Link>
          <Link className="dropdown-item" to={props.to + "/todos"}>
            Todos
          </Link>
          <hr className="dropdown-divider" />
          <Link className="dropdown-item" to={props.to + "/form"}>
            Form
          </Link> */}
        </div>
      </div>
    </>
  );
};
