const express=require('express')
const updatePost = require('../controllers/PostController')
const getPost = require('../controllers/PostController')
const createPost = require('../controllers/PostController')
const router =express.Router()
router.post('/',createPost)
router.get('/:id',getPost)
router.put('/:id',updatePost)

module.exports=router