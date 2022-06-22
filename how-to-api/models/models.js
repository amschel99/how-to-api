

const mongoose= require("mongoose")
const userSchema= new mongoose.Schema(

    {

name:{
    type:String,
    required:[true, "This field is required"],
    trim:true,
    maxLength:[20, "name cannot be more than 20 characters"]
},
email:{
    type:String,
    trim:true,
    required:[true, "email is required"],
   
},
password:{
    type:String,
    trim:true,
    required:[true, "password is required"],
    minLength:[8, "password must be atleast 8 characters long"]

   
},
refreshToken:{
    type:String,
    default:''
}


    }
)
module.exports= mongoose.model("usersModel",userSchema)