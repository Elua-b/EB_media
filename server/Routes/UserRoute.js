const express=require('express')
const getUser  = require('../controllers/UserController')
const router=express.Router()

router.get('/:id',getUser)
module.exports=router