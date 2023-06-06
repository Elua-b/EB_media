const express=require('express')
const getUser  = require('../controllers/UserController')
const updateUser  = require('../controllers/UserController')
const deleteUser=require('..//controllers/UserController')
const followUser= require('../controllers/UserController')
const unFollowUser= require('../controllers/UserController')
const {registerDefinition} = require("swaggiffy");


const router=express.Router()

router.get('/:id',getUser)
router.put('/:id',updateUser)
router.put('/:id/unFollow',unFollowUser)
router.put('/:id/follow',followUser)

router.delete('/:id',deleteUser)
registerDefinition(router, {tags:'user', mappedSchema:'user',basePath:'/user'})


module.exports=router