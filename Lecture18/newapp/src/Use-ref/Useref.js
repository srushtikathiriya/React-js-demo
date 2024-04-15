import React,{useRef} from 'react'

function Useref() {
    const ref =useRef();
    console.log(ref,"ref");

    const handleref = () =>
    {
        // ref.current.focus();
        ref.current.style.color="red";
        // ref.current.style.display="none";
    }
  return (
    <div>
        <input type="text" ref={ref}/>
        <button onClick={handleref}>Click Me</button>
    </div>
  )
}

export default Useref
