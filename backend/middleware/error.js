const ErrorHandler = require('../utils/errorhandler');

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    if (err.isOperational) {
        // Operational error (known error)
        res.status(err.statusCode).json({
            success:false,
          message: err.message,
        });
    }
    else {
      // Mongo DB Error or CastError
      if(err.name === "CastError"){
        const message = `Resource not found. Invalid:${err.path}`;
        err = new ErrorHandler(message,400);
      }
      
      // Programming or other unknown error
        console.error('Unexpected error:', err);
        res.status(500).json({
          success:false,
          message:err.message,
          error:err.stack
        });
    }
}

 