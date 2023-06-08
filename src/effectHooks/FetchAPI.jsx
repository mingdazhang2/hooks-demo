import React, { useState, useEffect } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";

const FetchAPI = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`, {
      signal: signal,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      //  .then((data) => console.log(data));
      .then((data) => setItems(data));
    //   .catch((err) => setError(err));
    return () => {
      console.log("abort");
      controller.abort();
    };
  }, [resourceType]);

  return (
    <div className="useEffectDemo">
      <h2>useState Fetch API Demo</h2>
      <CopyBlock
        language="javascript"
        showLineNumbers={true}
        codeBlock
        theme={googlecode}
        text={codeSnippet}
      />
      <hr />
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <div>{resourceType}</div>
      <div>
        {items.map((item) => {
          return <div key={item.id}>{JSON.stringify(item)}</div>;
        })}
      </div>
    </div>
  );
};
export default FetchAPI;
const codeSnippet = `import React, { useState, useEffect } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";

const FetchAPI = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(\`https://jsonplaceholder.typicode.com/$\{resourceType}\`, {
      signal: signal,
    })
      .then((res) => res.json())
      //  .then((data) => console.log(data));
      .then((data) => setItems(data));
    //   .catch((err) => setError(err));
    return () => {
      console.log("abort");
      controller.abort();
    };
  }, [resourceType]);

  return (
    <div className="useEffectDemo">
      <h2>useState Fetch API Demo</h2>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <div>{resourceType}</div>
      <div>
        {items.map((item) => {
          return <div key={item.id}>{JSON.stringify(item)}</div>;
        })}
      </div>
    </div>
  );
};
export default FetchAPI;`;
