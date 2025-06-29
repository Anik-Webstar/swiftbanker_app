import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="dashboard-container">
      <h2>👋 Welcome, {user?.name || "User"}</h2>
      <p><strong>Account Number:</strong> {user?.accountNumber || "N/A"}</p>
      <p><strong>Balance:</strong> ₹{user?.balance || 0}</p>

      <div className="dashboard-links">
        <a href="/transfer">Transfer Funds</a>
        <a href="/transactions">View Transactions</a>
      </div>
    </div>
  );
}

export default Dashboard;
