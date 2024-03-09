import React, { useState } from "react";
import FileInput from "./FileInput";
import ImageCropper from "./ImageCropper";
import Sidebar from "./SideBar";


function User() {
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImageAfterCrop] = useState("");

  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext("2d");

    let imageObj = new Image();
    imageObj.src = image;
    imageObj.onload = function () {
      context.drawImage(
        imageObj,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );
      const dataURL = canvasEle.toDataURL("image/jpeg");
      setImageAfterCrop(dataURL);
      setCurrentPage("img-cropped");
    };
  };

  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };

  return (
    <div className="container-side">
      <Sidebar />
      <label>
        Name: 
        <input type="text" name="" id="" />
      </label>
      {currentPage === "choose-img" ? (
        <FileInput onImageSelected={onImageSelected} />
      ) : currentPage === "crop-img" ? (
        <ImageCropper
          image={image}
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
        />
      ) : (
        <div>
          <img src={imgAfterCrop} alt="img-cropped" />
          <div />
          <button
            onClick={() => {
              setCurrentPage("crop-img");
            }}
          >
            Crop
          </button>
          <button
            onClick={() => {
              setCurrentPage("choose-img");
            }}
            setImage={""}
          >
            New Image
          </button>
        </div>
      )}
    </div>
  );
}

export default User;
