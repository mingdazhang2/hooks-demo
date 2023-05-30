import React from "react";

const UseStateHookOverview = () => {
  return (
    <div>
      <h1>UseState</h1>
      <h2>When to Use the useState Hook</h2>
      <div className="lead">
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
