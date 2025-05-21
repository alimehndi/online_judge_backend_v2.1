import { Request, Response } from "express";
import User from "../models/user/userModels.js";
import asyncHandler from "./asyncHandler.js"
import jwt from "jsonwebtoken";
import { IJwtPayload } from "../models/user/interface.js";
const protect = asyncHandler(async (req: Request, res: Response, next) => {

    let token;
    token = req.cookies.jwtOnlineJudge;
    const jwt_secret_key = process.env.JWT_SECRET_KEY || "";
    if (token) {
        try {
            const decoded = jwt.verify(token, jwt_secret_key) as IJwtPayload;
            const user = User.findById(decoded.user_id).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not Authorized , Token Failed');
        }

    }
    else {
        res.status(401);
        throw new Error('Not Authorized , No Token');
    }

})

export { protect };