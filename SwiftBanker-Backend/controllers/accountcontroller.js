const Account = require('../models/account');

const createAccount = async (req, res) => {
  const { userId, accountNumber } = req.body;

  try {
    const existing = await Account.findOne({ accountNumber });
    if (existing) return res.status(400).json({ message: 'Account number already exists' });

    const account = new Account({ userId, accountNumber });
    await account.save();
    res.status(201).json(account);
  } catch (err) {
    res.status(500).json({ message: 'Error creating account', error: err.message });
  }
};

const getAccount = async (req, res) => {
  const { userId } = req.params;

  try {
    const account = await Account.findOne({ userId });
    if (!account) return res.status(404).json({ message: 'Account not found' });

    res.status(200).json(account);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching account', error: err.message });
  }
};

module.exports = { createAccount, getAccount };
