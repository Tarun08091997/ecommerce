class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;  // means error is user genrated
        Error.captureStackTrace(this , this.constructor);
        
    }
}

module.exports = ErrorHandler;