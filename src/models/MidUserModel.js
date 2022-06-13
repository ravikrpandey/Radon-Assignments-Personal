const mongoose = require('mongoose');

const MidUserSchema = new mongoose.Schema( {
  name: String,
  balance:{
    type: Number,
    default: 100

  },
  address: String,
  age: Number,
  gender: {
    type: String,
    enum:["male", "female", "other", ]
  },
  
  isFreeAppUser: {
    type: Number,
    default: false
  }
}, { timestamps: true});

module.exports = mongoose.model('MidUser', MidUserSchema)//miduser