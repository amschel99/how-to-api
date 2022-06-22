
const {handleLogout}=require("../controllers/logout")

const express= require("express")
const router= express.Router()


router.get("/", handleLogout)


module.exports= router