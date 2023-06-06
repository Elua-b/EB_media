// const express= require('express')
// const bodyParser= require('body-parser')
// const mongoose=require('mongoose')
const express =require("express")
const cors=require('cors')
const bodyParser= require("body-parser")
const { Swaggiffy } = require('swaggiffy'); 

const  dotenv =require("dotenv")
const connection=require("./db")
const AuthRoute=require('./Routes/AuthRoutes')
const UserRoute=require('./Routes/UserRoute')
const PostRoute=require('./Routes/PostRouter')
const UploadRoute=require('./Routes/UploadRoute')
const app=express();
new Swaggiffy().setupExpress(app).swaggiffy();

app.use(express.static('public')); 
app.use('/image', express.static('image'));

app.use(bodyParser.json())
app.use(cors())

app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/post',PostRoute)
app.use('/upload',UploadRoute)


// app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
dotenv.config()
const port=process.env.PORT || 3000;
connection()
app.listen(port,()=> console.log(`app is listening at ${port}`))