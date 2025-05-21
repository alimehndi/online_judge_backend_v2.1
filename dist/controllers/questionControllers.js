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
import Question from "../models/user/questionModel.js";
// @ desc  get paginated question list;
// @ route api/v1/questions
// @ access private
const getQuestionsList = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const start = Number((_a = req.query) === null || _a === void 0 ? void 0 : _a.start) || 1;
    const limit = Number((_b = req.query) === null || _b === void 0 ? void 0 : _b.limit) || 10;
    const skip = (start - 1) * limit;
    const total = yield Question.countDocuments();
    const questionList = yield Question.find().skip(skip).limit(limit);
    res.status(200).json({
        total: total,
        start: start,
        limit: limit,
        question: questionList,
    });
}));
// @ desc  get paginated question list;
// @ route api/v1/question/{id}
// @ access private
const getQuestion = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questionId = req.query.questionId;
    const question = yield Question.findById({ questionId });
    res.status(200).json({
        question: question
    });
}));
export { getQuestionsList, getQuestion };
