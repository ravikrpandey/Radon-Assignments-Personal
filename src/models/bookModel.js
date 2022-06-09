// const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId

const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const newBookSchema = new mongoose.Schema({
   name: String,
   author:String,
    authorid:{
        type:ObjectId,
        ref:"newAuthor"
    },
	price: Number,
    ratings:Number,
	publisher: String

},{timestamps: true});
module.exports= mongoose.model("newBookS", newBookSchema);




// const bookSchema = new mongoose.Schema( {
//     name: String,
//     author_id: {
//         type: ObjectId,
//         ref: "Author"
//     },
//     price: Number,
//     ratings: Number


// }, { timestamps: true });


// module.exports = mongoose.model('LibraryBook', bookSchema)
