const UserModel = require("../models/userModels");
const bcrypt=require('bcrypt')
const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such user exists");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
const updateUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdminStatus, password } = req.body;
  
    if (id === currentUserId || currentUserAdminStatus) {
      try {
        if (password) {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(password, salt);
        }
  
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
  
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(403).json("Access Denied! you can only update your own profile");
    }

  };
  const deleteUser=async(req,res)=>{
    const id=req.params.id
    const {currentUserId,currentUserAdminStatus}=req.body
    if(currentUserId === id || currentUserAdminStatus){
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("User deleted sucessfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else{
        res.status(404).json("Access Denied ! you can delete your own profile")
    }
  }
  const followUser=async(req,res)=>{
    const id=req.params.id
    const {currentUserId}=re.body
    if(currentUserId===id){
      res.status(403).json("Action forbidden")
    }
    else{
      try {
        const followUser=UserModel.findById(id)
        const followingUser=UserModel.findById(currentUserId)
        if(!followUser.followers.includes(currentUserId)){
          await followUser.updateOne({$push : {followers:currentUserId}})
          await followingUser.updateOne({$push:{following:id}})
          res.status(200).json("User followed!")
        }
        else{
          res.status(403).json("User is already followed by you")
        }
      } catch (error) {
        res.status(500).json(error)
        
      }
    }
  }
  const unFollowUser=async(req,res)=>{
    const id=req.params.id
    const {currentUserId}=re.body
    if(currentUserId===id){
      res.status(403).json("Action forbidden")
    }
    else{
      try {
        const followUser=UserModel.findById(id)
        const followingUser=UserModel.findById(currentUserId)
        if(followUser.followers.includes(currentUserId)){
          await followUser.updateOne({$pull : {followers:currentUserId}})
          await followingUser.updateOne({$pull:{following:id}})
          res.status(200).json("User Unfollowed!")
        }
        else{
          res.status(403).json("User is not followed followed by you")
        }
      } catch (error) {
        res.status(500).json(error)
        
      }
    }
  }
module.exports = deleteUser;
module.exports=followUser;
module.exports=unFollowUser;
module.exports = updateUser;
module.exports = getUser;
