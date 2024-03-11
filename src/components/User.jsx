import React from "react";
import Sidebar from "./SideBar";
import Userlist from "./Userlist";

function Overview() {
  return (
    <div className="container-side">
      <Sidebar />
      <div className="content ">
        <div className="d-flex justify-content-between pb-2">
          <p className="fs-5 fw-bold">User List</p>
          <button
            className="btn btn-dark ml-auto btn-sm fw-bold"
            onClick={() => handleEdit(user.id)}
          >
            + New User
          </button>
        </div>
        <div class="pt-4 shadow p-3 mb-5 bg-body-tertiary rounded">
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

export default Overview;
