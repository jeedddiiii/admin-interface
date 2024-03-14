import React from "react";
import Sidebar from "./Sidebar";
import TransactionsList from "./TransactionsList";
import UserDropdown from "./UserDropdown";

function Transactions() {
  return (
    <div className="container-side">
      <Sidebar />
      <div className="content">
        <div className="pt-4 shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="d-flex justify-content-between pb-2 mx-3">
            <p className="fs-6 fw-bold">Transactions</p>
            <UserDropdown />
          </div>

          <TransactionsList />
        </div>
      </div>
    </div>
  );
}

export default Transactions;
