
const express= require("express")
const router= express.Router()
const {makeAnOrder}= require("../controllers/orders.js")

router.route('/').post(makeAnOrder)
module.exports= router
