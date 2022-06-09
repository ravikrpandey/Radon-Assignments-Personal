// const AuthorModel= require("../models/authorModel")

const AuthorModel = require("../models/authorModel");

const createAuthor = async function(req, res){
    let authorData = req.body;
    let authorsName= await AuthorModel.create(authorData);
    res.send({msg: authorsName});
};
module.exports.createAuthor= createAuthor;





// const createAuthor= async function (req, res) {
//     let author = req.body
//     let authorCreated = await AuthorModel.create(author)
//     res.send({data: authorCreated})
// }

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

// module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData