import React from "react";
import Sidebar from "./SideBar";
import TransactionsList from "./TransactionsList";

function Transactions() {
  return (
    <div className="container-side">
      <Sidebar />
      <div className="content">
        <TransactionsList />
      </div>
    </div>
  );
}

export default Transactions;
