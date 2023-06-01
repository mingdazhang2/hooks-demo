import React from "react";
import { Outlet } from "react-router-dom";
const PerformaneHookOverview = () => {
  return (
    <>
      <div>
        <h1>Performane Hooks</h1>

        <div className="lead">
          <p>
            A common way to optimize re-rendering performance is to skip
            unnecessary work. For example, you can tell React to reuse a cached
            calculation or to skip a re-render if the data has not changed since
            the previous render.
          </p>
          <p>
            To skip calculations and unnecessary re-rendering, use one of these
            Hooks:
          </p>
        </div>
        <ul>
          <li>
            useMemo lets you cache the result of an expensive calculation.
          </li>
          <li>
            useCallback lets you cache a function definition before passing it
            down to an optimized component.
          </li>
        </ul>
        <div className="lead">
          <p>
            Sometimes, you can’t skip re-rendering because the screen actually
            needs to update. In that case, you can improve performance by
            separating blocking updates that must be synchronous (like typing
            into an input) from non-blocking updates which don’t need to block
            the user interface (like updating a chart).
          </p>
          <p>To prioritize rendering, use one of these Hooks:</p>
        </div>
        <ul>
          <li>
            <a
              href="https://react.dev/reference/react/useTransition"
              target="_blank"
              rel="noreferrer"
            >
              useTransition
            </a>{" "}
            lets you mark a state transition as non-blocking and allow other
            updates to interrupt it.
          </li>
          <li>
            <a
              href="https://react.dev/reference/react/useDeferredValue"
              target="_blank"
              rel="noreferrer"
            >
              useDeferredValue
            </a>{" "}
            lets you defer updating a non-critical part of the UI and let other
            parts update first.
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};
export default PerformaneHookOverview;
