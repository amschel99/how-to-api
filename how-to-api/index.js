const express=require("express")
require("dotenv").config()
const connectDb= require("./db/config")
const cookieParser= require("cookie-parser")
const cors= require("cors")

const app= express()
const router= require("./routes/route")
const protectedRoutes= require("./routes/protectedRoutes")
const refreshRoute= require("./routes/refresh")
const verifyJwt=require("./middleware/verifyJwt")
const logout= require("./routes/logout")
const credentials= require("./middleware/credentials")
const cors0ptions= require("./config/options")



const PORT= process.env.PORT || 8000

app.use(credentials)
app.use(cors(cors0ptions))

app.use(express.json())
//middleWare for cookies
app.use(cookieParser())


app.use("/api/v1/users", router)//login and register routes
app.use("/refresh", refreshRoute)
app.use("/logout", logout)
app.use(verifyJwt)
app.use("/resources", protectedRoutes)//protected routes




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


