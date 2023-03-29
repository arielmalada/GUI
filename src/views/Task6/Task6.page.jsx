//#region IMPORTS
import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
//#endregion

//#region MAIN COMPONENTS
const Task6 = () => {
  const [canvasSize, setCanvasSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const canvasRef = useRef(null);

  useEffect(() => {
    const handleResize = () =>
      setCanvasSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const baseRectangle = (ctx) => ctx.fillRect(50, 50, 100, 75);
    const ctx = canvasRef.current.getContext("2d");
    // first rectangle
    ctx.fillStyle = "#fff";
    baseRectangle(ctx);

    // second rectangle
    ctx.save();
    ctx.fillStyle = "purple";
    ctx.transform(2, 0.5, -0.5, 2, 30, 10);
    // transform(a, b, c, d, e, f) https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform
    baseRectangle(ctx);
    ctx.restore();
  },[canvasSize]);
  return (
    <Box>
      <canvas
        width={canvasSize[0]}
        height={canvasSize[1]}
        ref={canvasRef}
        style={{ cursor: "none", zIndex: 1, position: "fixed" }}
      />
    </Box>
  );
};
//#endregion

export default Task6;
