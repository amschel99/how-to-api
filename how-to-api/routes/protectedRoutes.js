
const express= require("express")
const router= express.Router()

router.route("/ebooks").get((req,res)=>{
    res.send("this route is protected, you can upload an ebook and make your profile")
})
module.exports= router
