
const userModel= require("../models/models.js")
const getUser= async (req, res)=>{

    try{
        user=req.user
     const {name} =  await userModel.find({_id:user})
   return  res.status(200).json({message:"success", data:name})

    }
    catch(error){
return res.status(500).send(error.message)

    }

}
module.exports={getUser}