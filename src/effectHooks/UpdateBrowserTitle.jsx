import React, { useState, useEffect, useRef } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const UpdateBrowserTitle = () => {
  const [number, setNumber] = useState(0);
  // Update the document title using the browser API
  document.title = ` ${number} times`;
  const intervalRef = useRef(null);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    //document.title = ` ${number} times`;
    console.count("useEffect runs");
    intervalRef.current = setInterval(() => {
      setNumber((pre) => pre + 1);
    }, 1000);
    // Clean up function "return .."
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <>
      <div>
        <h1>Update Browser Title</h1>
        <h2>Read or write refs from useEffect</h2>
        <p>Counter {number} </p>
      </div>
      <CopyBlock
        language="javascript"
        showLineNumbers={true}
        codeBlock
        theme={googlecode}
        text={codeSnippet}
      />
    </>
  );
};
export default UpdateBrowserTitle;

const codeSnippet = `import React, { useState, useEffect, useRef } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const UpdateBrowserTitle = () => {
  const [number, setNumber] = useState(0);
  // Update the document title using the browser API
  document.title = \` \${number} times\`;
  const intervalRef = useRef(null);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    //document.title = \` \${number} times\`;
    console.count("useEffect runs");
    intervalRef.current = setInterval(() => {
      setNumber((pre) => pre + 1);
    }, 1000);
    // Clean up function "return .."
    return () => clearInterval(intervalRef.current);
  }, []);
  return (
    <>
      <div>
      <h2>Read or write refs from useEffect</h2>
      <p>Counter {number} </p>
      </div>
      <CopyBlock
        language="javascript"
        showLineNumbers={true}
        codeBlock
        theme={googlecode}
        text={codeSnippet}
      />
    </>
  );
};
export default UpdateBrowserTitle;`;
