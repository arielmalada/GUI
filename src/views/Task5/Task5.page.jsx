//#region IMPORTS
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { TextField, Modal } from "@mui/material";
import Select from "react-select";
//#endregion

//#region MAIN COMPONENTS
const Task5 = () => {
  const petTypeList = [
    { value: "cat", label: "Cat" },
    { value: "dog", label: "Dog" },
    { value: "Bird", label: "Bird" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const handlePetNameChange = (event) => {
    setPetName(event.target.value);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleHelloButton = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 px-6 py-8 text-center text-black bg-white rounded">
        <Typography variant="h4" className="text-black">
          Welcome to the your pet house
        </Typography>
        <div className="flex flex-col items-center w-48 gap-2 ">
          <TextField label="Pet Name" onChange={handlePetNameChange} />
          <Select
            options={petTypeList}
            className="w-full"
            onChange={(selected) => {
              setPetType(selected.value);
            }}
          />
        </div>
        <Button onClick={handleHelloButton} variant="contained">
          Say Hello
        </Button>
        <Modal
          open={isModalOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-96">
            <div className="flex flex-col items-center justify-center px-4 py-6 text-black bg-white rounded">
              <Typography id="modal-modal-type" variant="h4" >
                Hi {petName}
              </Typography>
              <Typography id="modal-modal-description">
                you're a nice {petType}
              </Typography>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
//#endregion

export default Task5;
