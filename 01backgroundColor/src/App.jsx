import { useState } from "react";
import './App.css'
function App() {

  const[bgColor,setbgColor] =useState("white");
  console.log(bgColor)

  document.getElementById("root").style.backgroundColor=bgColor

  return (
    <div>
      <div className="nav" style={{backgroundColor:bgColor}}>
        <button onClick={()=>setbgColor("red")}>Red</button>
        <button onClick={()=>setbgColor("blue")}>Blue</button>
        <button onClick={()=>setbgColor("aqua")}>Aqua</button>
        <button onClick={()=>setbgColor("green")}>Green</button>
        <button onClick={()=>setbgColor("yellow")}>Yellow</button>
      </div>
    </div>
  );
}

export default App ;
