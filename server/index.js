// const express= require('express')
// const bodyParser= require('body-parser')
// const mongoose=require('mongoose')
const express =require("express")
const cors=require('cors')
const bodyParser= require("body-parser")

const  dotenv =require("dotenv")
const connection=require("./db")
const AuthRoute=require('./Routes/AuthRoutes')
const UserRoute=require('./Routes/UserRoute')
const 
const app=express();
app.use(bodyParser.json())
app.use(cors())

app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/')



// app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
dotenv.config()
const port=process.env.PORT || 5000;
connection()
app.listen(port,()=> console.log(`app is listening at ${port}`))