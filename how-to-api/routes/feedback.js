
const express= require("express")
const router= express.Router()
const {submitFeedback}= require("../controllers/submitFeedback.js")
const {getAllfeedbacks}= require("../controllers/getAllfeedbacks.js")
router.route('/').post(submitFeedback).get(getAllfeedbacks)
module.exports= router
