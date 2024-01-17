import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    firstName: {
      text: true,
      trim: true,
      type: String,
    },
    lastName: {
      text: true,
      trim: true,
      type: String,
    },
    email: {
      trim: true,
      type: String,
      unique: true,
    },
    password: {
      trim: true,
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
