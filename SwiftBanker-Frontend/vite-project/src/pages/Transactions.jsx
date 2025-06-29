import { useState, useEffect } from "react";
import axios from "axios";
import './Transactions.css'; // ✅ Add this line (you'll create this file next)

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem("token");
      console.log("Token in localStorage (Transactions):", token);

      try {
        const res = await axios.get("/api/transactions/history", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTransactions(res.data);
      } catch (err) {
        console.error("Error fetching transactions:", err);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="transactions-container">
      <h2 className="transactions-title">🧾 Transaction History</h2>

      {transactions.length === 0 ? (
        <p className="no-transactions">No transactions found.</p>
      ) : (
        <table className="transactions-table">
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Amount (₹)</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx._id}>
                <td>{tx.fromAccount}</td>
                <td>{tx.toAccount}</td>
                <td>₹{tx.amount}</td>
                <td>{new Date(tx.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Transactions;
