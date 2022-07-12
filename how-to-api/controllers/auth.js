
const usersModel= require("../models/models")
const{registerSchema}=require('../validation/validate')
const joi= require("joi")
const bcrypt= require("bcryptjs")
const jwt= require("jsonwebtoken")
require("dotenv").config()
const path= require("path")//still not sure what this is for

const register=  async (req, res)=>{
try{
    //Validate the details
    const{error}= registerSchema.validate(req.body)
    if(error){
        return res.send(error.details[0].message)
    }

    //hash the password
    const salt= await bcrypt.genSalt(10)
 
    hashPassword= await bcrypt.hash(req.body.password,salt)
   req.body.password=hashPassword

    //Check if the user exists in the database
    const userExists= await usersModel.findOne({email:req.body.email})
    if(userExists!==null){
        return res.status(409).send("user already exists" )
    }

   const succesful= await usersModel.create(req.body)
res.json({message:"success", user:succesful})
}
catch (error){
res.status(500).send("Internal server error" +error)
}
}

//Enough with with registering users, Lets login some



const login=  async (req, res)=>{
try{

    //check if the email exists, If not say it does not exist
    const userExists= await usersModel.findOne({email:req.body.email})
    if(!userExists){
        return res.status(400).send("user was not found")

    }
const passwordMatch= await bcrypt.compare(req.body.password, userExists.password)
if(!passwordMatch){
    return res.status(400).send("email or password was wrong")
}

//assign the access 
const accessToken= jwt.sign(
{"_id":userExists._id},
process.env.ACCESS_TOKEN_SECRET, {
    expiresIn:'7m'
}
);

//CREATE THE REFRESH TOKEN

const refreshToken= jwt.sign(
{"_id":userExists._id},
process.env.REFRESH_TOKEN_SECRET, {
    expiresIn:'7d'
}
);

//save the refresh token in the database
userExists["refreshToken"]=refreshToken
await usersModel.findByIdAndUpdate({_id:userExists._id},userExists)



//send accessToken and refresh Token
//refresh token as a cookie, accessToken as a response

res.cookie("jwt", refreshToken,{httpOnly:true, sameSite:'None', secure:true, maxAge:24*60*60*1000})
console.log(accessToken + userExists)

res.send({accessToken, userExists})
    //if it exists compare the password given and the one stored in the database, If they do not match, send an error
    //If the password matches and the use 

}
catch (error){
res.status(500).send("Internal server error")
}


}



module.exports= {register, login}