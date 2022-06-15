const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let emailId = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: emailId, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });


  let token = jwt.sign(
    {
      userId: user._id.toString(),
      address: "NewDelhi",
      mobile: "8210703362",
    },
    "ravikumarpandey-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });



  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
 

  let userId = req.params.userId;
  let user = await userModel.findById(req.params.userId);
 
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new: true});
  res.send({ msg: "updated Successfully", data: updatedUser });
};

const deleteUser = async function(req, res) {

  let userId= req.params.userId                                                                   

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})

  
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:{isDelete: true}},{new: true});
    res.send({ msg: "deleted sucessfully", data: updatedUser });

}

const postMessage = async function (req, res) {
    let message = req.body.message
   
  
    
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    let update = updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{$set:{posts: update}}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser
