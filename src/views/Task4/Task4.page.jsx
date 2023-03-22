//#region IMPORTS
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
//#endregion

//#region MAIN COMPONENTS
const Task4 = () => {
  const [isLocked,setIsLocked] = useState(false)
  const [passCode, setPassCode] = useState("0000");
  const inputCodeHandler = () => {
    // handle keydown and the maxlength
    // set each input field to the index of the passcode
    return null;
  };
  const setPassCodeHandler = () => {
    // do something
    setIsLocked(true)
    return null;
  }
  const unlock = () => {
    // check the passcode and unlock if it's matched
    setIsLocked(false)
  }
  let buttonLock;
  if (!isLocked) {
    buttonLock = <Button variant="contained" onClick={setPassCodeHandler}>Set Passcode</Button>;
  } else {
    buttonLock = <Button variant="contained" onClick={unlock}>Unlock</Button>;
  }
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 px-6 py-8 text-center bg-white rounded">
        <Typography variant="h4" className="text-black">Set your passcode</Typography>
        <div className="flex items-center w-48 gap-2 ">
          
          <TextField variant="outlined" maxlength="1" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onChange={inputCodeHandler} />
          <TextField variant="outlined" maxlength="1" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onChange={inputCodeHandler}  />
          <TextField variant="outlined" maxlength="1" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onChange={inputCodeHandler} />
          <TextField variant="outlined" maxlength="1" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onChange={inputCodeHandler}  />
        </div>
        {buttonLock}
      </div>
    </div>
  );
};
//#endregion

export default Task4;
