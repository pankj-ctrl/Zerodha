const express = require('express')
const env =require('dotenv');
const mongoose = require('mongoose')

env.config();


const PORT = process.env.PORT || 3002
const uri = process.env.MONGO_URL




const app = express();
app.get('/',(req,res)=>{
    res.send("Hello this is home")
})

app.listen(PORT,async()=>{
    console.log(`App is listining at port ${PORT}`)
    try {
    await mongoose.connect(uri)
    console.log("Database connected succesfully")
        
    } catch (error) {
        console.log(error);
    }
})