 const jwt= require("jsonwebtoken")
 const usersModel= require("../models/models")
require("dotenv").config()
 
 const handleRefreshToken=  async (req, res)=>{
try{
    const cookies=req.cookies
    if(!cookies?.jwt) return res.status(401);
    console.log( ' hello' + cookies.jwt)




const refresh=cookies.jwt
    
    const userExists= await usersModel.findOne({refreshToken:refresh})//look for a user with that refresh Token
console.log(userExists)
    if(!userExists){
        return res.status(403).send('forbidden')
    }

    //evaluate jwt
    jwt.verify(refresh,process.env.REFRESH_TOKEN_SECRET,(err, decoded)=>{
if(err || userExists.name!==decoded.userName){

    return res.status(403).send(err +decoded.userName +userExists.userName)
}
userName=decoded.userName
const accessToken= jwt.sign({"userName":decoded.userName}, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'7m'})
console.log("hello" +accessToken)
 res.json({accessToken})
    })

   }

    catch(error){
        res.status(500).send("there was an error")
    }



}
module.exports={handleRefreshToken}