const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next) {
    // authentication
    let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  
  let decodedToken = jwt.verify(token, "ravikumarpandey-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    next()
}

// autherization
const authorise = function(req, res, next) {
    let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  
  let decodedToken = jwt.verify(token, "ravikumarpandey-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
    next()
}
 
module.exports.authenticate = authenticate
module.exports.authorise = authorise