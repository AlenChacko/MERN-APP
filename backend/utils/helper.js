import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const hashPassword=async(password)=>{
    try {
        const hashedPass = await bcrypt.hash(password,12)
        return hashedPass
    } catch (error) {
        return error
    }
}
export const generateToken = (payload)=>{
    try {
        const secretKey = process.env.JWT_KEY;
        const token = jwt.sign(payload,secretKey,{expiresIn:"24h"})
        return token
    } catch (error) {
        return error
    }
}