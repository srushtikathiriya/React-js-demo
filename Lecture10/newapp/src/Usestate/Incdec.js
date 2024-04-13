import React, { useState } from "react";
import Hook from "../Usestate/Hook.css";

function Incdec() {
    const [count, setCount] = useState(0)
    const myFun = () => {
        // console.log("click");
        setCount(count + 1)
    }
    const myFun1 = () => {
        // console.log("click");
        setCount(count - 1)      
    }
    return (
        <>
            <div className="shadow">
                <h1 className="mt-5 mb-7 font-bold text-8xl">{count}</h1>
                <div className="flex justify-center">
                    <button className="relative p-0.5 me-5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md" onClick={myFun}>
                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                        <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white">Increment</span>
                        </span>
                    </button> 
                    <button className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md" onClick={myFun1}>
                        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                        <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white">Decrement</span>
                        </span>
                    </button>
                </div>
            </div>
        </>

    );
}

export default Incdec;
