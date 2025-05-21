import jwt from "jsonwebtoken";
import asyncHandler from "../middlewares/asyncHandler.js";
import { IUser } from "../models/user/interface.js";
import { Response } from "express";

const generateToken = (res: Response, user_id : string)=> {
    const token =  jwt.sign({user_id}, process.env.JWT_SECRET_KEY as string, {  expiresIn: '1d' });
    res.cookie('jwtOnlineJudge', token ,{
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
        sameSite: 'strict', // Prevent CSRF attacks
        // maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    });
};
export default generateToken;

 