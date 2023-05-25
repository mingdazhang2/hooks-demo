import React from "react";
import { Outlet } from "react-router-dom";
const StateHookOverview = () => {
  return (
    <>
      <div>
        <h1>State Hooks</h1>
        <div className="lead">
          State lets a component “remember” information like user input. For
          example, a form component can use state to store the input value,
          while an image gallery component can use state to store the selected
          image index. To add state to a component, use one of these Hooks:
          <ul>
            <li>
              useState declares a state variable that you can update directly.
            </li>
            <li>
              useReducer declares a state variable with the update logic inside
              a reducer function.
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default StateHookOverview;
