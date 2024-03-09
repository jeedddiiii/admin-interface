// Overview.js
import React from "react";
import Sidebar from "./SideBar";
import Userlist from "./Userlist";
function Overview() {
  return (
    <div className="container-side">
      <Sidebar />
      <div className="content">
        <div class="flex-container">
          <input type="text" placeholder="search user" class="form-control" />
          <button
            className="btn btn-success"
            onClick={() => handleEdit(user.id)}
          >
            ADD
          </button>
        </div>

        <Userlist />
      </div>
    </div>
  );
}

export default Overview;
