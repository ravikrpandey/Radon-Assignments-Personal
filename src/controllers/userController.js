const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    resizeBy.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    resizeBy.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData