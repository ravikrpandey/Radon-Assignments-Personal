const express = require('express');
const myHelper = require('../util/helper')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    res.send('My first ever api!')
});


module.exports = router;
// adding this comment for no reason