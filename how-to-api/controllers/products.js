const productsModel= require("../models/productsModels.js")

const getAllProducts= async (req, res)=>{

    try{
          const {name,sort, fields}=req.query
           const queryObject={}
           if(name){
        //the foreign expression below is for pattern matching where all strings matching with the name query are returned. options i is for ignoring thre caps or small

        queryObject.name={$regex:name, $options:"i"}
    }
    let result=  productsModel.find(queryObject)
    if(fields){
        //the user will say the fields they want to get then will  pass this to the select function  
    //products.select(fields)
        const fieldList= fields.split(',').join(' ')
        result= result.select(fieldList)
    }
     if(sort){
        //basically its self explanatory, will sort by the sort list eg. products.sort("price name")
        // thats why we have to split them on that comma and join the back
        const sortList= sort.split(',').join(' ')
        result= result.sort(sortList)
    }
    else{
        // if there is no sort specified, just sort them by date of creation
        result=result.sort("name")
    }

    
      product = await result
      return res.status(200).json({message:"success",data:product})


    }
    catch(error){
        return res.status(500).send(error.message)

    }
}
module.exports= {getAllProducts}