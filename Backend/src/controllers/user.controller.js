import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "All fiels required" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(409).json({
      message: "User Already exists",
    });
  }

  const createUser = await User.create({ name, email, password });

  return res.status(201).json({message:"User create successfully",user:createUser})
};

const loginUser = async (req,res)=>{
    const {email,password} = req.body ;

    if(!email || !password){
        res.status(400).json({message:"All field required"})
    }

    const user = await User.findOne({email});   

    if(!user){
        res.status(404).json({message:"User not found"})
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);

    if(!isPasswordCorrect){
        res.status(401).json({message:"Invalid Password"})
    }

    const token = jwt.sign({userId:user._id},process.env.JWT_SECRET);
     
    user.refreshToken = token;
    await user.save();

    res.cookie("refreshToken",token,{
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });

    return res.status(200).json({message:"Login Successful",user})
}

export {registerUser,loginUser};

