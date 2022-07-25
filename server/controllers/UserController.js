const UserModel = require("../models/userModels");

const getUser=async(req,res)=>{
    const id=req.params.id;
    try {
        const user=await UserModel.findById(id);
        if(user){
            const {password,...otherDetails}=user._doc
            res.status(200).json(otherDetails)
        }
        else{
            res.status(404).json("No such user exists")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
const updateUser=async(req,res) =>{
    const id=req.params.id
    const {currentUserId,currentUserAdminStatus,password}=req.body
    if(id===currentUserId || currentUserAdminStatus)
    {
        try {
            const user=await UserModel.findByIdAndUpdate(id, req.body, {new:true})
            res.status(200).json(user)
            console.log(user);
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
module.exports=updateUser
module.exports=getUser