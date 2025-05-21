import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/user/userModels.js"
import bcrypt from 'bcryptjs';
import generateToken from "../utils/generateToken.js";
import { IUser } from "../models/user/interface.js";

// @ desc  auth user and get token
// @ route api/users/auth
// @ access Public

const authUser = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }) as IUser;

    if (user && await user.matchPassword(password)) {
        generateToken(res, user._userId);
        res.json({
            user_id: user._userId,
            email: user.email,
            username: user.username,
            isadmin: user.isAdmin
        }
        )
    }
    else {
        res.status(400);
        throw new Error('Incvalid Email or Password');
    }

});


// @ desc register user
// @ route api/users
// @ access public

const registerUser = asyncHandler(async (req: Request, res: Response) => {

    const { username, password, email } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User Already Exist')
    }

    const user = await User.create({ username, password, email });
    if (user) {
        generateToken(res, user.email);
        res.status(201).json({
            username: user.username,
            _userId: user._userId,
            email: user.email
        })

    }
    else {
        res.status(400);
        throw new Error('Invalid User Data')
    }
})

// @ desc logout a user
// @ route api/users/logout
// @ access Private/admin

const logoutUser = asyncHandler(async (req: Request, res: Response) => {
    res.cookie('jwtOnlineJudge', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({ message: 'User Log Out successFully' })
});

export {
    authUser,
    registerUser,
    logoutUser
}