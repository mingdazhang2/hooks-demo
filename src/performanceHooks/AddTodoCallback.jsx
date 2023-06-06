import React, { useState, useCallback, memo } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";

// import Todos from "./Todos";
const AddTodoCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Default todo", "Default todo 2"]);

  // const addTodo = () => {
  //   setTodos([...todos, "New Todo"]);
  // };

  const addTodoCallback = useCallback(() => {
    setTodos([...todos, "New Todo"]);
  }, [todos]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
      <h2>My Todos</h2>
      <Todos todos={todos} addTodo={addTodoCallback} />
      <CopyBlock
        language="javascript"
        showLineNumbers={true}
        codeBlock
        theme={googlecode}
        text={codeSnippet}
      />
      <h2>Note:</h2>
    </>
  );
};
export default AddTodoCallback;
const Todos = memo(function Todos({ todos, addTodo }) {
  console.log("child render");
  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
});
const codeSnippet = `import React, { useState, useCallback, memo } from "react";
// Has to use memo to wrap the function to make useCallback work
// import Todos from "./Todos";
const AddTodoCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Default todo", "Default todo 2"]);

  // const addTodo = () => {
  //   setTodos([...todos, "New Todo"]);
  // };

  const addTodoCallback = useCallback(() => {
    setTodos([...todos, "New Todo"]);
  }, [todos]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
      <h2>My Todos</h2>
      <Todos todos={todos} addTodo={addTodoCallback} />
      <CopyBlock
        language="javascript"
        showLineNumbers={true}
        codeBlock
        theme={googlecode}
        text={codeSnippet}
      />
      <h2>Note:</h2>
    </>
  );
};
export default AddTodoCallback;
const Todos = memo(function Todos({ todos, addTodo }) {
  console.log("child render");
  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
});
`;
