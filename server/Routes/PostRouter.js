const express=require('express')
const getPost = require('../controllers/PostController')
const createPost = require('../controllers/PostController')
const router =express.Router()
router.post('/',createPost)
router.get('/:id',getPost)
module.exports=router