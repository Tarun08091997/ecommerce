const app = require('./app');



app.get("/",(req,res,next)=>{
    return res.status(200).send("LOL")
})



const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`server is listening on http://localhost:${PORT}`)
})