import { User } from "../models/user.model.js";

const generateAccessTokenAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error(
      "Something went wrong while generating accessToken and refreshToken",
      error,
    );
  }
};
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

  return res
    .status(201)
    .json({ message: "User create successfully", user: createUser });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "All field required" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    res.status(401).json({ message: "Invalid Password" });
  }

  const { accessToken, refreshToken } =
    await generateAccessTokenAndRefreshToken(user._id);

  const token = {
    refreshToken,
  };

  user.refreshToken = token;
  await user.save();

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };

  return res
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .status(200)
    .json({ message: "Login Successful", user });
};

export { registerUser, loginUser };
