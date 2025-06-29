const express = require('express');
const router = express.Router();
const { transferFunds, getTransactionHistory } = require('../controllers/transactioncontroller');
const authMiddleware = require('../middleware/authmiddleware');

router.post('/transfer', authMiddleware, transferFunds);
router.get('/history', authMiddleware, getTransactionHistory); // ✅ NEW

module.exports = router;