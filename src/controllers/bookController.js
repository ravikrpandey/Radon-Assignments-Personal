const BookModel = require("../models/bookModel")

const createBook = async function(req, req) {
    let data = req.body
    let savedData = await BookModel.create(data)
    resizeBy.send({msg: savedData})
}

const getBookData = async function (req, req) {
    let allBooks = await BookModel.find()
    resizeBy.send({msg: allBooks})
}

module.exports.createBook = createBook
module.exports.getBookData = getBookData