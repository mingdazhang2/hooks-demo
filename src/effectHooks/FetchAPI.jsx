import React, { useState, useEffect, useMemo } from "react";

const FetchAPI = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const signal = controller.signal;
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`, {
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
      <div>
        <p className="erro">
          The error "Too many re-renders. React limits the number of renders to
          prevent an infinite loop" occurs for multiple reasons:
        </p>
        <p className="eg">
          <code>
            {`<button onClick={setResourceType("posts")}>Posts</button>`}
          </code>
          <br />
          <code>
            {`<button onClick={() => setResourceType("users")}>Users</button>`}
          </code>
        </p>
        <p className="ref">
          <a href="https://bobbyhadz.com/blog/react-too-many-re-renders-react-limits-the-number">
            Why n how to fix
          </a>
        </p>
      </div>
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
