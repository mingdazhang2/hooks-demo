import React, { useState, useMemo } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const AddTodoMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Default todo", "Default todo 2"]);
  //const calculation = ComplexCalc(count);
  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };
  const increment = () => {
    setCount((c) => c + 1);
  };
  const memoizedCalculation = useMemo(() => {
    return <ComplexCalc num={count} />;
  }, [count]);
  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
      <h2>Expensive Calculation</h2>
      {memoizedCalculation}
      <h2>My Todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <CopyBlock
        language="javascript"
        showLineNumbers={true}
        codeBlock
        theme={googlecode}
        text={codeSnippet}
      />
      <h2>Note:</h2>
      <div>
        The <b>ComplexCalc</b> function runs every time the "Add Todo" button is
        clicked because it is invoked within the <b>ExpensiveCalculation </b>
        component's render method. <b />
        In the <b>ExpensiveCalculation</b> component, the
        <b> ComplexCalc</b> component is rendered directly within the JSX
        markup, ComplexCalc num={count}. This means that every time the
        <b> ExpensiveCalculation</b> component is rendered, the{" "}
        <b>ComplexCalc</b> component is also rendered, resulting in the
        execution of the <b>ComplexCal</b>c function.
        <br />
        When the "Add Todo" button is clicked, the addTodo function is called,
        which updates the todos state by appending a new todo to the existing
        list. This state update triggers a re-render of the ExpensiveCalculation
        component, and as a result, the <b>ComplexCalc</b> component is
        re-rendered as well, causing the <b>ComplexCalc</b> function to execute
        again. Since the
        <b> ComplexCalc</b> component is part of the ExpensiveCalculation
        component's render tree, any state update or change in the
        ExpensiveCalculation component will cause a re-render of the{" "}
        <b>ComplexCalc</b> component. In this case, clicking the "Add Todo"
        button triggers a re-render, leading to the execution of the{" "}
        <b>ComplexCalc</b> function. If you want to avoid re-executing the
        expensive calculation unnecessarily, you can use memoization techniques
        like <b>useMemo</b> or <b>React.memo</b> to memoize the result of the{" "}
        <b>ComplexCalc</b> component and prevent unnecessary re-renders. By
        memoizing the component, it will only re-render when its dependencies
        (in this case, the <b>count</b> prop) change.
      </div>
    </>
  );
};
export default AddTodoMemo;
export const ComplexCalc = ({ num }) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  console.log("Calculating...Sorted");
  return <div>{num}</div>;
};

const codeSnippet = `import React, { useState, useMemo } from "react";
import { CopyBlock, googlecode } from "react-code-blocks";
const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Default todo", "Default todo 2"]);
  //const calculation = ComplexCalc(count);
  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };
  const increment = () => {
    setCount((c) => c + 1);
  };
  const memoizedCalculation = useMemo(() => {
    return <ComplexCalc num={count} />;
  }, [count]);
  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
      <h2>Expensive Calculation</h2>
      {memoizedCalculation}
      // <ComplexCalc num={count} />
      <h2>My Todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};
export default ExpensiveCalculation;
export const ComplexCalc = ({ num }) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  console.log("Calculating...Sorted");
  return <div>{num}</div>;
};
`;
