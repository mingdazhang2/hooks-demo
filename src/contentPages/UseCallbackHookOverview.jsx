import React from "react";

const UseCallbackHookOverview = () => {
  return (
    <div>
      <h1>useCallback(fn, dependencies)</h1>
      <div className="lead">
        useCallback is a React Hook that lets you cache a function definition
        between re-renders.
      </div>
      <h2>Reference</h2>
      <p>
        Call useCallback at the top level of your component to cache a function
        definition between re-renders
      </p>
      <h3>Parameters</h3>
      <ul>
        <li>
          <b>fn: </b>The function value that you want to cache. It can take any
          arguments and return any values. React will return (not call!) your
          function back to you during the initial render. On next renders, React
          will give you the same function again if the dependencies have not
          changed since the last render. Otherwise, it will give you the
          function that you have passed during the current render, and store it
          in case it can be reused later. React will not call your function. The
          function is returned to you so you can decide when and whether to call
          it.
        </li>
        <li>
          <b>dependencies: </b>The list of all reactive values referenced inside
          of the fn code. Reactive values include props, state, and all the
          variables and functions declared directly inside your component body.
          If your linter is configured for React, it will verify that every
          reactive value is correctly specified as a dependency. The list of
          dependencies must have a constant number of items and be written
          inline like [dep1, dep2, dep3]. React will compare each dependency
          with its previous value using the Object.is comparison algorithm.
        </li>
      </ul>
      <h3>Returns</h3>
      <p>
        On the initial render, useCallback returns the fn function you have
        passed.
      </p>
      <p>
        During subsequent renders, it will either return an already stored fn
        function from the last render (if the dependencies haven’t changed), or
        return the fn function you have passed during this render.
      </p>
      <h3>Caveats</h3>
      <ul>
        <li>
          <b>useCallback </b> is a Hook, so you can only call it at the top
          level of your component or your own Hooks. You can’t call it inside
          loops or conditions. If you need that, extract a new component and
          move the state into it.
        </li>
        <li>
          React
          <b>
            {" "}
            will not throw away the cached function unless there is a specific
            reason to do that.{" "}
          </b>
          For example, in development, React throws away the cache when you edit
          the file of your component. Both in development and in production,
          React will throw away the cache if your component suspends during the
          initial mount. In the future, React may add more features that take
          advantage of throwing away the cache—for example, if React adds
          built-in support for virtualized lists in the future, it would make
          sense to throw away the cache for items that scroll out of the
          virtualized table viewport. This should match your expectations if you
          rely on useCallback as a performance optimization. Otherwise, a state
          variable or a ref may be more appropriate.
        </li>
      </ul>
    </div>
  );
};
export default UseCallbackHookOverview;
