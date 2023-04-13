//#region IMPORTS
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
//#endregion


const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#8f3fb5',
    },
    secondary: {
      main: '#f5b300',
    },
  },
});

//#region MAIN COMPONENTS
const Task41 = () => {
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
    <ThemeProvider theme={theme}>
      <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 px-6 py-8 text-center bg-white rounded">
        <VpnKeyIcon color="primary" />
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
    </ThemeProvider>
  );
};
//#endregion

export default Task41;
