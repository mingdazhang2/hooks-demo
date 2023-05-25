import React, { useReducer } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const TodoReducerHook = () => {
  // 1. initial state
  const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];
  // 2. initial action object (directly initial in the returen.)
  const actionObje = {
    type: "",
    id: 0,
  };
  // 3. Reducer function
  const reducer = (currentState, actionObje) => {
    switch (actionObje.type) {
      case "COMPLETE":
        return currentState.map((todo) => {
          if (todo.id === actionObje.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      default:
        return false;
    }
  };
  // 4. Dispatch function
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <>
      <div className="my-5">
        {todos.map((todo) => (
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => dispatch({ type: "COMPLETE", id: todo.id })}
              />
              {todo.title}
            </label>
          </div>
        ))}
      </div>
      <CopyBlock
        language="javascript"
        showLineNumbers={true}
        onCopy
        codeBlock
        theme={googlecode}
        text={codeSnippet}
      />
    </>
  );
};
export default TodoReducerHook;
const codeSnippet = `import React, { useReducer } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
export const TodoReducerHook = () => {
  // 1. initial state
  const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
  ];
  // 2. initial action object (directly initial in the returen.)
  const actionObje = {
    type: "",
    id: 0,
  };
  // 3. Reducer function
  const reducer = (currentState, actionObje) => {
    switch (actionObje.type) {
      case "COMPLETE":
        return currentState.map((todo) => {
          if (todo.id === actionObje.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      default:
        return false;
    }
  };
  // 4. Dispatch function
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => dispatch({ type: "COMPLETE", id: todo.id })}
            />
            {todo.title}
          </label>
        </div>
      ))}

 
    </>
  );
};`;
