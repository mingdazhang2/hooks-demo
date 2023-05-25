import React from "react";

const RefHookOverview = () => {
  return (
    <div>
      <h1>Ref Hooks</h1>
      <div className="lead">
        Refs let a component hold some information that isn't used for
        rendering, like a DOM node or a timeout ID. Unlike with state, updating
        a ref does not re-render your component. Refs are an “escape hatch” from
        the React paradigm. They are useful when you need to work with non-React
        systems, such as the built-in browser APIs.
        <ul>
          <li>
            useRef declares a ref. You can hold any value in it, but most often
            it's used to hold a DOM node.
          </li>
          <li>
            useImperativeHandle lets you customize the ref exposed by your
            component. This is rarely used.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default RefHookOverview;
