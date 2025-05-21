import express, { Router } from 'express';
import { authUser, registerUser, logoutUser } from "../controllers/userControllers.js";
import { protect } from '../middlewares/authMiddleware.js';
const router = express.Router();
router.route('/').post(registerUser)
router.post('/auth', authUser);
router.post('/logout', logoutUser);

export { router as userRouter };
 