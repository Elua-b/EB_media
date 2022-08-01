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
module.exports=createPost