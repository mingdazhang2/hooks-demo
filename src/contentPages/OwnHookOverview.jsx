import React from "react";

const OwnHookOverview = () => {
  return (
    <div>
      <h1>Own(Custom) Hooks</h1>
      <div className="lead">
        Hooks are reusable functions. When you have component logic that needs
        to be used by multiple components, we can extract that logic to a custom
        Hook.
      </div>
      <h2>Hook names always start with use</h2>
      <p>
        React applications are built from components. Components are built from
        Hooks, whether built-in or custom. You’ll likely often use custom Hooks
        created by others, but occasionally you might write one yourself!
      </p>
      <p>You must follow these naming conventions:</p>
      <ol>
        <li>
          <b>React component names must start with a capital letter, </b>like
          StatusBar and SaveButton. React components also need to return
          something that React knows how to display, like a piece of JSX.
        </li>
        <li>
          <b>Hook names must start with use followed by a capital letter, </b>
          like useState (built-in) or useOnlineStatus (custom, like earlier on
          the page). Hooks may return arbitrary values. This convention
          guarantees that you can always look at a component and know where its
          state, Effects, and other React features might “hide”. For example, if
          you see a getColor() function call inside your component, you can be
          sure that it can’t possibly contain React state inside because its
          name doesn’t start with use. However, a function call like
          useOnlineStatus() will most likely contain calls to other Hooks
          inside!
        </li>
      </ol>
    </div>
  );
};
export default OwnHookOverview;
