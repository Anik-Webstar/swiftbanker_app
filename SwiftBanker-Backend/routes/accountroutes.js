const express = require('express');
const router = express.Router();
const { createAccount, getAccount } = require('../controllers/accountcontroller');


router.post('/create', createAccount);
router.get('/:userId', getAccount);

module.exports = router;
