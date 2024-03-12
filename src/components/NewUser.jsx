import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SideBar";

function NewUser() {
  const [name, setName] = useState("");
  const [pictures, setPictures] = useState([]);
  const [pictureUrls, setPictureUrls] = useState([]);
  const navigate = useNavigate();

  const handleNameChange = (event) => setName(event.target.value);
  const handlePicturesChange = (event) => {
    setPictures(event.target.files);
    setPictureUrls(Array.from(event.target.files).map(file => URL.createObjectURL(file)));
  };
  const handleSave = () => {
    // Implement your logic to save the new user here
    navigate.push("/user"); // Redirect to the user page
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
            <img className="m-3" key={index} src={url} alt="Preview" style={{ width: '100px', height: '100px' }} />
          ))}
            </div>
            <div class="mt-4">
              <button
                className="btn btn-dark ml-auto  fw-bold"
                onClick={() => navigate("/")}
              >
                Back
              </button>

              <button
                className="btn btn-dark ml-auto  fw-bold mx-2"
                onClick={handleSave}
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
