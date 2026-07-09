import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs"
const userSchema = new Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    
    },
    refreshToken:{
        type:String
    },
    accessToken:{
        type:String
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
    
}, { timestamps: true });


userSchema.pre("save", async function(){
    if(!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password,10);
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}


    

const User = model("User",userSchema)
export {User};