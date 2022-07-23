const mongoose= require("mongoose")
const productsSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"name must be provided please"],
            trim:true
      
        },

        price:{
            type:Number,
            required:[true, "a product must have a price"]
        },
        image:{
            type:String,
            required:[true, " a product must have an Image"]
        },
       
        available:{
            type:Boolean,
            required:[true, "specify if the product is available please"]
        },
     
   ratings:{
type:Number,
required:[true, "how many people rated this product?"],
default:0
        },
        averageRating:{
            type:Number,
            default:5

        },

        productType:{
            enum:["clothes", "laptops", "phones", "watches", "kitchenWare", "Jewellery"]
        }




    }
)
module.exports= mongoose.model("ProductsModel",productsSchema  )