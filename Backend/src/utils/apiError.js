class ApiError extends Error {
    constructor(statusCode, success, error = [], stack = "", message = "Error while fetching the data") {
        super(message);
        this.message = message;
        this.statusCode =  statusCode;
        this.success = statusCode < 400;
        this.error = error;
        
        if (stack) {
            this.stack = stack;
        }else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
    toJSON(){
        return {
            message: this.message,
            statusCode: this.statusCode,
            success: this.success,
            error: this.error
        }
    }

}

export  {ApiError};