const mongoose = require('mongoose');

const MidProductSchema = new mongoose.Schema( {
    name: String,

    category: {
        type: String,
        enum: ["book", "others"]
    },

    price: {
        type: Number,
        required: true

    },

    date: {
        type: Date, 
        default: Date.now
    }
    
}, {timestamps: true});

module.exports = mongoose.model('MidProduct', MidProductSchema)
