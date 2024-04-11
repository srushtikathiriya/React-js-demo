import React,{useContext} from 'react'
import { Context1 } from "../App";

const ComC = () => {
    const name = useContext(Context1)
  return (
    <div>
      <h1>My name is... {name}</h1>
    </div>
  )
}

export default ComC;
