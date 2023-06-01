import React from "react";

const UseEffectHookOverview = () => {
  return (
    <div>
      <h1>useEffect</h1>
      <div className="lead">
        useEffect is a React Hook that lets you synchronize a component with an
        external system.
      </div>
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
          A setup function with setup code that connects to that system. It
          should return a cleanup function with cleanup code that disconnects
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
        First, your cleanup code runs with the old props and state. Then, your
        setup code runs with the new props and state.
        <li>
          Your cleanup code runs one final time after your component is removed
          from the page (unmounts).
        </li>
      </ol>
    </div>
  );
};
export default UseEffectHookOverview;
