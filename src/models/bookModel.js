const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    },

    autherName: String,
    categoryName: {
        type: String,
        enum:["Action", "Commic", "Fiction", "Drametic", "Novel", "Horror", "Fantasy" ]
},

year: Number
},{timestamps: true});

module.exports = mongoose.model('Book', bookSchema) //books