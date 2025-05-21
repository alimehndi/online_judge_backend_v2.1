import express from 'express';
import { authUser, registerUser, logoutUser } from "../controllers/userControllers.js";
const router = express.Router();
router.route('/').post(registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
export { router as userRouter };
