import React from "react";
import Img from "./Asset/pexels-photo-255379.webp";

function Greeting() {
    const time =  new Date(2024,12,27,11).getHours();
    let Greeting = "";
    if (time < 12) {
        Greeting = "Good morning"
    }
    else if (time >= 12 && time < 19) {
        Greeting = "Good evening"
    }
    else 
    {
        Greeting = "Good night"
    }
        return <div className="flex justify-center items-center">
            <img src={Img} alt="image" className="h-[550px] w-[80%]"/>
            <h1 className="text-red-600 hover:text-blue-700 font-bold text-center text-5xl absolute ring-4 ring-offset-4 ring-sky-800 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 p-12 rounded-lg animate-pulse">Hello Sir,{Greeting}</h1>
        </div>
}
export default Greeting;