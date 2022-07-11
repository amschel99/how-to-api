const mongoose= require("mongoose")
const orderSchema= new mongoose.Schema(

{
   products:
[{
type:String
}]
   ,
   price:{
    type:Number,
    required:true,
    trim:true

   },
   quantity:{
    type:Number,
    required:true
   },
   user:{
    type:String,
    required:true
   }
}

)

module.exports= mongoose.model("Orders", orderSchema)