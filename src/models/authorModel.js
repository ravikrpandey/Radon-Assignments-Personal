const mongoose = require('mongoose');

// 1. Write down the schemas for book and authors (keeping the data given below in mind). 
// Also create the documents (corresponding to the data given below) in your database.
// 2. CRUD operations. Write API's to do the following:


const authorSchema = new mongoose.Schema( {
    authorId: {
        type: String,
        unique: true,
        required: true
    },
    authorName: String,
    age: Number,
    address: String
}, {timestamps: true})

module.exports = mongoose.model('Author', authorSchema)