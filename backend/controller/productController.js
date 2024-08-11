const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncError = require("../middleware/catchAsyncErrors");


// Create Product -- Admin
exports.createProduct = catchAsyncError(async(req,res,next) =>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
});


// Update Product -- Admin
exports.updateProduct = catchAsyncError(async (req,res,next) =>{
    let product = await Product.findById(req.params.id);
    if(!product){
        throw new ErrorHandler("Product not found" ,404)
    }
    product = await Product.findByIdAndUpdate(req.params.id , req.body , {new :true , 
        runValidators:true,
        userFindAndModify:false
    })
    res.status(200).json({
        success:true,
        product
    });
});




exports.getAllProducts = catchAsyncError(async (req,res,next)=>{
    const products = await Product.find();

    return res.status(200).send({
        success:true,
        products
    })
});

exports.getProduct = catchAsyncError(async (req,res,next) =>{
    const product = await Product.findById(req.params.id)
    if(!product){
        throw new ErrorHandler("Product not found" ,404)
    }
    return res.status(200).send({
        success:true,
        product
    })
});

exports.deleteProduct = catchAsyncError(async (req,res,next) =>{
    const product = await Product.findByIdAndDelete(req.params.id)
    if(!product){
        throw new ErrorHandler("Product not found" ,404);
    }
    return res.status(200).send({
        success:true,
        product
    })

});