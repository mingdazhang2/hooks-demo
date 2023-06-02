import React from "react";

const UseReduceHookOverview = () => {
  return (
    <div>
      <h1>useReducer(reducer, initialArg, init?)</h1>
      <div className="lead">
        useReducer is a React Hook that lets you add a reducer to your
        component. <br />
        const [state, dispatch] = useReducer(reducer, actionObject);
      </div>
      <h2>Reference</h2>
      <p>
        Call useReducer at the top level of your component to manage its state
        with a reducer.
      </p>
      <h3>Parameters</h3>
      <ul>
        <li>
          reducer: The reducer function that specifies how the state gets
          updated. It must be pure, should take the state and action as
          arguments, and should return the next state. State and action can be
          of any types.
        </li>
        <li>
          initialArg: The value from which the initial state is calculated. It
          can be a value of any type. How the initial state is calculated from
          it depends on the next init argument.
        </li>
        <li>
          optional init: The initializer function that should return the initial
          state. If it’s not specified, the initial state is set to initialArg.
          Otherwise, the initial state is set to the result of calling
          init(initialArg).
        </li>
      </ul>
      <h3>Returns </h3>
      useReducer returns an array with exactly two values:
      <ul>
        <li>
          The current state. During the first render, it’s set to
          init(initialArg) or initialArg (if there’s no init).
        </li>
        <li>
          The dispatch function that lets you update the state to a different
          value and trigger a re-render.
        </li>
      </ul>
      <h3>Caveats</h3>
      <ul>
        <li>
          useReducer is a Hook, so you can only call it at the top level of your
          component or your own Hooks. You can’t call it inside loops or
          conditions. If you need that, extract a new component and move the
          state into it.
        </li>
        <li>
          In Strict Mode, React will call your reducer and initializer twice in
          order to help you find accidental impurities. This is development-only
          behavior and does not affect production. If your reducer and
          initializer are pure (as they should be), this should not affect your
          logic. The result from one of the calls is ignored.
        </li>
      </ul>
      <h2>Usage</h2>
      <ul>
        <li>Step 1: Initial state</li>
        <li>Step 2: Action object</li>
        <li>Step 3: Reducer function</li>
        <li>Step 4: Dispatch function</li>
      </ul>
    </div>
  );
};
export default UseReduceHookOverview;
