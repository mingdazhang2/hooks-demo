import React from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const UseRefHookOverview = () => {
  return (
    <div>
      <h1>useRef(initialValue)</h1>
      <div className="lead">
        useRef is a React Hook that lets you reference a value that’s not needed
        for rendering.
      </div>
      <h2>Reference</h2>
      <p>Call useRef at the top level of your component to declare a ref.</p>
      <div>
        <h3>Parameters</h3>
        <p>
          initialValue: The value you want the ref object’s current property to
          be initially. It can be a value of any type. This argument is ignored
          after the initial render.
        </p>
        <h3>Returns</h3>
        <p>useRef returns an object with a single property:</p>
        <p>
          current: Initially, it’s set to the initialValue you have passed. You
          can later set it to something else. If you pass the ref object to
          React as a ref attribute to a JSX node, React will set its current
          property. On the next renders, useRef will return the same object.
        </p>
        <h3>Caveats</h3>
        <ul>
          <li>
            You can mutate the ref.current property. Unlike state, it is
            mutable. However, if it holds an object that is used for rendering
            (for example, a piece of your state), then you shouldn’t mutate that
            object.
          </li>
          <li>
            When you change the ref.current property, React does not re-render
            your component. React is not aware of when you change it because a
            ref is a plain JavaScript object.
          </li>

          <li>
            Do not write or read ref.current during rendering, except for
            initialization. This makes your component’s behavior unpredictable.
          </li>
          <li>
            In Strict Mode, React will call your component function twice in
            order to help you find accidental impurities. This is
            development-only behavior and does not affect production. Each ref
            object will be created twice, but one of the versions will be
            discarded. If your component function is pure (as it should be),
            this should not affect the behavior.
          </li>
        </ul>
        <h3>Note</h3>
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
