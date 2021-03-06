const mongoose= require("mongoose")
const orderSchema= new mongoose.Schema(

{
   products:
[{
type: mongoose.SchemaTypes.Mixed
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
    type:mongoose.ObjectId,
    required:true
   }
}

)

module.exports= mongoose.model("Orders", orderSchema)