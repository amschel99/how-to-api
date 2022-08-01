
const express= require("express")
const router= express.Router()
const {submitFeedback}= require("../controllers/submitFeedback.js")

router.route('/').post(submitFeedback)
module.exports= router
