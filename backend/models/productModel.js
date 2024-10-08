const mongo = require('mongoose');

const productSchema = new mongo.Schema({
    name:{
        type:String,
        required:[true,"Please Provide Product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Provide Description"]
    },
    price:{
        type:Number,
        required:[true,"Please Provide Price"],
        maxLength:[8,"Price cannot exceed 8 figure"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please Enter Product Category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter Product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongo.model("Product",productSchema);