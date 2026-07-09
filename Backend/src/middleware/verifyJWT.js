import {User} from "../models/user.model.js";
import jwt from "jsonwebtoken";

const verifyJWT = async(res,req,next)=>{
    try{
        const token = res.cookie.refreshToken || res.header.authorization.replace("Baerer", "");

        if(!token){
            return res.status(401).json({message: "Invalid token"});
        };

        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
        if(!decodedToken){
            return res.status(401).json({message: "Invalid token"});
        };

        const user = await User.findById(decodedToken.UserId);

        req.user = user;
        next();
    }catch(error){
        console.log(error)
        return res.status(500).json({message: "Sever internal error"});
    }
}

export {verifyJWT};

