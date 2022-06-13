const MidOrderModel = require("../models/MidOrderModel")
const MidProductModel = require("../models/MidProductModel")
const MidUserModel = require("../models/MidOrderModel")

const createOrder = async function (req, res) {
    let data = req.body
    let val = req.headers.isfreeappuser

    let userData = await MidUserModel.findOne({_id: data.userId})

    // data.isfreeAppUser = userData.isfreeappuser
   
    let productData = await MidProductModel.findOne({_id: data.productId})

    if (userData == null && productData == null) {
        res.send({msg: 'error'})

       

        } else {
           let createmodeluser= await  MidUserModel.create(data)
           res.send({msg:createmodeluser})
        }
        if(userData.isfreeappuser) {
            data.amount = 0;
            let createdData = await MidOrderModel.create(data)
            res.send({msg: createdData})

        if (productData.price > userData.balance){

            console.log("Insufficient Balance")
            res.send({msg: "Insufficient Balance"})

        } else {
            data.amount = productData.price
            let userDatas = userData.balance - productData.price
            console.log(userDatas)

            let createdData = await MidOrderModel.create(data)
            let uid = userData._id.toString();
            await MidUserModel.findByIdAndUpdate(uid, {balance: userData.balance})
            res.send({msg: createdData})
        }

    }
   
    else {
        res.send({msg: "userId and productId is mandatory"})


    } 



}

module.exports.createOrder = createOrder
