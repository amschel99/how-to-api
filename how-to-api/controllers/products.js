const productsModel= require("../models/productsModels.js")

const getAllProducts= async (req, res)=>{

    try{
          const {name,sort, fields,brand,ram,os,disk}=req.query
           const queryObject={}
           if(name){
        //the foreign expression below is for pattern matching where all strings matching with the name query are returned. options i is for ignoring thre caps or small

        queryObject.name={$regex:name, $options:"i"}
    }
     if(brand){
      

        queryObject.brand=brand
    }
     if(ram){
      

        queryObject.ram=ram
    }
    if(os){
      

        queryObject.os=os
    }
    if(disk){
      

        queryObject.disk=disk
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
    

    //pagination functionality 
    const page= Number(req.query.page) || 1 //its the first page or whatever page they want
    const limit= Number(req.query.limit) || 10 //limit is 10 or whatever they want
    const skip=(page-1) *limit
    result= result.skip(skip).limit(limit)



 
      product = await result
  const pages=Math.floor(9/limit)
  
      return res.status(200).json({message:"success",data:product,pages})


    }
    catch(error){
        return res.status(500).send(error.message)

    }
}
module.exports= {getAllProducts}