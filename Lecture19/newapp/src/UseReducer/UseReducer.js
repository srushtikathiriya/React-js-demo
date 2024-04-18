import React,{useReducer} from 'react'

let initialArg = 0;
const reducer = (state,action) =>{
    if(action.type == "increment"){
        return state + 1
    }
    else if(action.type == "decrement"){
        return state -1
    }
    return state;
}
const UseReducer = () => {
    const[state,dispatch] = useReducer(reducer,initialArg);
    return (
    <div>
      {state}
      <br/>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
    </div>
  )
}

export default UseReducer
