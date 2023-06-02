import React from "react";

const UseMemoHookOverview = () => {
  return (
    <div>
      <h1>useMemo(calculateValue, dependencies)</h1>
      <div className="lead">
        useMemo is a React Hook that lets you cache the result of a calculation
        between re-renders.
      </div>
      <h2>Reference</h2>
      <p>
        Call useMemo at the top level of your component to cache a calculation
        between re-renders
      </p>
      <h3>Parameters</h3>
      <ul>
        <li>
          <b>calculateValue:</b> The function calculating the value that you
          want to cache. It should be pure, should take no arguments, and should
          return a value of any type. React will call your function during the
          initial render. On next renders, React will return the same value
          again if the dependencies have not changed since the last render.
          Otherwise, it will call calculateValue, return its result, and store
          it so it can be reused later.
        </li>
        <li>
          <b>dependencies:</b> The list of all reactive values referenced inside
          of the calculateValue code. Reactive values include props, state, and
          all the variables and functions declared directly inside your
          component body. If your linter is configured for React, it will verify
          that every reactive value is correctly specified as a dependency. The
          list of dependencies must have a constant number of items and be
          written inline like [dep1, dep2, dep3]. React will compare each
          dependency with its previous value using the Object.is comparison.
        </li>
      </ul>
      <h3>Returns</h3>
      <p>
        On the initial render, useMemo returns the result of calling
        calculateValue with no arguments.
        <br />
        During next renders, it will either return an already stored value from
        the last render (if the dependencies haven’t changed), or call
        calculateValue again, and return the result that calculateValue has
        returned.
      </p>
      <h3>Caveats</h3>
      <ul>
        <li>
          useMemo is a Hook, so you can only call it{" "}
          <b>at the top level of your component</b> or your own Hooks. You can’t
          call it inside loops or conditions. If you need that, extract a new
          component and move the state into it.
        </li>
        <li>
          In Strict Mode, React will <b>call your calculation function twice</b>{" "}
          in order to help you find accidental impurities. This is
          development-only behavior and does not affect production. If your
          calculation function is pure (as it should be), this should not affect
          your logic. The result from one of the calls will be ignored.
        </li>
        <li>
          React{" "}
          <b>
            will not throw away the cached value unless there is a specific
            reason to do that.
          </b>{" "}
          For example, in development, React throws away the cache when you edit
          the file of your component. Both in development and in production,
          React will throw away the cache if your component suspends during the
          initial mount. In the future, React may add more features that take
          advantage of throwing away the cache—for example, if React adds
          built-in support for virtualized lists in the future, it would make
          sense to throw away the cache for items that scroll out of the
          virtualized table viewport. This should be fine if you rely on useMemo
          solely as a performance optimization. Otherwise, a state variable or a
          ref may be more appropriate.
        </li>
      </ul>
      <h2>Note</h2>
      <p>
        <b>You should only rely on useMemo as a performance optimization. </b>
        If your code doesn’t work without it, find the underlying problem and
        fix it first. Then you may add useMemo to improve performance.
      </p>
    </div>
  );
};
export default UseMemoHookOverview;
