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
router.get('/hello', function(req, res){
const arrayChunk = lodash.chunk(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],1)
console.log(arrayChunk)
const arrayTail = lodash.tail([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])
console.log(arrayTail)
const arrayUnion = lodash.union([1, 2], [1, 2, 3], [1,, 2, 3, 4], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])
console.log(arrayUnion)
const ArrayPair = lodash.fromPairs([["Horror", "The Shining"], ["drama","Titanic"], ["thriller","Shutter Island"], ["fantasy","Pans Labyrinth"]])
console.log(ArrayPair)
res.send('Welcome To My Application.')
})
module.exports = router;
// adding this comment for no reason
