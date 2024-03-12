import React from "react";
import SummaryChart from "./SummaryChart";
import Sidebar from "./SideBar";
import DropDown from "./DropDown";

function Summary() {
  return (
    <>
      <div className="container-side">
        <Sidebar />

        <div className="content " >
          <div className="d-flex justify-content-between ">
            <p className="fs-5 fw-bold">Summary</p>
            <DropDown />
          </div>
          <div style={{ height: "550px" }}  class="pt-4 shadow p-3 mb-5 bg-body-tertiary rounded"   >
             <SummaryChart />
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Summary;
