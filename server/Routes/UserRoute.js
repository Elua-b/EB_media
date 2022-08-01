const express=require('express')
const getUser  = require('../controllers/UserController')
const updateUser  = require('../controllers/UserController')
const deleteUser=require('..//controllers/UserController')
const followUser= require('../controllers/UserController')
const unFollowUser= require('../controllers/UserController')

const router=express.Router()

router.get('/:id',getUser)
router.put('/:id',updateUser)
router.put('/:id',unFollowUser)
router.put('/:id/follow',followUser)

router.delete('/:id',deleteUser)

module.exports=router