const mongoose=require('mongoose')
const {registerSchema}=require('swaggiffy')

const Userschema=mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },

        password:{
            type:String,
            required:true
        },
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
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
registerSchema("Userschema",Userschema)
