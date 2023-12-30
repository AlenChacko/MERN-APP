import express from "express";
import { body } from "express-validator";
import { registerUser } from "../controllers/authController.js";
const authRouter = express.Router();

authRouter.post(
  "/register",
  [
    body("firstName")
      .isAlpha()
      .isLength({ min: 3 })
      .withMessage(
        "First name must be at least 3 characters long and contain only alphabets"
      ),
    body("lastName")
      .isAlpha()
      .isLength({ min: 1 })
      .withMessage(
        "Last name must be at least 1 character long and contain only alphabets"
      ),
    body("email").isEmail().withMessage("Enter a valid email address"),
    body("password")
      .isLength({ min: 6 })
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
      )
      .withMessage(
        "Password must be at least 6 characters long with one uppercase letter, one lowercase letter, one special character, and one number"
      ),
  ],
  registerUser
);

export default authRouter;
