const mongoose= require("mongoose")
const feedbackSchema= new mongoose.Schema(

{
    product:{
        type:mongoose.ObjectId,
    required:true

    },

   rating:{
    type:Number,
    required:true,
    enum:[1,2,3,4,5]
   },
   feedback:{
    type:String,
    required:true,
    trim:true
   }
}

)

module.exports= mongoose.model('Feedbacks',feedbackSchema)