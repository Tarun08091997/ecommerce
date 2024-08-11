const app = require('./app');
const { connectDatabase } = require('./config/database');
const dotenv = require('dotenv');


dotenv.config({path:'./config/config.env'});

// uncaught errors
process.on("uncaughtException" , err =>{
    console.log(`unCaughtError : ${err.message}`);
    console.log("Shutting down the Server due to error");
    process.exit(1);
})



connectDatabase();



const PORT = process.env.PORT || 4000
const server = app.listen(PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`)
})


// Unhandeled Promise Rejection
process.on('unhandledRejection',(err) =>{
    console.log(`Error : ${err.message}`);
    console.log("Shutting down the Server due to error");
    server.close(()=>{
        process.exit(1);
    });
})