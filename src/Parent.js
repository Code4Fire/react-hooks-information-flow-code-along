import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
// <!-- this line tracks the color change state for the Parent component -->
  const [color, setColor] = useState(randomColor);
// <!-- setting up the variable to keep track of the color change in the Child component --->
  const [childrenColor, setChildrenColor] = useState("#FFF");

// <!--this function is to initiate the random color event/function -->
function handleChangeColor (newChildColor) {
  // const newRandomColor= getRandomColor();
  setColor(getRandomColor());
  setChildrenColor(newChildColor);
}
// <!-- return element stores the event function name -->
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color= {childrenColor} onChangeColor = {handleChangeColor}/>
      <Child color= {childrenColor} onChangeColor = {handleChangeColor}/>
    </div>
  );
}

export default Parent;
