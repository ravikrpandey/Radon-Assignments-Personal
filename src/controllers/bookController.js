// const { count } = require("console")
const AuthorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")


let createAuthor = async function(req, res) {
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({msg: savedData})
}

let createBook = async function(req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg: savedData})
}

let getBookByChetanBhagat = async function(req, res) {
    let data = await AuthorModel.find({authorName: "Chetan Bhagat"}).select("authorId")
    let bookData = await BookModel.find({authorId: data[0].authorId})
    res.send({msg: bookData})
}

let authorOfBook = async function(req, res) {
    let data = await BookModel.findoneAndUpdate({name: "Two states"},{$set: {price: 100}}, {new:true})
    let authorData = await AuthorModel.find({authorId: data.authorId}).select("authorName")
    let price = data.price
    res.send({msg: authorData, price})
}



// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    // //  )
    // let allBooks= await BookModel.findOneAndUpdate( 
    //     { authorName: "ABC"} , //condition
    //     { $set: data }, //update in data
    //     { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.getBookByChetanBhagat= getBookByChetanBhagat
module.exports.authorOfBook= authorOfBook
