
const express=require('express')
const {registerDefinition} = require("swaggiffy");

// const loginUser = require('../controllers/AuthController/')
// import { loginUser } from '../controllers/AuthController'
// import { registerUser } from '../controllers/AuthController'
const {loginUser,registerUser}=require('../controllers/AuthController')
const router=express.Router()

router.post('/register',registerUser)

router.post('/login',loginUser)
registerDefinition(router,{tags:'auth', mappedSchema:'Userschema',basePath:'/auth'})
 module.exports=router

  