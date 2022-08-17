const mongoose=require('mongoose')
const jwt = require("jsonwebtoken");
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
Userschema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY, {
		expiresIn: "7d",
	});
	return token;
};



const UserModel=mongoose.model("users",Userschema);
module.exports=UserModel
