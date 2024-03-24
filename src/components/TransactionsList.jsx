import React, { useEffect, useState } from "react";

function TransactionsList() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    console.log("Fetching data...");
    fetch(
      `http://localhost:8080/transaction?page=${currentPage}&limit=${itemsPerPage}`
    ) 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched:", data); // log the data
        setTransactions(data.transactions);
        setTotalPages(Math.ceil(data.totalCount / itemsPerPage));


      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        setTransactions([]);
      });
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  console.log("Transactions:", transactions);
  console.log(transactions[0]);
  return (
    <>
    <div className="mx-3">
    <table class="table table-hover ">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Emotion</th>
            <th>Source</th>
            <th>Face Image</th>
            <th>Environment Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.DateTime}</td>
              <td>{transaction.Name}</td>
              <td>{transaction.Emotion}</td>
              <td>{transaction.SourceID}</td>
              <td>
                {transaction.FaceImg && (
                  <img
                    src={`data:image/jpeg;base64,${transaction.FaceImg}`}
                    alt="Face"
                    style={{ maxWidth: "60px", maxHeight: "60px" }}
                  />
                )}
              </td>
              <td>
                {transaction.EnvironmentImg && (
                  <img
                    src={`data:image/jpeg;base64,${transaction.EnvironmentImg}`}
                    alt="Environment"
                    style={{ maxWidth: "80px", maxHeight: "80px" }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
      
      <div className="text-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          class="px-2 btn btn-outline-dark"
        
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.91 6.71a.996.996 0 0 0-1.41 0L8.91 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41"/></svg>
        </button>
        <span class="px-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || transactions.length < itemsPerPage}
          class="px-2 btn btn-outline-dark"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01"/></svg>
        </button>
      </div>
    </>
  );
}

export default TransactionsList;
