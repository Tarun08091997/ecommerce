const Product = require('../models/productModel')



// Create Product -- Admin
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


// Update Product -- Admin
exports.updateProduct = async (req,res,next) =>{
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            return res.status(500).json({
                success:false,
                message:"Product Not Found"
            })
        }

        product = await Product.findByIdAndUpdate(req.params.id , req.body , {new :true , 
            runValidators:true,
            userFindAndModify:false
        })

        res.status(200).json({
            success:true,
            product
        });
    }catch(err){
        return res.status(500).json({
            success:false,
            error:err.error
        })
    }
}




exports.getAllProducts = async (req,res,next)=>{
    try{
        const products = await Product.find()

        return res.status(200).send({
            success:true,
            products
        })

    }catch(err){
        return res.status(500).json({
            success:false,
            error:err.error
        })
    }
}

exports.getProduct = async (req,res,send) =>{
    try{
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.status(500).json({
                success:false,
                message:"Product not found"
            })
        }
        return res.status(200).send({
            success:true,
            product
        })

    }catch(err){
        return res.status(500).json({
            success:false,
            error:err.error
        })
    } 
}

exports.deleteProduct = async (req,res,next) =>{
    try{
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product){
            return res.status(500).json({
                success:false,
                message:"Product not found"
            })
        }
        return res.status(200).send({
            success:true,
            product
        })

    }catch(err){
        return res.status(500).json({
            success:false,
            error:err.error
        })
    } 

}