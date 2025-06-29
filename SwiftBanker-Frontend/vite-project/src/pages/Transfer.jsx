import { useState } from "react";
import axios from "axios";
import './Transfer.css'; // ✅ Create this CSS file

function Transfer() {
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "/api/transactions/transfer",
        { toAccount, amount },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("✅ Transfer Successful");
    } catch (err) {
      alert("❌ Transfer Failed");
    }
  };

  return (
    <div className="transfer-container">
      <h2>💸 Fund Transfer</h2>
      <form onSubmit={handleTransfer} className="transfer-form">
        <input
          type="text"
          placeholder="To Account Number"
          value={toAccount}
          onChange={(e) => setToAccount(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
}

export default Transfer;
