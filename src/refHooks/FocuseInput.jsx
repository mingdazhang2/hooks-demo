import React, { useRef } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const FocuseInput = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div className="note mt-4">
        <h1>Manipulating the DOM</h1>
        <p>
          It’s particularly common to use a ref to manipulate the DOM. React has
          built-in support for this.
        </p>
        <p> First, declare a ref object with an initial value of null.</p>
        <p>
          Then pass your ref object as the ref attribute to the JSX of the DOM
          node you want to manipulate.
        </p>
        <p>
          After React creates the DOM node and puts it on the screen, React will
          set the current property of your ref object to that DOM node. Now you
          can access the input’s DOM node and call methods like focus():
        </p>

        <p>
          React will set the current property back to null when the node is
          removed from the screen. Read more about{" "}
          <a href="/learn/manipulating-the-dom-with-refs" target="_blank">
            manipulating the DOM with refs.
          </a>
        </p>

        <h2>Read or write refs from event handlers</h2>
        <p>In this example, clicking the button will focus the input:</p>

        <div className="d-flex mb-4">
          <input ref={inputRef} />
          <button onClick={handleClick}>Focus the input</button>
        </div>
        <CopyBlock
          language="javascript"
          showLineNumbers={true}
          codeBlock
          theme={googlecode}
          text={codeSnippet}
        />
      </div>
    </>
  );
};
export default FocuseInput;

const codeSnippet = `import React, { useRef } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const FocuseInput = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
        <div className="d-flex mb-4">
          <input ref={inputRef} />
          <button onClick={handleClick}>Focus the input</button>
        </div>
    </>
  );
};
export default FocuseInput;
`;
