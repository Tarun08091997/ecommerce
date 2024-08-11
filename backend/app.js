const express = require('express')
const errorMiddleware = require("./middleware/error")

// Route Imports
const product = require("./routes/productRouter");

const app = express();
app.use(express.json());  // body parser


// Routing
app.use("/api/v1",product);





//Middleware for error
app.use(errorMiddleware);


module.exports = app;