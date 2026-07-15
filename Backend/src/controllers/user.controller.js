import { User } from "../models/user.model.js";
import {ApiError} from "../utils/apiError.js";

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
const registerUser = async (req, res,next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
  return next(new ApiError(400, "All field required"));
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return next(
      new ApiError(409, "Sorry, Authentication failed, Email-ID already exists")
    );
  }

  const createUser = await User.create({ name, email, password });

  return res
    .status(201)
    .json({ message: "User create successfully", user: createUser });
};

const loginUser = async (req, res,next) => {
  const { email, password } = req.body;

  if (!email || !password) {
   return next(new ApiError(400, "All field required"));
  }

  const user = await User.findOne({ email });

  if (!user) {
   return next(
     new ApiError(404, "Sorry, Authentication failed, User not found")
   );
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
  return next(new ApiError(401, "Sorry, Authentication failed"));
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
