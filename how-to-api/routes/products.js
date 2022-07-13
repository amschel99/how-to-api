
const express= require("express")
const router= express.Router()
const {getAllProducts}= require("../controllers/products.js")

router.route('/').get(getAllProducts)
module.exports= router
