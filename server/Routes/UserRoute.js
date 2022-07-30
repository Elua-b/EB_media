const express=require('express')
const getUser  = require('../controllers/UserController')
const updateUser  = require('../controllers/UserController')
const deleteUser=require('..//controllers/UserController')
const router=express.Router()

router.get('/:id',getUser)
// router.put('/:id',updateUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports=router