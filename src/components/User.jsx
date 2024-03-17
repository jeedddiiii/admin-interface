import React from "react";
import Sidebar from "./Sidebar";
import Userlist from "./Userlist";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function User() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
    // Add your component logic here
  }, [navigate, token]);

  return (
    <div className="container-side">
      <Sidebar />
      <div className="content ">
        
        <div class="pt-4 shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="d-flex justify-content-between pb-2 mx-3">
          <p className="fs-6 fw-bold">Users</p>
          <button
            className="btn btn-primary"
            style={{ fontSize: "0.9rem", fontWeight: "bold", backgroundColor: "#2499EF"}}
            onClick={() => navigate('/new-user')}
          >
            + New User
          </button>
        </div>
          <div class="mx-3 ">
            <input
              type="text"
              placeholder="search user"
              className="form-control p-2 mb-3"
            />
            <Userlist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
