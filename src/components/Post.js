// Post component

import React, { useState, useEffect } from "react";
export default function Post() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
   useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    //setTimeout(function() {
      fetch("https://jsonplaceholder.typicode.com/posts", { signal: signal })
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => setError(err));
     //}, 1000)
  }, []);
  return (
    <div>
      {!error ? (
        posts.map((post) => (
          <ul key={post.id}>
            <li>{post.title}</li>
          </ul>
        ))
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}