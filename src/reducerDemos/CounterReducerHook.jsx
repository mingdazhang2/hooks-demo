import React, { useReducer } from "react";

export const CounterReducerHook = () => {
  // 1. initial state
  const initialState = {
    counter: 0,
  };
  // 2. initial action object
  const action = {
    type: "increase",
  };
  // 3. Dispatch function
  const [state, dispatch] = useReducer(reducer, initialState);
  // 4. Reducer function
  function reducer(currentState, actionObj) {
    let newState;
    switch (actionObj.type) {
      case "increase":
        newState = { counter: currentState.counter + 1 };
        break;
      case "decrease":
        newState = { counter: currentState.counter - 1 };
        break;
      default:
        throw new Error();
    }
    return newState;
  }
  return (
    <div>
      <button className="" onClick={() => dispatch(action)}>
        increase
      </button>
      <button className="" onClick={() => dispatch({ type: "decrease" })}>
        decrease
      </button>
      {state.counter}
    </div>
  );
};
/**
 *  useReducer()
    The useReducer(reducer, initialState) hook accepts 2 arguments: the reducer function and the initial state. 
    The hook then returns an array of 2 items: the current state and the dispatch function.

    Step 1: Initial state
    "The initial state is the value the state is initialized with."
    For example, in the case of a counter state, the initial value is:
  
    const initialState = { 
        counter: 0 
    };

    Step 2: Action object
    "An action object is an object that describes how to update the state."
    Typically, the action object has a property type — a string describing what kind of state update the reducer must do.
    For example, an action object to increase the counter can look as follows:

    const action = {
        type: 'increase'
    };

    If the action object must carry some useful information (aka payload) to be used by the reducer, 
    then you can add additional properties to the action object.
    For example, here's an action object meant to add a new user to the users state array:

    const action = {
        type: 'add',
        user: { 
            name: 'John Smith',
            email: 'jsmith@mail.com'
        }
    };

    Step 3: Dispatch function
    "The dispatch is a special function that dispatches an action object."
    The dispatch function is created for you by the useReducer() hook:

    const [state, dispatch] = useReducer(reducer, initialState)

    Whenever you want to update the state (usually from an event handler or after completing a fetch request), 
    you simply call the dispatch function with the appropriate action object: dispatch(actionObject).
    In simpler terms, dispatching means a request to update the state.

    Step 4: Reducer function
    "The reducer is a pure function that accepts 2 parameters: the current state and an action object. 
    Depending on the action object, the reducer function must update the state in an immutable manner, 
    and return the new state."

    function reducer(currentState, action) {
        let newState;
        switch (action.type) {
            case 'increase':
            newState = { counter: currentState.counter + 1 };
            break;
            case 'decrease':
            newState = { counter: currentState.counter - 1 };
            break;
            default:
            throw new Error();
        }
        return newState;
    }
 */
