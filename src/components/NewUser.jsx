import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function NewUser() {
  const [name, setName] = useState("");
  const [pictures, setPictures] = useState([]);
  const [pictureUrls, setPictureUrls] = useState([]);
  const navigate = useNavigate();

  const handleNameChange = (event) => setName(event.target.value);
  const handlePicturesChange = (event) => {
    setPictures(event.target.files);
    setPictureUrls(
      Array.from(event.target.files).map((file) => URL.createObjectURL(file))
    );
  };
  const handleSave = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("name", name);
    if (pictures.length > 0) {
      formData.append("file", pictures[0]); // Append only the first file
    }
    try {
      console.log("handleSave is called");
      formData.append("name", name);
      pictures.forEach((picture, index) => {
        formData.append("file", picture, `picture${index}`);
      });
    } catch (error) {
      console.error("An error occurred before the fetch call:", error);
    }

    console.log("About to make the fetch call");
    const response = await fetch("http://localhost:8080/new-user", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const message = await response.text();
      console.error(`An error has occurred: ${response.status}, ${message}`);
      throw new Error(message);
    }

    navigate("/");
  };

  return (
    <div className="container-side">
      <Sidebar />

      <div className="content ">
        <div className="d-flex justify-content-between pb-2">
          <p className="fs-5 fw-bold">New User</p>
        </div>
        <div className="pt-4 shadow p-3 mb-5 bg-body-tertiary rounded">
          <form>
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Image</label>
              <input
                type="file"
                class="form-control"
                multiple
                onChange={handlePicturesChange}
              />
              {pictureUrls.map((url, index) => (
                <img
                  className="m-3"
                  key={index}
                  src={url}
                  alt="Preview"
                  style={{ width: "100px", height: "100px" }}
                />
              ))}
            </div>
            <div>
              <button
                className="btn btn-dark ml-auto  fw-bold me-2"
                onClick={() => navigate("/")}
              >
                Back
              </button>

              <button
                className="btn btn-dark ml-auto  fw-bold"
                onClick={(event) => handleSave(event)}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
