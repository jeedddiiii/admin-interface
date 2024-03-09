import React, { useState } from "react";
import Cropper from "react-easy-crop";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageCropper = ({image, onCropDone, onCropCancel}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setApectRatio] = useState(4 / 3);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  return (
    <div className="cropper">
      <div>
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={aspectRatio}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              width: "100%",
              height: "80%",
              backgroundColor: "white",
            },
          }}
        />
      </div>
      <div className="btn-container">
          <button onClick={onCropCancel}>
            Cancel
          </button>
          <button onClick={() => onCropDone(croppedArea)}>
            Done
          </button>
      </div>
    </div>
  );
};

export default ImageCropper;
