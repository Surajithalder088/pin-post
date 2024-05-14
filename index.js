
import express from "express";
const app=express();
import mongoose from 'mongoose';
import userRouter from './router/user.js'
import pageRouter from './router/page.js'
const dbConnect=()=>{
mongoose.connect('mongodb://localhost:27017/pin')
.then(console.log(" connected to data base"))
.catch(e =>console.log("failed to connect database",e))
}

app.set('view engine','ejs');


app.use("/pages",pageRouter)
app.use("/api/v1/user",userRouter)
app.listen(4000,()=>{
    dbConnect();
    console.log(" server running ");
})

console.log(" http://localhost:4000/pages/home ");