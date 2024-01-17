import User from "../models/userModel.js";
import handler from 'express-async-handler'

export const registerUser = handler(async(req,res)=>{
    return res.status(201).json({message:"Register User"})
})