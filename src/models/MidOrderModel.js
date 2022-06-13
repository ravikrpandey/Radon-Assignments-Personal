const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const MidOrderSchema = new mongoose.Schema( {
    amount: Number,
    userId:{
        type: objectId,
        ref:'MidUser'
    },
	productId:{
        type: objectId,
        ref:'MidProduct'
    },
	isFreeAppUser:Boolean, 
	date: String

}, {timestamps: true});

module.exports = mongoose.model('MidOrder', MidOrderSchema) //midorders