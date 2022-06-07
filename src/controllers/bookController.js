// const { count } = require("console")
const AutherModel = require("../models/autherModel")
const BookModel= require("../models/bookModel")


let creaateAuther = async function(req, res) {
    let data = req.body
    let savedData = await autherModel.create(data)
    res.send({msg: savedData})
}

let createBook = async function(req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({msg: savedData})
}

let getBookByChetanBhagat = async function(req, res) {
    let data = await autherModel.find({autherName: "chetan bhagat"}).select("autherId")
    let bookData = await BookModel.find({autherId: data[0].autherId})
    res.send({msg: bookData})
}

let autherOfBook = async function(req, res) {
    let data = await AutherModek.findoneAndUpdate({name: "two state"},{name: "two state"},{$set: {price: 100}}, {new:true})
    let autherData = await AutherModel.find({autherId: data.autherId}).select("autherName")
    let price = data.price
    res.send({msg: autherData, price})
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
module.exports.creaateAuther= creaateAuther
module.exports.getBookByChetanBhagat= getBookByChetanBhagat
module.exports.autherOfBook= autherOfBook
