//import logo from './logo.svg';
import './App.css';
import Example from './demo/Example'
import Foo from './demo/Foo'

import React, { useState } from "react";
import Post from "./components/Post";
import {StopWatch} from "./components/StopWatch";
function App() {
  const [show, setShow] = useState(false);
  const showPost = () => {
    // toggles posts onclick of button
    setShow(!show);
  };
  return (
    <div className="App">
      <StopWatch />
      {/* <div>
        <button onClick={showPost}>Show Posts</button>
        {show && <Post />}
      </div> */}
      {/* <Example/> */}
      {/* <Foo/> */}
    </div>
  );
}

export default App;
