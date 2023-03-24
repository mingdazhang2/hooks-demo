import React, {useState, useEffect, useMemo } from "react";

function MemoryHookDemo(){
    
  const [name,setName] = useState("");
  const [state,setState] = useState({
    name:"",
    selected:false,
    age:20,
    city:"chch",
  });
//useMemo
  const user = useMemo(
    ()=>({
      name:state.name,
      selected:state.selected,
    }),[state.name,state.selected]
  )
  useEffect(() => { 
    console.count("The state has changed, useEffect runs")
  },[user]);
  // Not using useMeom, change useEffect dependency to specific attributes
  // useEffect(() => { 
  //   console.count("The state has changed, useEffect runs")
  // },[state.name,state.selected]); 

  const handleAdd = ()=>{
    setState((prev)=>{return  {...prev,name} })
  }

  const handleSelect = ()=>{
    setState((prev)=>( {...prev, selected:true}))
  }
    return (
        <div>
          
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <button onClick={handleAdd}>Add Name</button>
            <button onClick={handleSelect}>Select</button>
        </div>
    ) 
}

export default MemoryHookDemo;