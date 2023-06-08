import React from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
import useFetch from "../ownHooks/useFetch";
const UseFetchDemo = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      <div className="lead">
        When you have component logic that needs to be used by multiple
        components, we can <b>extract that logic </b>to a custom Hook. Custom
        Hooks start with "use". Example: <b>useFetch.</b>
        <br />
        The fetch logic may be needed in other components as well, so we will
        extract that into a custom Hook. Move the fetch logic to a new file to
        be used as a custom Hook:
      </div>
      {/* <div className="o-x-h"> */}
      {data &&
        data.map((item) => {
          // return <p key={item.id}>{item.title}</p>;
          console.log(item.title);
        })}
      {/* </div> */}
      <CopyBlock
        language="javascript"
        showLineNumbers={true}
        codeBlock
        theme={googlecode}
        text={codeSnippet}
      />
      <hr />
      <CopyBlock
        language="javascript"
        showLineNumbers={true}
        codeBlock
        theme={googlecode}
        text={codeSnippet2}
      />
    </>
  );
};
export default UseFetchDemo;
const codeSnippet = `import React from "react";
import useFetch from "../ownHooks/useFetch";
const UseFetchDemo = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      {data &&
        data.map((item) => {
          // return <p key={item.id}>{item.title}</p>;
          console.log(item.title);
        })}
    </>
  );
};`;

const codeSnippet2 = `import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);
  return data;
};
export default useFetch;
`;
