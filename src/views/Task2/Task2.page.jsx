//#region IMPORTS
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//#endregion

//#region MAIN COMPONENTS
const Task2 = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("01");
  const [seconds, setSeconds] = useState("00");
  const timerHandler = () => {
    // do something
    return null;
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] text-center gap-6">
      <Typography variant="h4">Timer</Typography>
      <div className="flex gap-2 items-center">
        <Button variant="outlined">{hours}</Button>
        <span>:</span>
        <Button variant="outlined">{minutes}</Button>
        <span>:</span>
        <Button variant="outlined">{seconds}</Button>
      </div>
      <Button onClick={timerHandler} variant="contained">
        Set Timer
      </Button>
    </div>
  );
};
//#endregion

export default Task2;
