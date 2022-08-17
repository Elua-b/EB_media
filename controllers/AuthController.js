const UserModel = require("../models/userModels");
const bcrypt = require("bcrypt");

// const Joi=require("joi")
const registerUser =async (req, res) => {
	try {
		// const { error } = validate(req.body);
        
		// if (error)
		// 	return res.status(400).send({ message: error.details[0].message });

		const user = await UserModel.findOne({ username: req.body.username });
       
		if (user)
			return res
				.status(409)
				.send({ message: "User  already Exist!" });


		const salt = await bcrypt.genSalt(Number(10));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new UserModel({ ...req.body, password: hashPassword }).save();
    
		res.status(201).send({token, message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message:error.message });
        
	}
};
//   // const { username, password, firstname, lastname } = req.body;
//   const salt = await bcrypt.genSalt(10);
//   const hashedPass = await bcrypt.hash(req.body.password, salt);
//   req.body.password = hashedPass;
//   const { username } = req.body;
//   try {
  
    
//     const oldUser = await UserModel.findOne({ username });
//     if (oldUser)
//     {
      
//       return res.status(400).json({ message: "user is already registered" });
//     }
   
//     const newUser = new UserModel(req.body);

//     const user = await newUser.save();
   
//     const token = jwt.sign(
//       {
//         username: user.username,
//         id: user._id,
//       },
//       process.env.JWT_KEY,
//       { expiresIn: "1hr" }
//     );
//     res.status(200).json(user, token);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
    
//   }
// };
const loginUser = async (req, res) => {
	try {
		

		const user = await UserModel.findOne({ username: req.body.username });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = user.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message:error.message });
	}
};




// module.exports.registerUser= registerUser;
// module.exports.loginUser=loginUser;
module.exports = {
  loginUser,
  registerUser,
};
