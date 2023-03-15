const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, (req, res, next) => {
    console.log('hello');
    res.send('hello');
});

module.exports = router;