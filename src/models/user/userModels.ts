import mongoose, { model, Schema } from "mongoose";
import {IUser} from "./user.js";
const userSchema   = new Schema<IUser>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,

    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,     
    }},{
        timestamps : true,
    });

const UserModel = model<IUser>('UserModel', userSchema);

export default UserModel;