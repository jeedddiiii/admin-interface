import React, { useEffect, useState } from "react";

function UserDropdown() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/") // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  return (
    <div>
      <div className="dropdown">
        <button
          class="btn btn-outline-dark dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Name
        </button>
        <ul className="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Unknown
            </a>
          </li>
          {users.map((user, index) => (
            <li>
              <a class="dropdown-item" key={index} href="#">
                {user.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserDropdown;
