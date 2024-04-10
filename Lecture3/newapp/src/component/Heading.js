import React from "react";

function Heading(){
    let style = {
        color:"red"
    }
    return(
        <>
        <h1 style={style}>This is heading tag.....</h1>  
        <h1 className="mt-5 text-center">This is heading tag.....</h1>  
        </>
    )
    
    
}
export default Heading;