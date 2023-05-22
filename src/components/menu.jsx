import React from "react";
import { Outlet, Link } from "react-router-dom";
export const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Hooks overview</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};
