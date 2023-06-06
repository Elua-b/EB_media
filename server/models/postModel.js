const mongoose=require("mongoose")
const {registerSchema}=require('swaggiffy')
const postSchema=mongoose.Schema({
    userId:{type:String,required:true},
    desc:String,
    likes:[],
    image:String,
},
{
    timeStamps:true
})
var  PostModel=mongoose.model("posts",postSchema)
module.exports=PostModel;
registerSchema("postSchema",postSchema)
    