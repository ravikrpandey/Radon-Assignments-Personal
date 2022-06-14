const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
// Dubble OK OK
const createaUser = async function (req, res) {
  let userData = req.body;
  let savedData = await userModel.create(userData);
  res.send({ msg: savedData });
};
// Dubble OK OK
const loginUser = async function (req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    let token = jwt.sign(
        {
          userId: user._id.toString(),
          batch: "radon",
          organisation: "FunctionUp",
        },
        "functionup-radon"
      );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};
// Dubble OK OK
const getUserData = async function (req, res) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};
// Dubble OK OK
const updateUser = async function (req, res) {
  let UserId = req.params.userId
  let checkId= await userModel.findById(UserId)
  if(!checkId)
 return res.send({ status: false, msg: "No such user exists" });
let UserUpdated = await userModel.findOneAndUpdate({_id:checkId},{$set:{firstName: "Ravikrpandey"}})
res.send({status: "Upadted", msg: UserUpdated})
};
// Dubble OK OK
const deleteUser= async function(req, res){
let UserId1= req.params.userId
let checkId1= await userModel.findById(UserId1)
  if(!checkId1)
  return res.send({ status: false, msg: "No such user exists" })
  let UserDelete= await userModel.findOneAndUpdate({_id:checkId1},{$set:{isDelete: true}})
  res.send({Status:"Deleted", msg: UserDelete})
}

module.exports.createaUser = createaUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser= deleteUser;