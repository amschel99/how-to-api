
const {handleRefreshToken}= require("../controllers/refreshTokenController")

const express= require("express")
const router= express.Router()


router.get("/", handleRefreshToken)


module.exports= router