import React from "react";

const UseStateHookOverview = () => {
  return (
    <div>
      <h1>useState(initialState) </h1>
      <div className="lead">
        useState is a React Hook that lets you add a state variable to your
        component.
      </div>
      <h2>Reference</h2>
      <p>
        Call useState at the top level of your component to declare a state
        variable.
      </p>
      <h3>Parameters</h3>
      <p>
        <b>initialState:</b> The value you want the state to be initially. It
        can be a value of any type, but there is a special behavior for
        functions. This argument is ignored after the initial render.
        <br />
        If you pass a function as initialState, it will be treated as an
        initializer function. It should be pure, should take no arguments, and
        should return a value of any type. React will call your initializer
        function when initializing the component, and store its return value as
        the initial state.
      </p>
      <h3>Returns</h3>
      <p>useState returns an array with exactly two values:</p>
      <ol>
        <li>
          The current state. During the first render, it will match the
          initialState you have passed.
        </li>
        <li>
          The set function that lets you update the state to a different value
          and trigger a re-render.
        </li>
      </ol>
      <h3>Caveats</h3>
      <ul>
        <li>
          useState is a Hook, so you can only call it at the top level of your
          component or your own Hooks. You can’t call it inside loops or
          conditions. If you need that, extract a new component and move the
          state into it.
        </li>
        <li>
          In Strict Mode, React will call your initializer function twice in
          order to help you find accidental impurities. This is development-only
          behavior and does not affect production. If your initializer function
          is pure (as it should be), this should not affect the behavior. The
          result from one of the calls will be ignored.
        </li>
      </ul>
      <h2>When to Use the useState Hook</h2>
      <div>
        At first glance, we think that when we need a variable that changes over
        time, we need to keep it in state. But this is not true, most of the
        time. I mean, if your variable can be derived from other data, then you
        don't need state.
      </div>
      <b>State Example 1:</b>
      <p>
        A theme color, that can be light or dark, according to the hour, can be
        derived from system data. We can simply get the time (date) from the JS
        Date function. So we don't need state here, right? This is a const you
        can declare with an expression or function that must be evaluated.
      </p>
      <b>State Example 2:</b>
      <p>
        A modal toggle (to show/hide a modal). Modal toggle can be true or
        false, and it's triggered when the user clicks a button. So, in this
        case we really need state, because we can't derive this kind of
        information – it only depends on "when and if" the user triggers the
        event or not. Be mindful of this difference – between what can be
        derived and what depends on the user.
      </p>
    </div>
  );
};
export default UseStateHookOverview;
