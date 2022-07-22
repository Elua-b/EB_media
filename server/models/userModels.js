const mongoose=require('mongoose')
const Userschema=mongoose.Schema(
    {
        username:{
            type:String,
            require:true
        },

        password:{
            type:String,
            require:true
        },
        firstname:{
            type:String,
            require:true
        },
        lastname:{
            type:String,
            require:true
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        profilePicture:String,
        coverpicture:String,
        about:String,
        livesin:String,
        worksAt:String,
        relationship:String,
        followers:[],
        folloowing:[]
    },
    {timestamps: true}

)
const UserModel=mongoose.model("users",Userschema);
module.exports=UserModel
