import React from "react";

const EffectHookOverview = () => {
  return (
    <div>
      <h1>Effect Hooks</h1>
      <div className="lead">
        Effects let a component{" "}
        <a
          href="https://react.dev/learn/synchronizing-with-effects"
          traget="_blank"
        >
          connect to and synchronize with external systems.
        </a>{" "}
        This includes dealing with network, browser DOM, animations, widgets
        written using a different UI library, and other non-React code.
      </div>
      <ul>
        <li>useEffect connects a component to an external system.</li>
        Effects are an “escape hatch” from the React paradigm. Don’t use Effects
        to orchestrate the data flow of your application. If you’re not
        interacting with an external system,
        <a
          href="https://react.dev//learn/you-might-not-need-an-effect"
          traget="_blank"
        >
          {" "}
          you might not need an Effect.
        </a>
        <li>
          useLayoutEffect fires before the browser repaints the screen. You can
          measure layout here.
        </li>
        useInsertionEffect fires before React makes changes to the DOM.
        Libraries can insert dynamic CSS here.
      </ul>
    </div>
  );
};
export default EffectHookOverview;
