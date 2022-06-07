const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    },
    
    year: {type: Number,
         default: 2021},
    
    tags: [{authorName: String,
         totalPages: Number,
          stockAvailable: Boolean}],
    
   // isPublished: Boolean,
    price: {
        indianPrice: String,
        europePrice: String,
    },
  //  sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //books

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
