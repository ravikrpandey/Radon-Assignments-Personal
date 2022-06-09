// const NewAuthorModel = require("../models/newAuthorModel")
// const NewPublisherModel = require("../models/newPublisherModel")
// const NewBookModel = require("../models/newBookModel")

const PublisherModel = require("../models/publisherModel");
const createPublisher= async function(req, res){
    let publisherData= req.body;
    let createPublisherDetails= await PublisherModel.create(publisherData);
    res.send({msg: createPublisherDetails});

};
module.exports.createPublisher= createPublisher;





// createNewAuthor = async function (req, res) {
//     let book = req.body
//     let newAuthorData = await NewAuthorModel.find().select({_id: 1});
//     let newPublisherData = await NewPublisherModel.find().select({_id: 1});
//     let autherId = newAuthorData.map(function (x) {
//         return x._id.toString();
//     });

//     let publisherId = newPublisherData.map(function (x) {
//         return x._id.toString();
//     });

//     if (!(newBook.newAuthor && newBook.NewPublisher)) {
//         res.send({ msg: "Entry is missing"});

//     } else if (!(newAuthorId.includes(newBook.newAuthor) && newpublisherId.includes(newBook.NewPublisher))
//     ) {
//         res.send({msg: "Id is not valid"});

//     } else {
//         let newBookData = await NewBookModel.create(newBook);
//         res.send({ data: newBookData});
//     }
// };

// const getNewBookData = async function (req, res) {
//     let books = 
// }
