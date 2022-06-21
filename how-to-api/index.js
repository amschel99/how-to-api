const express=require("express")
require("dotenv").config()
const connectDb= require("./db/config")
const PORT= process.env.PORT || 8000



const app= express()

app.use(express.json())
app.get("/", (req, res)=>{

res.send("hello my people")

})

const start= async  ()=>{

try{
await connectDb(process.env.MONGO_URI)
app.listen(PORT, ()=>{
console.log("server running on "+ PORT)


})

}
catch(error){
    console.log(error)

}

}
start()


