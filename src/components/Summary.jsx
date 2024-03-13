import React from "react";
import SummaryChart from "./SummaryChart";
import Sidebar from "./SideBar";
import DropDown from "./DropDown";

function sendMessage() {
  fetch("http://localhost:8080/send-message", { method: "POST" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) =>
      console.error(
        "There has been a problem with your fetch operation: ",
        error
      )
    );
}

function Summary() {
  return (
    <>
      <div className="container-side">
        <Sidebar />

        <div className="content ">
          <div className="d-flex justify-content-between ">
            <p className="fs-5 fw-bold">Summary</p>

            <DropDown />
          </div>
          <div
            style={{ height: "550px" }}
            className="pb-5 shadow p-3 mb-5 bg-body-tertiary rounded"
          >
            <button
              className="btn btn-dark ml-auto  fw-bold"
              onClick={sendMessage}
            >
              Send Message
            </button>

            <SummaryChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
