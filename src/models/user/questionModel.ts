import { Schema, model } from "mongoose";
import { IQuestion, IQuestionExample } from "./interface.js";

const questionExampleSchema = new Schema<IQuestionExample>({
    questionExampleId: {
        type: String,
        required: true,
    },
    questionExampleInput: {
        type: String,
        required: true,
    },
    questionExampleOutput: {
        type: String,
        required: true,
    },
})

const questionSchema = new Schema<IQuestion>({
    _questionId: {
        type: String,
        required: true
    },
    questionDescription: String,
    questionExample: [questionExampleSchema]
})

const Question = model<IQuestion>('Question', questionSchema);

export default Question;
 