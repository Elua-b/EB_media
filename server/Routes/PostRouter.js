const express=require('express')
const {registerDefinition} = require("swaggiffy");


// const deletePost = require('../controllers/PostController')
// const getTimeLinePosts = require('../controllers/PostController')
// const likePost = require('../controllers/PostController')
// const updatePost = require('../controllers/PostController')
// const getPost = require('../controllers/PostController')
// const createPost = require('../controllers/PostController')
const {deletePost,getTimelinePosts,likePost,updatePost,getPost,createPost} =require('../controllers/PostController')
const router =express.Router()
router.post('/',createPost)
router.get('/:id',getPost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)
router.put('/:id/like',likePost)
router.get('/:id/timeline',getTimelinePosts)
registerDefinition(router, {tags:'post', mappedSchema:'post',basePath:'/post'})
module.exports=router