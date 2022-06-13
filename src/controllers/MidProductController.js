const MidProductModel = require("../models/MidProductModel");

const createProduct = async function(req, res) {
    let data = req.body

    let savedData = MidProductModel.create(data)
    res.send({msg: savedData})
}

module.exports.createProduct = createProduct
