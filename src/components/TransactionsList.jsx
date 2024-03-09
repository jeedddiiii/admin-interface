import React, { useEffect, useState } from "react";

function TransactionsList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");
    fetch("http://localhost:8080/transaction") // replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched:", data); // log the data
        setTransactions(data.transactions);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        setTransactions([]);
      });
  }, []);

  console.log("Transactions:", transactions);
  console.log(transactions[0]);
  return (
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
                  style={{ maxWidth: '60px', maxHeight: '60px' }} 
                />
              )}
            </td>
            <td>
              {transaction.EnvironmentImg && (
                <img
                  src={`data:image/jpeg;base64,${transaction.EnvironmentImg}`}
                  alt="Environment"
                  style={{ maxWidth: '80px', maxHeight: '80px' }} 
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
