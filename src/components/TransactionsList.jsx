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
    ) // replace with your API endpoint
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
      <table class="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Emotion</th>
            <th>Date</th>
            <th>Source</th>
            <th>Face Image</th>
            <th>Environment Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.TransactionID}</td>
              <td>{transaction.Name}</td>
              <td>{transaction.Emotion}</td>
              <td>{transaction.DateTime}</td>
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
      <div className="text-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          class="px-2 btn btn-outline-dark"
        
        >
          Previous
        </button>
        <span class="px-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || transactions.length < itemsPerPage}
          class="px-2 btn btn-outline-dark"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default TransactionsList;
