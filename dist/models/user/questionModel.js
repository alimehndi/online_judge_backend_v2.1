import { Schema, model } from "mongoose";
const questionExampleSchema = new Schema({
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
});
const questionSchema = new Schema({
    _questionId: {
        type: String,
        required: true
    },
    questionDescription: String,
    questionExample: [questionExampleSchema]
});
const Question = model('Question', questionSchema);
export default Question;
