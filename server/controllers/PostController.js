const { default: mongoose } = require('mongoose')
const PostModel=require('../models/postModel')
const UserModel=require('../models/userModels')
// const mongoose=require('mongoose')

const createPost=async(req,res)=>{
    const newPost=new PostModel(req.body)
    try {
        await newPost.save()
        res.status(200).json("post created")
    } catch (error) {
        res.status(500).json("not done")
    }
}
const  getPost=async(req,res)=>{
    const id=req.params.id
    try {
        const post=await PostModel.findById(id)
        res.status(200).json(post)

    } catch (error) {
        res.status(500).json(error)
    }
}
 const updatePost=async(req,res)=>{
    const postId=req.params.id
    const {userId}=req.body
    try {
        const post=await PostModel.findById(postId)
        if(post.userId===userId)
        {
            await post.updateOne({$set:req.body})
            res.status(200).json("post updated")
        }
        else{
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }
 }
 const deletePost=async(req,res)=>{
    const id =req.params.id
    const {userId}=req.body
    try {
        const post=await PostModel.findById(id)
        if(post.userId===userId){
            await post.deleteOne();
            res.status(200).json("post deleted successfully");
        }
        else{
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }
 }
 const likePost=async(req,res)=>{
    const id=req.params.id
    const {userId}=req.body
     try {
       const post =await PostModel.findById(id)
        if(!post.likes.includes(userId)){
            await post.updateOne({$push:{likes:userId}})
            res.status(200).json("post liked")
        }
        else{
            await post.updateOne({$pull:{likes:userId}})
            res.status(200).json("post disliked")
        }
     } catch (error) {
        res.status(500).json(error)
     }
 }
 
module.exports=createPost
module.exports=getPost
module.exports=updatePost
module.exports=deletePost
module.exports=likePost



