import React from "react";
import { Outlet } from "react-router-dom";
const PerformaneHookOverview = () => {
  return (
    <>
      <div>
        <h1>PerformaneHookOverview</h1>
        <div className="lead">
          ddd
          <ul>
            <li>sss</li>
            <li>xx</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default PerformaneHookOverview;
