
const requestIp = require("request-ip")
const moment = require("moment")

const md1 = function(req, res, next){
    const pathName = req.path;
    const clintIp = requestIp.getClientIp(req);
   let todays = moment().format();
   console.log(todays+" "+ clintIp+" "+ pathName)
  next()

 };

 module.exports.md1 = md1






// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
