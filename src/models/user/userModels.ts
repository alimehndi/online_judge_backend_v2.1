import mongoose, { HydratedDocument, model, Schema } from "mongoose";
import { IUser } from "./interface.js";
import bcrypt from "bcryptjs";
const userSchema = new Schema<IUser>({
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
    }
}, {
    timestamps: true,
}

);

userSchema.methods.matchPassword = async function (this: IUser, enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre('save', async function (this: HydratedDocument<IUser>, next) {
    
    if (this.isModified(this.password)) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = model<IUser>('User', userSchema);

export default User;