import React from "react";

export const HooksOverview = () => {
  return (
    <div>
      <h1>Hooks Overview</h1>
      <div className="lead">
        <p>
          Hooks can not in loops, can not in "if condition" and can not in
          function components
        </p>
        <p>Hooks are be called in orders</p>
      </div>
      <hr />
      <h2>Built-in React Hooks</h2>
      <p>
        Hooks let you use different React features from your components. You can
        either use the built-in Hooks or combine them to build your own. This
        page lists all built-in Hooks in React.
      </p>
      <h3>State Hooks</h3>
      State lets a component “remember” information like user input. For
      example, a form component can use state to store the input value, while an
      image gallery component can use state to store the selected image index.
      To add state to a component, use one of these Hooks:
      <ul>
        <li>
          useState declares a state variable that you can update directly.
        </li>
        <li>
          useReducer declares a state variable with the update logic inside a
          reducer function.
        </li>
      </ul>
      <h3>Context Hooks </h3>
      <p>
        Context lets a component receive information from distant parents
        without passing it as props. For example, your app's top-level component
        can pass the current UI theme to all components below, no matter how
        deep. useContext reads and subscribes to a context.
      </p>
      <h3>Ref Hooks </h3>
      <p>
        Refs let a component hold some information that isn't used for
        rendering, like a DOM node or a timeout ID. Unlike with state, updating
        a ref does not re-render your component. Refs are an “escape hatch” from
        the React paradigm. They are useful when you need to work with non-React
        systems, such as the built-in browser APIs.
      </p>
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
      <h3>Effect Hooks </h3>
      <p>
        Effect Hooks Effects let a component connect to and synchronize with
        external systems. This includes dealing with network, browser DOM,
        animations, widgets written using a different UI library, and other
        non-React code. useEffect connects a component to an external system.
        Effects are an “escape hatch” from the React paradigm. Don't use Effects
        to orchestrate the data flow of your application. If you're not
        interacting with an external system, you might not need an Effect. There
        are two rarely used variations of useEffect with differences in timing:
      </p>
      <ul>
        <li>
          useLayoutEffect fires before the browser repaints the screen. You can
          measure layout here.
        </li>
        <li>
          useInsertionEffect fires before React makes changes to the DOM.
          Libraries can insert dynamic CSS here.
        </li>
      </ul>
      <h3>Performance Hooks </h3>
      <p>
        A common way to optimize re-rendering performance is to skip unnecessary
        work. For example, you can tell React to reuse a cached calculation or
        to skip a re-render if the data has not changed since the previous
        render. To skip calculations and unnecessary re-rendering, use one of
        these Hooks:
      </p>
      <ul>
        <li>useMemo lets you cache the result of an expensive calculation.</li>
        <li>
          useCallback lets you cache a function definition before passing it
          down to an optimized component.
        </li>
      </ul>
      <p>
        Sometimes, you can't skip re-rendering because the screen actually needs
        to update. In that case, you can improve performance by separating
        blocking updates that must be synchronous (like typing into an input)
        from non-blocking updates which don't need to block the user interface
        (like updating a chart). To prioritize rendering, use one of these
        Hooks:
      </p>
      <ul>
        <li>
          useTransition lets you mark a state transition as non-blocking and
          allow other updates to interrupt it.
        </li>
        <li>
          useDeferredValue lets you defer updating a non-critical part of the UI
          and let other parts update first.
        </li>
      </ul>
      <h3>Other Hooks</h3>
      <p>
        These Hooks are mostly useful to library authors and aren't commonly
        used in the application code. useDebugValue lets you customize the label
        React DevTools displays for your custom Hook. useId lets a component
        associate a unique ID with itself. Typically used with accessibility
        APIs. useSyncExternalStore lets a component subscribe to an external
        store.
      </p>
      <h3>Your own Hooks </h3>
      <p> You can also define your own custom Hooks as JavaScript functions.</p>
    </div>
  );
};
