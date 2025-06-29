const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productroutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('SwiftBanker API is running...');
});

const PORT = process.env.PORT || 5700;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
const authRoutes = require('./routes/authroutes');
app.use('/api/auth', authRoutes);
const accountRoutes = require('./routes/accountroutes');
app.use('/api/accounts', accountRoutes);
const transactionRoutes = require('./routes/transactionroutes');
app.use('/api/transactions', transactionRoutes);

