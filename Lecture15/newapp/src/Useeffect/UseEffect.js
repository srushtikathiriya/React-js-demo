import React,{useEffect,useState} from 'react';

const UseEffect = ({}) => {
  const[increment,setIncrement]=useState(0);
  const[decrement,setdecrement]=useState(0);

  // useEffect(()=>{
  //   console.log("useEffect run every render");
  // });

  // useEffect(()=>{
  //   console.log("useEffect run one time when page is refresh or load time");
  // },[]);

  useEffect(()=>{
    console.log("useEffect run depend on dependancy");
  },[decrement]);

  const incrementFun=()=>{
    setIncrement(increment + 1);
  };
  const decrementFun=()=>{
    setdecrement(decrement - 1);
  }
  return (
    <div>
      <h3>useEffect</h3>
      <h1>{increment}</h1>
      <button onClick={incrementFun}>increment</button>
      <h1>{decrement}</h1>
      <button onClick={decrementFun}>decrement</button>
    </div>
  )
}

export default UseEffect;