const orderModel= require("../models/order.js")


const makeAnOrder= async (req, res, next)=>{

    try{
        const user= req.user
        req.body.user=user
        console.log(req.body.user)
        const order= await orderModel.create(req.body)
        console.log(order)
        return res.status(201).json({message:"order sent succesfully", order})

    }
    catch(error){
return res.status(500).send(`there was an error ${error.message}`)

    }
}
module.exports= {makeAnOrder}