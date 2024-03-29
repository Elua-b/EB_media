const UserModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const registerUser = async (req, res) => {
  // const { password, firstname, lastname } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass;
  const newUser = new UserModel(req.body);
  const {username}=req.body
  try {
    const oldUser=await UserModel.findOne({username})
    if(oldUser)
    {
      return res.status(400).json({message:"user is already registered"})
    }
    await newUser.save();
    res.status(200).json(newUser);
    console.log("doneeeeeeeeee");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  
  try {
    const user = await UserModel.findOne({ username: username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      validity
        ? res.status(200).json(user)
        : res.status(400).json("wrong password");
    } else {
      res.status(404).json("user does not exists at all");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// module.exports.registerUser= registerUser;
// module.exports.loginUser=loginUser;
module.exports = {
  loginUser,
  registerUser,
};
