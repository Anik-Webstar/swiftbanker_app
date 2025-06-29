const User = require('../models/user');
const Account = require('../models/account');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const newUser = new User({ name, email: email.toLowerCase().trim(), password });
    await newUser.save();

    const accountNumber = Math.floor(1000 + Math.random() * 9000).toString();
    const newAccount = new Account({
      userId: newUser._id,
      accountNumber,
      balance: 0
    });
    await newAccount.save();

    res.status(201).json({ message: 'User and account created successfully', accountNumber });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};



const login = async (req, res) => {
  const email = req.body.email.toLowerCase().trim();
  const  password = req.body.password;
  console.log('Login attempt with:', email, password);

  const user = await User.findOne({ email });
  console.log("User found:", user);
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  console.log("Stored hash in DB:", user.password);
  console.log("Plain password received:", password);
  const isMatch = await bcrypt.compare(password, user.password);
  console.log('Password match:', isMatch); 
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const account = await Account.findOne({ userId: user._id });
  if (!account) return res.status(400).json({ message: 'No account found for this user' });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  console.log("JWT_SECRET in login:", process.env.JWT_SECRET);
  res.json({
    token,
    user: {
      userId: user._id,
      name: user.name,
      email: user.email,
      accountNumber: account?.accountNumber || null,
      balance: account?.balance || 0
    }
  });
};

module.exports = { register, login };
