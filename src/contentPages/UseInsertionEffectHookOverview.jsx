import React from "react";

const UseInsertionEffectHookOverview = () => {
  return (
    <div>
      <h1>useInsertionEffect(setup, dependencies?) </h1>
      <div className="lead">
        useInsertionEffect is for CSS-in-JS library authors. Unless you are
        working on a CSS-in-JS library and need a place to inject the styles,
        you probably want useEffect or useLayoutEffect instead.
        <br />
        useInsertionEffect is a version of useEffect that fires before any DOM
        mutations.{" "}
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
export default UseInsertionEffectHookOverview;
