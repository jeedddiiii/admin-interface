import React from "react";
import { Link } from "react-router-dom";

function Userlist() {
  // Sample user data
  const users = [
    { id: 1, username: "SWK" },
    { id: 2, username: "SRS" },
    { id: 3, username: "KYS" },
  ];

  return (
    <div className="">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <th scope="row">{user.id}</th>
              <td>{user.username}</td>
              <td>
                <button
                  className="btn btn-warning mx-1"
                  onClick={() => handleEdit(user.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Userlist;
