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
     
  

      brand:{
        type:String,
            enum:["hp","lenovo","acer","dell","acer","ssd"],
         
        },
        description:{
            type:String,
            required:[true, "please provide a detailed description"]

        },
        ram:{
            type:String,
            enum:["4gb","8gb", "16gb"],
           
        },
        disk:{
            enum:["ssd","hdd"]
        },
        os:{
            enum:["windows","mac","chrome"]
        }




    }
)
module.exports= mongoose.model("ProductsModel",productsSchema  )