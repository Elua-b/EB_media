// const express= require('express')
// const bodyParser= require('body-parser')
// const mongoose=require('mongoose')
const express =require("express")
const bodyParser= require("body-parser")
// import mongoose  from "mongoose";
const  dotenv =require("dotenv")
const connection=require("./db")
const app=express();
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
dotenv.config
const port=process.env.PORT || 5000;
connection()
app.listen(port,()=> console.log(`app is listening at ${port}`))