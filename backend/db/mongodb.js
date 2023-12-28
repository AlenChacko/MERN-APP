import mongoose from "mongoose";
import handler from "express-async-handler";

const connectDatabase = handler(async () => {
  try {
    const connectDB = await mongoose.connect(process.env.MONGO_URI);
    console.log(`database connected : ${connectDB.connection.host}`);
  } catch (error) {
    console.log(`database disconnected : ${error}`);
    process.exit(1);
  }
});
export default connectDatabase;
