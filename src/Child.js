import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
//<!-- additional function created for child event listener -- Q: How come "handleClick" does not need to be reference in the Parent component?-->
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  // return (
  //   <div 
  //   onClick = {handleClick}
  //   className = "child"
  //   style ={{background:color}}
  //   />
  // );
  return (
  <div  
    className="child" 
    style={{ backgroundColor: color }} 
    onClick= {handleClick, onChangeColor}
  />
  );
}

export default Child;
