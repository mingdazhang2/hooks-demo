import React from "react";

const UseEffectHookOverview = () => {
  return (
    <div>
      <h1>useEffect(setup, dependencies?) </h1>
      <div className="lead">
        useEffect is a React Hook that lets you synchronize a component with an
        external system.
      </div>
      <h2>Reference </h2>
      <p>
        Call useEffect at the top level of your component to declare an Effect
      </p>
      <h3>Parameters</h3>
      <ul>
        <li>
          setup: The function with your Effect’s logic. Your setup function may
          also optionally return a cleanup function. When your component is
          added to the DOM, React will run your setup function. After every
          re-render with changed dependencies, React will first run the cleanup
          function (if you provided it) with the old values, and then run your
          setup function with the new values. After your component is removed
          from the DOM, React will run your cleanup function.
        </li>
        <li>
          optional dependencies: The list of all reactive values referenced
          inside of the setup code. Reactive values include props, state, and
          all the variables and functions declared directly inside your
          component body. If your linter is configured for React, it will verify
          that every reactive value is correctly specified as a dependency. The
          list of dependencies must have a constant number of items and be
          written inline like [dep1, dep2, dep3]. React will compare each
          dependency with its previous value using the Object.is comparison. If
          you omit this argument, your Effect will re-run after every re-render
          of the component.
        </li>
      </ul>
      <h3>Returns</h3>
      <p>useEffect returns undefined.</p>
      <h3>Caveats</h3>
      <ul>
        <li>
          useEffect is a Hook, so you can only call it{" "}
          <b>at the top level of your component</b> or your own Hooks. You can’t
          call it inside loops or conditions. If you need that, extract a new
          component and move the state into it.
        </li>
        <li>
          If you’re <b>not trying to synchronize with some external system,</b>{" "}
          you probably don’t need an Effect.
        </li>
        <li>
          When Strict Mode is on, React will{" "}
          <b>run one extra development-only setup+cleanup cycle</b> before the
          first real setup. This is a stress-test that ensures that your cleanup
          logic “mirrors” your setup logic and that it stops or undoes whatever
          the setup is doing. If this causes a problem, implement the cleanup
          function.
        </li>
        <li>
          If some of your dependencies are objects or functions defined inside
          the component, there is a risk that they will
          <b> cause the Effect to re-run more often than needed.</b> To fix
          this, remove unnecessary object and function dependencies. You can
          also extract state updates and non-reactive logic outside of your
          Effect.
        </li>
        <li>
          If your Effect wasn’t caused by an interaction (like a click), React
          will let the browser{" "}
          <b>paint the updated screen first before running your Effect.</b> If
          your Effect is doing something visual (for example, positioning a
          tooltip), and the delay is noticeable (for example, it flickers),
          replace useEffect with useLayoutEffect.
        </li>
        <li>
          Even if your Effect was caused by an interaction (like a click),{" "}
          <b>
            the browser may repaint the screen before processing the state
            updates inside your Effect.
          </b>{" "}
          Usually, that’s what you want. However, if you must block the browser
          from repainting the screen, you need to replace useEffect with
          useLayoutEffect.
        </li>
        <li>
          Effects <b>only run on the client.</b> They don’t run during server
          rendering.
        </li>
      </ul>
      <h2>Usage</h2>
      <div className="lead">
        Some components need to stay connected to the network, some browser API,
        or a third-party library, while they are displayed on the page. These
        systems aren’t controlled by React, so they are called external. To{" "}
        <a
          href="https://react.dev/learn/synchronizing-with-effects"
          target="_blank"
          rel="noreferrer"
        >
          connect your component to some external system,
        </a>{" "}
        call useEffect at the top level of your component.
      </div>
      <hr />
      <p>To write an Effect, follow these three steps:</p>
      <ol>
        <li>
          <b>Declare an Effect.</b> By default, your Effect will run after every
          render.
        </li>
        <li>
          <b>Specify the Effect dependencies.</b> Most Effects should only
          re-run when needed rather than after every render. For example, a
          fade-in animation should only trigger when a component appears.
          Connecting and disconnecting to a chat room should only happen when
          the component appears and disappears, or when the chat room changes.{" "}
        </li>
        <li>
          <b>Add cleanup if needed.</b> Some Effects need to specify how to
          stop, undo, or clean up whatever they were doing. For example,
          “connect” needs “disconnect”, “subscribe” needs “unsubscribe”, and
          “fetch” needs either “cancel” or “ignore”.{" "}
        </li>
      </ol>
      <hr />
      <p>You need to pass two arguments to useEffect:</p>
      <ol>
        <li>
          A setup function with setup code that connects to that system. <br />
          It should return a cleanup function with cleanup code that disconnects
          from that system.
        </li>
        <li>
          A list of dependencies including every value from your component used
          inside of those functions.
        </li>
      </ol>
      <p>
        <b>
          React calls your setup and cleanup functions whenever it’s necessary,
          which may happen multiple times:
        </b>
      </p>
      <ol>
        <li>
          Your setup code runs when your component is added to the page
          (mounts).
        </li>
        <li>
          After every re-render of your component where the dependencies have
          changed:
        </li>
        First, your cleanup code runs with the old props and state. <br />
        Then, your setup code runs with the new props and state.
        <li>
          Your cleanup code runs one final time after your component is removed
          from the page (unmounts).
        </li>
      </ol>
    </div>
  );
};
export default UseEffectHookOverview;
