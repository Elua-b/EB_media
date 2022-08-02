const PostModel=require('../models/postModel')
// const mongoose=require('mongoose')

const createPost=async(req,res)=>{
    const newPost=new PostModel(req.body)
    try {
        await newPost.save()
        res.status(200).json("post created")
    } catch (error) {
        res.status(500).json(error)
    }
}
const  getPost=async(req,res)=>{
    const id=req.params.id
    try {
        const post=await PostModel.findById(id)
        res.status(200).json(post)

    } catch (error) {
        res.status(500).json("not done")
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
module.exports=createPost
module.exports=getPost
module.exports=updatePost

