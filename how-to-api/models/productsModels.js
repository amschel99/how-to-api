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
        quantity:{
            type:Number,
            required:[true, "specify the quantity please"]
        },
        available:{
            type:Boolean,
            required:[true, "specify if the product is available please"]
        },
        size:{
            type:String,
            enum:["small","medium", "large"],
            default:"medium"
        },
   rating:{
type:Number,
required:[true, "how many people rated this product?"],
default:0


        },
        productType:{
            enum:["Tshirt", "Hoodie", "Cap", "Cup", "Pants"]
        }




    }
)
module.exports= mongoose.model("ProductsModel",productsSchema  )