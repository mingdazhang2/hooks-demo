import React, { useRef, useState, useEffect } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const VideoPlayerDemo = () => {
  const videObjRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  //play(), pause() are video tag object functions

  useEffect(() => {
    // If the code is not in useEffect, the page will crash when refresh the page.
    if (isPlaying) {
      videObjRef.current.play(); // Calling these while rendering isn't allowed.
      console.log("Calling video.play()");
    } else {
      videObjRef.current.pause(); // Also, this crashes.
      console.log("Calling video.pause()");
    }
  }, [isPlaying]);
  return (
    <>
      <div
        className="my-5"
        style={{ display: "flex", flexDirection: "column", width: "320px" }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <video
          ref={videObjRef}
          width="320"
          height="240"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          loop
          playsInline
        />
        <button
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <CopyBlock
        language="javascript"
        showLineNumbers={true}
        codeBlock
        theme={googlecode}
        text={codeSnippet}
      />
      <div className="note">
        <h3>Note:</h3>
        <div></div>
        <p>
          The reason the code(without in Effect) isn’t correct is that it tries
          to do something with the DOM node during rendering. In React,{" "}
          <a
            href="https://react.dev//learn/keeping-components-pure"
            target="_blank"
            rel="noreferrer"
          >
            rendering should be a pure calculation
          </a>{" "}
          of JSX and should not contain side effects like modifying the DOM.
        </p>

        <p>
          Moreover, when VideoPlayer is called for the first time,{" "}
          <b>
            its DOM does not exist yet! There isn’t a DOM node yet to call
            play() or pause() on,
          </b>{" "}
          because React doesn’t know what DOM to create until you return the
          JSX.
        </p>

        <p>
          The solution here is to wrap the side effect with useEffect to move it
          out of the rendering calculation:
        </p>
        <p>
          <b>
            By wrapping the DOM update in an Effect, you let React update the
            screen first. Then your Effect runs.
          </b>
        </p>
        <p>
          When your VideoPlayer component renders (either the first time or if
          it re-renders), a few things will happen. First, React will update the
          screen, ensuring the video tag is in the DOM with the right props.
          Then React will run your Effect. Finally, your Effect will call play()
          or pause() depending on the value of isPlaying.
        </p>

        <p>
          Press Play/Pause multiple times and see how the video player stays
          synchronized to the isPlaying value:
        </p>
      </div>
    </>
  );
};
export default VideoPlayerDemo;
const codeSnippet = `import React, { useRef, useState, useEffect } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const VideoPlayerDemo = () => {
  const videObjRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  //play(), pause() are video tag object functions
  useEffect(() => {
    // If the code is not in useEffect, the page will crash when refresh the page.
    if (isPlaying) {
      videObjRef.current.play(); // Calling these while rendering isn't allowed.
      console.log("Calling video.play()");
    } else {
      videObjRef.current.pause(); // Also, this crashes.
      console.log("Calling video.pause()");
    }
  }, [isPlaying]);
  return (
    <>
      <div
        className="my-5"
        style={{ display: "flex", flexDirection: "column", width: "320px" }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <video
          ref={videObjRef}
          width="320"
          height="240"
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          loop
          playsInline
        />
        <button
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>    
    </>
  );
};
export default VideoPlayerDemo;
`;
