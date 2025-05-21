var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/user/userModels.js";
import generateToken from "../utils/generateToken.js";
// @ desc  auth user and get token
// @ route api/users/auth
// @ access Public
const authUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User.findOne({ email });
    if (user && (yield user.matchPassword(password))) {
        generateToken(res, user._userId);
        res.json({
            user_id: user._userId,
            email: user.email,
            username: user.username,
            isadmin: user.isAdmin
        });
    }
    else {
        res.status(400);
        throw new Error('Incvalid Email or Password');
    }
}));
// @ desc register user
// @ route api/users
// @ access public
const registerUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, email } = req.body;
    const userExists = yield User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User Already Exist');
    }
    const user = yield User.create({ username, password, email });
    if (user) {
        generateToken(res, user.email);
        res.status(201).json({
            username: user.username,
            _userId: user._userId,
            email: user.email
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid User Data');
    }
}));
// @ desc logout a user
// @ route api/users/logout
// @ access Private/admin
const logoutUser = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.cookie('jwtOnlineJudge', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'User Log Out successFully' });
}));
export { authUser, registerUser, logoutUser };
