import React from "react";
import { Outlet } from "react-router-dom";
export const ReduceHookOverview = () => {
  return (
    <div>
      <h2>ReduceHookOverview</h2>
      <Outlet />
    </div>
  );
};
