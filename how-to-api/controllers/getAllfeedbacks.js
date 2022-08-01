const feedbackModel= require("../models/feedback.js")


const getAllfeedbacks= async (req, res, next)=>{

    try{
   
        
        const feedback= await feedbackModel.find({})
        console.log(feedback)
     
        //handle the payments here using the price
        return res.status(200).json({message:"feedback queried", feedback})

    }
    catch(error){
return res.status(500).send(`there was an error ${error.message}`)

    }
}
module.exports= {getAllfeedbacks}