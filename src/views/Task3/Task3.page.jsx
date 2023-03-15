//#region IMPORTS
import React from "react";
import { Button, Typography } from "@mui/material";
//#endregion

//#region MAIN COMPONENTS
const Task3 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] text-center gap-6">
      <Typography variant="h4">Find This Project on</Typography>
      <div className="flex gap-2 items-center">
        <Button href="https://github.com/arielmalada/GUI">Github Repository</Button>
        <Button href="https://arielmalada.github.io/gui">Github Pages</Button>
      </div>
    </div>
  );
};
//#endregion

export default Task3;
