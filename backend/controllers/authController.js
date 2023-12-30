import handler from "express-async-handler";
import { validationResult } from "express-validator";
import User from "../models/userModel.js";
import { generateToken, hashPassword } from "../utils/helper.js";

export const registerUser = handler(async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, password } = req.body;
    const prevUser = await User.findOne({ email: email });
    if (prevUser) {
      return res.status(409).json({
        error: "This email already registered,try another email or login",
      });
    } else {
      const hashedPassword = await hashPassword(password);
      const newUser = await new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      }).save();
      const token = generateToken({ id: newUser._id });
      const response = { ...newUser._doc };
      delete response.password;
      return res
        .status(201)
        .json({ message: "Registration successful", response, token });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
