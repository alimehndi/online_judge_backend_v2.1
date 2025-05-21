import jwt from "jsonwebtoken";
const generateToken = (res, email) => {
    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
    res.cookie('jwtOnlineJudge', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
        sameSite: 'strict', // Prevent CSRF attacks
        // maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    });
};
export default generateToken;
