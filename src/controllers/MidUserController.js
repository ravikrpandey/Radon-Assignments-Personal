const { create } = require("../models/MidProductModel")
const MidUserModel = require("../models/MidUserModel")

const createUser = async function (req, res) {
    let userData = req.body

    let userSavedData = MidUserModel.create(userData)
    res.send({msg: userSavedData})
}

module.exports.createUser = createUser