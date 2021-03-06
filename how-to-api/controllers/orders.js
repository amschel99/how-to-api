const orderModel= require("../models/order.js")


const makeAnOrder= async (req, res, next)=>{

    try{
        const user= req.user
        req.body.user=user
        
        const order= await orderModel.create(req.body)
        console.log(order)
        const {price}= req.body
        //handle the payments here using the price
        return res.status(201).json({message:"order sent succesfully", order})

    }
    catch(error){
return res.status(500).send(`there was an error ${error.message}`)

    }
}
module.exports= {makeAnOrder}