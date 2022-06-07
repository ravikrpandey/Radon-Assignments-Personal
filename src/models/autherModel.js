const mongoose = require('mongoose');

const autherSchema = new mongoose.Schema( {
    autherId: {
        type: String,
        unique: true,
        required: true
    },
    autherNmae: String,
    age: Number,
    address: String
}, {timestamps: true})

module.exports = mongoose.model('Auther', autherSchema)