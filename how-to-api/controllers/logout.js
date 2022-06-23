
 const usersModel= require("../models/models")

 
 const handleLogout=  async (req, res)=>{
try{
    //on client also delete the accesss Token
    const cookies=req.cookies
    if(!cookies?.jwt) return res.sendStatus(204)//NO CONTENT

const refresh=cookies.jwt
    
    const userExists= await usersModel.findOne({refreshToken:refresh})//look for a user with that refresh Token
console.log(userExists)
    if(!userExists){
    res.clearCookie("jwt",{httpOnly:true, sameSite:"None", secure:true})
    res.sendStatus(204)
    }
//delete refresh token in the database
userExists["refreshToken"]=""
await usersModel.findOneAndUpdate({_id:userExists._id},userExists )
res.clearCookie("jwt",{httpOnly:true})
res.sendStatus(204)
  
}

    catch(error){
        res.status(500).send("there was an error")
    }



}
module.exports={handleLogout}