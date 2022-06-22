const express=require("express")
require("dotenv").config()
const connectDb= require("./db/config")

const app= express()
const router= require("./routes/route")



const PORT= process.env.PORT || 8000

app.use(express.json())
app.use("/api/v1/users", router)
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


