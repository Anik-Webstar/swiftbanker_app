const mongoose = require('mongoose');
const Account = require('../models/account');
const Transaction = require('../models/transaction');
const SwiftTransaction = mongoose.model('SwiftTransaction');

// ✅ Transfer Funds
const transferFunds = async (req, res) => {
  console.log("✅ transferFunds endpoint hit");

  const { toAccount, amount } = req.body;
  const userId = req.userId;
  console.log("userId from token:", userId);

  try {
    const sender = await Account.findOne({ userId });
    console.log("Sender account:", sender);
    const receiver = await Account.findOne({ accountNumber: toAccount });
    console.log("Receiver account:", receiver);

    if (!sender || !receiver) {
      return res.status(404).json({ message: 'Account not found' });
    }

    const amountNum = Number(amount);

    if (sender.balance < amountNum) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    // Update balances
    sender.balance -= amountNum;
    receiver.balance += amountNum;

    await sender.save();
    await receiver.save();

    // Save transaction
    const transaction = new SwiftTransaction({
      fromAccount: sender.accountNumber,
      toAccount,
      amount,
      userId
    });

    await transaction.save();

    res.status(200).json({ message: 'Transfer successful', transaction });
  } catch (error) {
    console.error("❌ Transfer failed:", error);
    res.status(500).json({ message: 'Transfer failed', error: error.message });
  }
};

// ✅ NEW: Get Transaction History
const getTransactionHistory = async (req, res) => {
  const userId = req.userId;

  try {
    const transactions = await SwiftTransaction.find({ userId }).sort({ timestamp: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    console.error("❌ Failed to fetch transaction history:", error);
    res.status(500).json({ message: 'Failed to fetch transactions', error: error.message });
  }
};

module.exports = {
  transferFunds,
  getTransactionHistory // ✅ Include this in exports
};