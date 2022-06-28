
const express= require("express")
const router= express.Router()

router.route("/").get((req,res)=>{
   res.json(
    [{
name:"peanut butter"

    },
{
    name:"melon juice"
},
{
    name:"sugarcane juice"
}
]
   )
})
module.exports= router
