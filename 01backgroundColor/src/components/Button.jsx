import { useState } from "react";


function Button({name,color}){
    const [bgColor, setbgColor] =useState("white");

    // console.log(bgColor)

    return(
        <>
            <button onClick={()=>setbgColor(color)} style={{backgroundColor:color}}>{name}</button>
        </>
    )
}

export default Button
