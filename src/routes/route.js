const express = require('express');
const externalModule = require('../logger/logger')
const module2=require('../util/helper')
const module3=require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.welcome()
    module2.PrintDate()
    module2.PrintMonth()
    module2.getBatchInfo()
    module3.spaceTrim()
    module3.toLowerCh()
    module3.toUpperCh()
    res.send('Welcome to my application. I am Ravi Kumar pandey and a part of FunctionUp Radon cohort')
});






module.exports = router;
// adding this comment for no reason
