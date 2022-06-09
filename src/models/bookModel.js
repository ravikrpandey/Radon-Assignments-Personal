const mongoose = require('mongoose');

// 1. Write down the schemas for book and authors (keeping the data given below in mind).
// Also create the documents (corresponding to the data given below) in your database.
// 2. CRUD operations. Write API's to do the following:


const bookSchema = new mongoose.Schema( {

    name: { 
        type: String,
    },
    authorId: {
        type: String,
        required: true
    },
    price: Number,
    rating: Number

    // bookName: String, 
    // authorName: String, 
    // tags: [String],
    
    // isPublished: Boolean,
    // prices: {
    //     indianPrice: String,
    //     europePrice: String,
    // },
    // sales: {type: Number, default: 10},
    
    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
    // summary :  mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books
