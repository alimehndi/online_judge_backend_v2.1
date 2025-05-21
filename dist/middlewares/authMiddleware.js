var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../models/user/userModels.js";
import asyncHandler from "./asyncHandler.js";
import jwt from "jsonwebtoken";
const protect = asyncHandler((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    token = req.cookies.jwtOnlineJudge;
    const jwt_secret_key = process.env.JWT_SECRET_KEY || "";
    if (token) {
        try {
            const decoded = jwt.verify(token, jwt_secret_key);
            const user = User.findById(decoded.user_id).select('-password');
            next();
        }
        catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not Authorized , Token Failed');
        }
    }
    else {
        res.status(401);
        throw new Error('Not Authorized , No Token');
    }
}));
export { protect };
