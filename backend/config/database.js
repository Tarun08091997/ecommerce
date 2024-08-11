const mongo = require('mongoose');

exports.connectDatabase = ()=>{
    mongo.connect(process.env.DB_URI).
        then((data)=>{
            console.log(`mongoose is connected with server ${data.connection.host}`)
        })

}
