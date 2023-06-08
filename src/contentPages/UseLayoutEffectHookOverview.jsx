import React from "react";

const UseLayoutEffectHookOverview = () => {
  return (
    <div>
      <h1>useLayoutEffect(setup, dependencies?)</h1>
      <div className="lead">
        useLayoutEffect can hurt performance. Prefer useEffect when possible.
        <br />
        useLayoutEffect is a version of useEffect that fires before the browser
        repaints the screen.{" "}
        <a
          href="https://react.dev/reference/react/useInsertionEffect"
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};
export default UseLayoutEffectHookOverview;
