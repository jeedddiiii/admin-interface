import React from "react";
import Sidebar from "./SideBar";
import TransactionsList from "./TransactionsList";
import UserDropdown from "./UserDropdown";

function Transactions() {
  return (
    <div className="container-side">
      <Sidebar />
      <div className="content">
        <div className="d-flex justify-content-between ">
          <p className="fs-5 fw-bold">Transactions</p>
          <UserDropdown />

        </div>
        <TransactionsList />
      </div>
    </div>
  );
}

export default Transactions;
