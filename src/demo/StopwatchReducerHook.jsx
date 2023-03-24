import React, { useEffect, useReducer,useRef } from 'react'

export const StopwatchReducerHookDemo = () => {
    const initialState ={
        isRunning:false,
        time:0,
    }
   
    const stopWatchReducer = (currentState, actionObj)=>{
        switch(actionObj.type){
            case 'start': return {
                ...currentState, isRunning:true,
            };
            case 'stop': return {
                ...currentState, isRunning:false,
            };
            case 'reset': return {
                time:0, isRunning:false,
            };
            case 'tick': return {
                ...currentState,
                time: currentState.time + 0.01
            };
            default: throw new Error()
        }
    }

    const [state, dispatch] = useReducer(stopWatchReducer, initialState); 
    const idRef = useRef(0);  
    useEffect(()=>{
        if (!state.isRunning) {
            return;
        }
        const currentTime = setInterval(()=>dispatch({ type: 'tick' }),10 )  
        return ()=>{
            clearInterval(currentTime);
            dispatch({ type: 'stop' })
        }
    },[state.isRunning])
    return (
    <div>
        <div> StopWatch: {parseFloat(state.time).toFixed(2)}s </div>
        <button onClick={() => dispatch({ type: 'start' })}>
            Start
        </button>
        <button onClick={() => dispatch({ type: 'stop' })}>
            Stop
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>
            Reset
        </button>
    </div>
    )
}
