import React from "react";
import { createContext, useContext } from "react";
import { useState } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const DemoTheme = createContext(null);

const ContentHookOverview = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <h1>Content Hooks</h1>
      <div className="lead">
        <p>
          <em>Context</em> lets a component{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://react.dev/learn/passing-props-to-a-component"
          >
            receive information from distant parents without passing it as
            props.
          </a>{" "}
          For example, your app's top-level component can pass the current UI
          theme to all components below, no matter how deep.
        </p>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://react.dev/reference/react/useContext"
            >
              useContext
            </a>{" "}
            reads and subscribes to a context.
          </li>
        </ul>
      </div>
      <h2>Demo</h2>
      <DemoTheme.Provider value={theme}>
        <Panel title="Welcome" desc="This is description" />
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          Use dark mode
        </label>
      </DemoTheme.Provider>
      <CopyBlock
        language="javascript"
        showLineNumbers={false}
        codeBlock
        theme={googlecode}
        text={codeSnippet}
      />
    </div>
  );
};
export default ContentHookOverview;

const Panel = ({ title, desc }) => {
  const globalTheme = useContext(DemoTheme);

  const className = "panel-" + globalTheme;
  return (
    <section className={className}>
      <div className="lead">{title}</div>
      <div>{desc}</div>
    </section>
  );
};
const codeSnippet = `<DemoTheme.Provider value={theme}>
<Panel title="Welcome" desc="This is description" />
<label>
  <input
    type="checkbox"
    checked={theme === "dark"}
    onChange={(e) => {
      setTheme(e.target.checked ? "dark" : "light");
    }}
  />
  Use dark mode
</label>
</DemoTheme.Provider>

const Panel = ({ title, desc }) => {
  const globalTheme = useContext(DemoTheme);

  const className = "panel-" + globalTheme;
  return (
    <section className={className}>
      <div className="lead">{title}</div>
      <div>{desc}</div>
    </section>
  );
};`;
