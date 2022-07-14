
const express= require("express")
const router= express.Router()
const {getUser}= require("../controllers/user.js")

router.route('/').get(getUser)
module.exports= router
