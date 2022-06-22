const jwt= require("jsonwebtoken")
require("dotenv").config()

const verifyJwt= (req, res, next)=>{
const authHeader=req.headers['authorization'];
if(!authHeader) return res.status(401).send("unAuthorized")

console.log(authHeader)
const token= authHeader.split(" ")[1];
jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded)=>{

    if(error){
        return res.status(403).send("forbidden")
    }
    req.user=decoded.userName
next()
}) 
}
module.exports= verifyJwt