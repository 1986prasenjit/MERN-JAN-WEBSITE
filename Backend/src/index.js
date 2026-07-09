import express from "express";
import dotenv from "dotenv";
import dbConnect from "./dbConnect/dbConnect.js";
import userRoute from "./routes/user.route.js"


dotenv.config({path:"./.env"});

const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use("/api/v1/user",userRoute);

const PORT = process.env.PORT || 5000;

dbConnect().then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server is running on port number ${PORT}`);
})
}).catch((error)=>{
    console.log(`Error in Connecting DataBase ${error}`)
})