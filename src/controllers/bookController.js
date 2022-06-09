// const { count } = require("console")
const AuthorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")

// Problem 1 and 2 :-
// Write create APIs for both books and authors ---> If author_id is not available
// then do not accept the entry(in neither the author collection nor the books collection)

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

// Problem 3 :-
// List out the books written by "Chetan Bhagat" 
// ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”.
// Then next query will get the list of books with that author_id )

let getBookByChetanBhagat = async function(req, res) {
    let data = await AuthorModel.find({authorName: "Chetan Bhagat"}).select("authorId")
    let bookData = await BookModel.find({authorId: data[0].authorId})
    res.send({msg: bookData})
}

// Problem 4 :-
// find the author of “Two states” and update the book price to 100; 
// Send back the author_name and updated price in response.  
// ( This will also need 2  queries- 1st will be a findOneAndUpdate.
// The second will be a find query aith author_id from previous query)


let authorOfBook = async function(req, res) {
    let data = await BookModel.findoneAndUpdate({name: "Two states"},{$set: {price: 100}}, {new:true})
    let authorData = await AuthorModel.find({authorId: data.authorId}).select("authorName")
    let price = data.price
    res.send({msg: authorData, price})
}

// Problem 5 :-
// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName
//  corresponding to the authorId’s ( by querying authorModel)

const bookPrice = async function(req, res){
    let data1=await BookModel.find({price: {$gte: 50, $lte: 100}}).select({author_id :1})
    let combData =await AuthorModel.find({map:(x=> x.author_name)})
    let gt = data1.author_name
    res.send({mgs: combData, gt})
};

// Problem 6 :-
// Write an api GET /books-by-authorid/<Author_Id> (for example /books/1 or /books/2 etc)
// that returns all the books written by the author with an id <Author_Id>. Only return the names of these books

const findBook = async function(req, res){
    let pathParamsReq = req.params.Author_Ids
    console.log(pathParamsReq)
    let findBookByAuthor = await BookModel.find({author_id: pathParamsReq}).select({name:1, _id:0})
    res.send({msg:findBookByAuthor})
};

// Problem 7 :-
// Find a list of authors whose are older than 50 years of age with at least one book that has a rating greater than 4.
// Only include the author’s names and their ages in the response for this api

const FindAge = async function(req, res){
    //let nameAge = await AuthorModel.find({age:{$gt: 50}}).select({author_name:1, age:1, _id:0})
    let findAuthorId = await AuthorModel.find({age:{$gt: 50}}).select({author_id:1, _id:0})
    let findAuthorRating = await BookModel.find({$and:[{author_id: findAuthorId},{ratings:{$gt: 4}} ]}.select({author_id:1, _id:0}))
    let prAuthor= await AuthorModel.find({author_id: findAuthorRating}).select({author_name:1, age:1, _id:0})
    res.send({msg: prAuthor})
};




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
module.exports.bookPrice = bookPrice
module.exports.findBook = findBook
module.exports.FindAge = FindAge
