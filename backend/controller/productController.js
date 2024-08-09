const Product = require('../models/productModel')



// Create Product
exports.createProduct = async(req,res,next) =>{
    try{
        const product = await Product.create(req.body);

        res.status(201).json({
            success:true,
            product
        })
    }catch(error){
        res.status(400).json({
            success:false,
            error:error.errors
        })
    }
}

exports.getAllProducts = (req,res,next)=>{
    res.status(200).send({msg:"Routing working fine"});
}