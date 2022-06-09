// const authorModel = require("../models/authorModel")
// const bookModel= require("../models/bookModel")


const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");
const PublisherModel = require("../models/publisherModel");


const createNewBook= async function(req, res){
    let bookData= req.body;
    let authordetail= await AuthorModel.find().select({_id:1})
    let publisherdetail = await PublisherModel.find().select({_id:1})
     let authid = authordetail.map(function (x){
         return x._id.toString()

     });
     let publisherid = publisherdetail.map(function (x){
        return x._id.toString()
     });
     if(!(bookData.author && bookData.publisher)){
         res.send({msg: "error: type missing"})}
         else if(!(authid.includes(bookData.author) && publisherid.includes( bookData.publisher)))
         {
             res.send({msg: "AuthorId Is Not Valid"})}
             else{ let createdata= await BookModel.create(bookData)}
         }
  const getBookDetails = async function(req, res){
let allBooks = await BookModel.find().populate("author").populate("publisher")
res.send({mgs: allBooks})
  }
module.exports.createNewBook= createNewBook
module.exports.getBookDetails= getBookDetail

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
