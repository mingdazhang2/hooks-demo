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
        <Link className="dropdown-toggle nav-link" to="/reducer-hook">
          Reduce Hook
        </Link>
        <div className={(show ? "show " : "") + "dropdown-menu "}>
          <Link className="dropdown-item" to="/reducer-hook/counter">
            Counter
          </Link>
          <Link className="dropdown-item" to="/reducer-hook/stopwatch">
            Stopwatch
          </Link>
          <Link className="dropdown-item" to="/reducer-hook/todos">
            Todos
          </Link>
          <hr className="dropdown-divider" />
          <Link className="dropdown-item" to="/reducer-hook/form">
            Form
          </Link>
        </div>
      </div>
    </>
  );
};
