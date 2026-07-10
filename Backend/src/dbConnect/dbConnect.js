import mongoose from "mongoose";
const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Db Connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log(`Error is ${error}`);
    process.exit(1);
  }
};
export default dbConnect;

