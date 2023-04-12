//#region IMPORTS
import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
//#endregion

const colorsArray = [
  { color: "#FF0000", title: "Red" },
  { color: "#00FF00", title: "Green" },
  { color: "#0000FF", title: "Blue" },
  { color: "#FFA500", title: "Orange" },
  { color: "#800080", title: "Purple" },
];

//#region MAIN COMPONENTS
const Task8 = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const divRef = useRef(null);
  const handleClick = () => {
    const newIndex = (colorIndex + 1) % colorsArray.length;
    setColorIndex(newIndex);
    divRef.current.style.backgroundColor = colorsArray[newIndex].color;
    divRef.current.textContent = colorsArray[newIndex].title;
  };
  return (
    <Box className="w-full h-[100vh] flex items-center justify-center" onClick={handleClick}>
      <div ref={divRef}>
        click to change color
      </div>
    </Box>
  );
};
//#endregion

export default Task8;
