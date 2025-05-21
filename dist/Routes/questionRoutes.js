import { Router } from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { getQuestion, getQuestionsList } from '../controllers/questionControllers.js';
const router = Router();
router.route('/').get(protect, getQuestionsList);
router.route('/:questionId').get(protect, getQuestion);
export { router as questionRouter };
