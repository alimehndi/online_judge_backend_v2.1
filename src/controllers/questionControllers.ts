import { Request, Response } from "express";
import asyncHandler from "../middlewares/asyncHandler.js";
import Question from "../models/user/questionModel.js";

// @ desc  get paginated question list;
// @ route api/v1/questions
// @ access private

const getQuestionsList = asyncHandler(async (req: Request, res: Response) => {
    const start = Number(req.query?.start) || 1;
    const limit = Number(req.query?.limit) || 10;

    const skip = (start - 1) * limit;
    const total = await Question.countDocuments();
    const questionList = await Question.find().skip(skip).limit(limit);

    res.status(200).json({
        total: total,
        start: start,
        limit: limit,
        question: questionList,
    });
})

// @ desc  get paginated question list;
// @ route api/v1/question/{id}
// @ access private

const getQuestion = asyncHandler(async (req: Request, res: Response) => {

    const questionId = req.params.questionId;
    const question = await Question.findById(questionId);
    res.status(200).json({

        question: question
    });
})

export { getQuestionsList, getQuestion };