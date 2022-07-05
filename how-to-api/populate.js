const products= require("./products.json")
const productsModel= require("./models/productsModels")
const connectDb= require("./db/config.js")
require("dotenv").config()
const start= async ()=>{
    try{
       
        await connectDb(process.env.MONGO_URI)
        await productsModel.deleteMany()//first delete everything in the database
        await productsModel.create(products)//add the json products
console.log("connection succesful")
process.exit(0)//exit succesfully



    }catch(error){
        console.error(error)
        process.exit(1)
    }
}
start()
