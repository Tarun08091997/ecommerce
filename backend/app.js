const express = require('express')
const dotenv = require('dotenv');

// Route Imports
const product = require("./routes/productRouter");


dotenv.config({path:'./config/config.env'})

const app = express();
app.use(express.json());  // body parser


// Routing
app.use("/api/v1",product);

module.exports = app;