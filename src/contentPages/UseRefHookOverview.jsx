import React from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const UseRefHookOverview = () => {
  return (
    <div>
      <h1>useRef</h1>
      <div className="lead">
        useRef is a React Hook that lets you reference a value that’s not needed
        for rendering.
      </div>
      <h2>Usage</h2>
      <div>
        <p>
          Call useRef at the top level of your component to declare one or more
          refs.
        </p>

        <p>
          useRef <b>returns a ref object with a single current property </b>
          initially set to the initial value you provided.
        </p>
        <p>
          On the next renders, useRef will return the same object. You can
          change its current property to store information and read it later.
          This might remind you of state, but there is an important difference.
        </p>
        <p>
          <b>Changing a ref does not trigger a re-render.</b> This means refs
          are perfect for storing information that doesn’t affect the visual
          output of your component. So refs are not appropriate for storing
          information you want to display on the screen. Use state for that
          instead.
        </p>
        <p>
          For example, if you need to store an interval ID and retrieve it
          later, you can put it in a ref. To update the value inside the ref,
          you need to manually change its current property. Later, you can read
          that interval ID from the ref so that you can call clear that interval
        </p>
        <p>By using a ref, you ensure that:</p>
        <ul>
          <li>
            You can <b>store information</b> between re-renders (unlike regular
            variables, which reset on every render).
          </li>
          <li>
            Changing it <b>does not trigger a re-render</b> (unlike state
            variables, which trigger a re-render).
          </li>
          <li>
            The <b>information is local</b> to each copy of your component
            (unlike the variables outside, which are shared).
          </li>
        </ul>
      </div>
      <div className="note mt-4">
        <p>
          <b>Do not write or read ref.current during rendering.</b>
        </p>

        <p>
          React expects that the body of your component{" "}
          <a
            href="https://react.dev//learn/keeping-components-pure"
            target="_blank"
            rel="noreferrer"
          >
            behaves like a pure function:
          </a>
        </p>

        <ul>
          <li>
            If the inputs (props, state, and context) are the same, it should
            return exactly the same JSX.
          </li>
          <li>
            Calling it in a different order or with different arguments should
            not affect the results of other calls.
          </li>
          <p>
            <b>
              Reading or writing a ref during rendering breaks these
              expectations.
            </b>
          </p>
        </ul>

        <p>
          Read or write refs from
          <b>
            event handlers(
            <a href="/ref-hook/useRef/interval-Demo">Interval Demo, </a>
            <a href="/ref-hook/useRef/manipulate-dom">
              Manipulating the DOM Demo
            </a>
            ) or <a href="/effect-hook/useEffect/update-title">effects</a>{" "}
            instead.
          </b>
        </p>
        <CopyBlock
          language="javascript"
          showLineNumbers={true}
          codeBlock
          theme={googlecode}
          text={codeSnippet}
        />
        <p>
          If you have to read or write something during rendering, use
          <b> state instead.</b>
        </p>

        <p>
          When you break these rules, your component might still work, but most
          of the newer features we’re adding to React will rely on these
          expectations. Read more about{" "}
          <a
            href="https://react.dev//learn/keeping-components-pure"
            target="_blank"
            rel="noreferrer"
          >
            keeping your components pure.
          </a>
        </p>
      </div>
    </div>
  );
};
export default UseRefHookOverview;
const codeSnippet = `function MyComponent() {
  // ...
  // 🚩 Don't write a ref during rendering
  myRef.current = 123;
  // ...
  // 🚩 Don't read a ref during rendering
  return <h1>{myOtherRef.current}</h1>;
}
You can read or write refs from event handlers or effects instead.

function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ You can read or write refs in effects
    myRef.current = 123;
  });
  // ...
  function handleClick() {
    // ✅ You can read or write refs in event handlers
    doSomething(myOtherRef.current);
  }
  // ...
}`;
