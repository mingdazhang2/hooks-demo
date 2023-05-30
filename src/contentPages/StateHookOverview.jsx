import React from "react";
import { Outlet } from "react-router-dom";
const StateHookOverview = () => {
  return (
    <>
      <div>
        <h1>State Hooks</h1>
        <div className="lead">
          State lets a component{" "}
          <a
            href="https://react.dev/learn/state-a-components-memory"
            target="_blank"
            rel="noreferrer"
          >
            “remember” information like user input. For example, a form
            component can use state to store the input value, while an image
            gallery component can use state to store the selected image index.
          </a>{" "}
          To add state to a component, use one of these Hooks:
          <ul>
            <li>
              <a
                href="https://react.dev/reference/react/useState"
                target="_blank"
                rel="noreferrer"
              >
                useState
              </a>{" "}
              declares a state variable that you can update directly.
            </li>
            <li>
              <a
                href="https://react.dev/reference/react/useReducer"
                target="_blank"
                rel="noreferrer"
              >
                useReducer
              </a>{" "}
              declares a state variable with the update logic inside a reducer
              function.
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default StateHookOverview;
