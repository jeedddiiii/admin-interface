import React from "react";
import SummaryChart from "./SummaryChart";
import Sidebar from "./SideBar";

function Summary() {
  return (
    <>
      <div className="container-side">
        <Sidebar />

        <div className="content" style={{ height: "550px" }}>
          <div class="dropdown">
            <button
              class="btn btn-outline-dark dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Month
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  January
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  February
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  March{" "}
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  April
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  May
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  June
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  July
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  August
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  September
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  October
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  November
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  December
                </a>
              </li>
            </ul>
          </div>
          <SummaryChart />
        </div>
      </div>
    </>
  );
}

export default Summary;
