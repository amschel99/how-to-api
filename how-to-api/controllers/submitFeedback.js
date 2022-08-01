const feedbackModel= require("../models/feedback.js")


const submitFeedback= async (req, res, next)=>{

    try{
   
        
        const feedback= await orderModel.create(req.body)
        console.log(feedback)
     
        //handle the payments here using the price
        return res.status(201).json({message:"thank you! feedback submitted", feedback})

    }
    catch(error){
return res.status(500).send(`there was an error ${error.message}`)

    }
}
module.exports= {submitFeedback}