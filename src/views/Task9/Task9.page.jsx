//#region IMPORTS
import React, { useEffect, useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
//#endregion

const imagesList = [
  {
    title: "photo1",
    src: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNjgxMjkwMTE5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
  },
  {
    title: "photo2",
    src: "https://images.unsplash.com/photo-1580691155297-c6dfa3ca61c4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNjgxMzEzMjM1&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
  },
  {
    title: "photo3",
    src: "https://images.unsplash.com/photo-1560155069-ad79768f2666?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8ZnJ1aXR8fHx8fHwxNjgxMzEzMjQ4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900",
  },
];

const nextPhotoHandler = (currentIndex, setIndex, objectLength) => {
  const newIndex = (currentIndex + 1) % objectLength;
  setIndex(newIndex);
};
const prevPhotoHandler = (currentIndex, setIndex, objectLength) => {
  const newIndex = (currentIndex - 1 + objectLength) % objectLength;
  setIndex(newIndex);
};

//#region MAIN COMPONENTS
const Task9 = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = !!anchorEl;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 37) {
        prevPhotoHandler(photoIndex, setPhotoIndex, imagesList.length);
      } else if (e.keyCode === 39) {
        nextPhotoHandler(photoIndex, setPhotoIndex, imagesList.length);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [photoIndex]);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (index) => {
    if (typeof index === "number") setPhotoIndex(index);
    setAnchorEl(null);
  };

  const { title, src } = imagesList[photoIndex];
  return (
    <Box className="w-full h-[100vh] flex items-center justify-center flex-col">
      <Box className="flex items-center justify-center">
        <Button
          id="basic-button"
          aria-controls={isOpen ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : undefined}
          onClick={handleClick}
        >
          Select Image
        </Button>
        <div>Image {photoIndex+1}</div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => handleClose(0)}>Image 1</MenuItem>
          <MenuItem onClick={() => handleClose(1)}>Image 2</MenuItem>
          <MenuItem onClick={() => handleClose(2)}>Image 3</MenuItem>
        </Menu>
      </Box>
      <img
        src={src}
        alt={title}
        onClick={() =>
          nextPhotoHandler(photoIndex, setPhotoIndex, imagesList.length)
        }
      />
    </Box>
  );
};
//#endregion

export default Task9;
